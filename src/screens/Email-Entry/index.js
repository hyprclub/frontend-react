import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Login.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'
import { useHistory } from 'react-router'
import { firebaseApp } from '../../firebaseConfig'
import { Button, Modal } from 'react-bootstrap';
import { getAuth,sendPasswordResetEmail ,  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink, } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { useSelector } from 'react-redux'

const breadcrumbs = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Password Less Sign In',
	},
]

const Passwordless = () => {
	const loggedIn = useSelector((state) => state.UserData.loggedIn)
	const UserData = useSelector((state) => state.UserData)
	const [data, setData] = useState({ email: '', password: '' })
	function updateState(e) {
		setData((state) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const [show, setShow] = useState(false);
    const [error , setError] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const handleSubmit = async () => {
		 const auth = getAuth();
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: window.location.href,
      // This must be true.
      handleCodeInApp: true,
    };
		 try {
      await sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
        .then((result) => {
          console.log(result);
          console.log(window.location.href);
          handleShow()
		  setError('E-Mail Sent!');
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
	}
	const { push } = useHistory()
 useEffect(() => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            const db = getFirestore();
            const user = result.user;
            const uid = user.uid;
			if(user.exist()){
				console.log("exists")
			}else{
				setDoc(doc(db, "users", uid), {
              Name: "",
              Emailid: "",
              Phone: "",
              Username: "",
              UserID: uid,
              admin: false,
              creator: false,
              Bio: "",
              Instagram: "",
              Portfolio: "",
              Twitter: "",
            });
				
			}
			
            window.localStorage.removeItem("emailForSignIn");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, []);
	useEffect(() => {
		console.log(UserData)
		if (loggedIn) {
			push('/')

		}
	}, [loggedIn, push])

	return (
		<div className={styles.page}>
			<Control className={styles.control} item={breadcrumbs} />
			<div className={cn('section-pt80', styles.section)}>
				<div className={cn('container', styles.container)}>
					<div className={styles.top}>
						<h1 className={cn('h2', styles.title)}>Password Less Sign-In</h1>
						Become a part of the social revolution.
						
					</div>
					<div className={styles.list}>
						<div className={styles.item}>
							<form className="needs-validation" novalidate
								onSubmit={(e) => {
									e.preventDefault()
									handleSubmit()
								}}
							>
								{/* <label for="validationCustom01">First name</label> */}
								<div>
									<TextInput
										onChange={(e) => {
											updateState(e)
										}}
										className={styles.field}
										id="validationCustom01"
										value={data.email}
										name='email'
										label="Email"
										type='email'
										placeholder='Enter your email'
										required
									/>
									{/* <div class="invalid-feedback">
										Please choose a username.
									</div> */}
								</div>
								<Button className={cn('button-stroke', styles.button)}><input type='submit' value='Sent Sign-In Email.' /></Button>

								{/* <Link
										onClick={(e) => {
											e.preventDefault()
										}}
										to={'#'}
									>
										Login
									</Link> */}
								{/* </input> */}
							</form>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Notification</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					{error}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{/* <Button variant="primary">Understood</Button> */}
				</Modal.Footer>
			</Modal>

						</div>
					</div>
					<div className={styles.note}>We do not own your private keys and cannot access your funds without your confirmation.</div>
				</div>
			</div>
		</div>

	)
}

export default Passwordless