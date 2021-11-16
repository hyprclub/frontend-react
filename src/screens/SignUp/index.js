import React, { useState, useEffect } from "react";
import cn from 'classnames'
import styles from './Signup.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'
// import { firebaseApp } from '../../firebaseConfig'
import { useHistory } from 'react-router'
import {  getAuth,
  createUserWithEmailAndPassword
  ,GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import {
    getFirestore,
    setDoc,
    doc
} from 'firebase/firestore'
import { useSelector } from 'react-redux'

const breadcrumbs = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Login',
    },
]
const Signup = () => {
    const loggedIn = useSelector((state) => state.UserData.loggedIn)
    const UserData = useSelector((state) => state.UserData)
    const [data, setData] = useState({email :'' , password : '' , name : '' ,username :'' , phone :''})
    function updateState(e) {
        setData((state) => ({ ...state, [e.target.name]: e.target.value }))


    }
    const handleSubmit = async () => {
        try {
            const auth = getAuth();
            const db = getFirestore();
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            const user = userCredential.user;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
            const data1 = await setDoc(doc(db,"users",uid),{
                Name: data.name,
                Emailid: data.email,
                Phone: data.phone,
                Username: data.username,
                UserID: uid,
                admin : false ,
                creator : false,
                Bio : "",
                Instagram : "",
                Portfolio : "",
                Twitter : ""
            })

            console.log({ data, userCredential })
        } catch (err) {
            console.error(err)
        }
    }
    const googlesignin = async () =>{
		const db = getFirestore();

		const googleprovider = new GoogleAuthProvider();
		const auth = getAuth();
		const google = await signInWithPopup(auth, googleprovider);
		const credential = GoogleAuthProvider.credentialFromResult(google);
		const user = google.user;
     	const email = user.email;
        const name = user.displayName;
		const uid =user.uid;

		setDoc(doc(db, "users", uid), {
       				 Emailid: email,
        			 Name: name,
       				 UserID: uid,
       			 

      });
		

	}
    const { push } = useHistory()
    useEffect(() => {
        console.log(UserData)
        if (loggedIn) {
            push('/')

        }
    }, [loggedIn, push])

    return (
        <>
            <div className={styles.page}>
                <Control className={styles.control} item={breadcrumbs} />
                <div className={cn('section-pt80', styles.section)}>
                    <div className={cn('container-fluid', styles.container)}>
                        <div className={styles.top}>
                            <h1 className={cn('h2', styles.title)}>Create an Account</h1>
                            Become a part of the social revolution.
                            {/* <div className={styles.info}> */}
                            {/* sell one collectible multiple times */}
                            {/* </div> */}
                        </div>
                        {/* <div className="row"> */}
                        <div className={styles.item}>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}
                            >
                                <div className={styles.ks}>
                                    <div className="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div>
                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    value={data.name}
                                                    label='Name'
                                                    name='name'
                                                    type='text'
                                                    placeholder='Enter your Full Name'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div >
                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    label='User Name'
                                                    name='username'
                                                    type='text'
                                                    placeholder='Enter your Username'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div>

                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    label='Email Address'
                                                    name='email'
                                                    type='email'
                                                    placeholder='Enter your email'
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div>

                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    label='Phone Number'
                                                    name='phone'
                                                    type='text'
                                                    placeholder='Enter your Phone number'
                                                    required
                                                /></div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div>

                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    label='Password'
                                                    name='password'
                                                    type='password'
                                                    placeholder='Enter your password'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div>

                                                <TextInput
                                                    onChange={(e) => {
                                                        updateState(e)
                                                    }}
                                                    className={styles.field}
                                                    label='Confirm Password'
                                                    name='cpassword'
                                                    type='password'
                                                    placeholder='Re-Enter your password'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <Link
										onClick={(e) => {
                                            e.preventDefault()
										}}
										to={'#'}
                                        >
										Login
									</Link> */}
                                        {/* </input> */}
                                    </div>
                                   
                                </div>
                                        {/* <div>  <input  className={cn('button-stroke', styles.button)} type='submit' value='Login With Google' /></div> */}
                                <div className={styles.signBut}>
                                    <div><input className={cn('button-stroke', styles.button,)} 
                                     type='submit'
                                      value='Sign Up'
                                       onClick = {(e) => {
								 e.preventDefault()
								 handleSubmit(e)
							 }} /></div>
                                </div>
                            </form>
                                        <div className={cn('button-stroke', styles.button)}> <img class="icons mr-3" src="/google.png" /> <button 
                                        type="submit"
                                         onClick = {(e) => {
								 e.preventDefault()
								 googlesignin(e)
							 }}>Sign up with Google</button></div>
                            {/* </div> */}
                        </div>
                        <div className={styles.note}>We do not own your private keys and cannot access your funds without your confirmation.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup