import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './ProfileEdit.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'
import TextArea from '../../components/TextArea'
import Icon from '../../components/Icon'
import { useSelector } from 'react-redux'
import { firebaseApp } from '../../firebaseConfig'
import {doc,
  updateDoc,
  getFirestore,} from 'firebase/firestore'
  import {
	  	getStorage,
  		ref,
 		uploadBytesResumable,
  		getDownloadURL,
  } from 'firebase/storage'

const breadcrumbs = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Edit Profile',
	},
]




const ProfileEdit = () => {
	// const UserData = useSelector((state) => state.UserData)
	// const [socialState,setSocialState] = useState(socials)
	const [data, setData] = useState({ name : '' , email: '' })
	const UserData = useSelector((state) => state.UserData)
	const [input, setInput] = useState('')
	function updateState(e) {
		setData((state) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const updateUserProfile= async() => {
		try {
			const db  = getFirestore();
			const storage = getStorage();
			const storagePFref = ref(
    				storage,
   					 "users/" + UserData.uid + "/profile.jpg"
                 );
			await updateDoc(doc(db , "users" ,UserData.uid),{
				 Name: data.name,
                 Emailid: data.email,
                 Phone: data.phone,
                 Bio: data.bio,
                 Portfolio: data.portfolio,
                //  Instagram: userpfInstagram,
   				 Instagram: data.instagram,
			});
	
		} catch (error) {
			console.error(error)
			}
	
	}

	return (
		<div className={styles.page}>
			<Control className={styles.control} item={breadcrumbs} />
			<div className={cn('section-pt80', styles.section)}>
				<div className={cn('container', styles.container)}>
					<div className={styles.top}>
						<h1 className={cn('h2', styles.title)}>Edit profile</h1>
						<div className={styles.info}>
							You can set preferred display name, create <strong>your profile URL</strong> and manage other personal settings.
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.col}>
							<div className={styles.user}>
								<div className={styles.avatar}>
									<img src={UserData.profileDP || '/images/content/avatar-big.jpg'} alt='Avatar' />
								</div>
								<div className={styles.details}>
									<div className={styles.stage}>Profile photo</div>
									<div className={styles.text}>
										We recommend an image of at least 400x400. Gifs work too{' '}
										<span role='img' aria-label='hooray'>
											🙌
										</span>
									</div>
									<div className={styles.file}>
										<button className={cn('button-stroke button-small', styles.button)}>Upload</button>
										<input className={styles.load} onChange={(e) => {
											e.preventDefault()
									     }}
										 name = 'userdp'
										 type='file' />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.col}>
							<div className={styles.list}>
								<div className={styles.item}>
									<div className={styles.category}>Account info</div>
									<div className={styles.fieldset}>
										<TextInput
										onChange={(e) => {
											updateState(e)
									     }}
											className={styles.field}
											defaultValue = {UserData.name}
											label='Name'
											name='name'
											type='text'
											placeholder='Enter your Name'
											required
										/>
										<TextInput
										onChange={(e) => {
											updateState(e)
									     }}
											className={styles.field}
											defaultValue = {UserData.email}
											label='Email'
											name='email'
											type='text'
											placeholder='Enter your Email Address'
											disabled ="true"
											required
										/>
										<TextInput
										onChange={(e) => {
											updateState(e)
									     }}
											className={styles.field}
											defaultValue = {UserData.phoneno}
											label='Phone Number'
											name='phone'
											type='text'
											placeholder='Enter your Phone Number'
											required
										/>
										<TextArea
										onChange={(e) => {
											updateState(e)
									     }}
											className={styles.field}
											defaultValue = {UserData.bio}
											label='Bio'
											name='bio'
											placeholder='About yourselt in a few words'
											required='required'
										/>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.category}>Social</div>
									<div className={styles.fieldset}>
										<TextInput
										onChange={(e) => {
											updateState(e)
									     }}
											className={styles.field}
											defaultValue = {UserData.portfolio}
											label='Portfolio or website'
											name='portfolio'
											type='text'
											placeholder='Enter URL'
											
										/>
										<div className={styles.box}>
											<TextInput
											onChange={(e) => {
											updateState(e)
									     }}
												className={styles.field}
												defaultValue = {UserData.instagram}
												label='Instagram'
												name='instagram'
												type='text'
												placeholder='instagram.com/username'
											
											/>
											
										</div>
									</div>
								</div>
							</div>
							<div className={styles.note}>
								To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message
							</div>
							<div className={styles.btns}>
								<button onClick={(e) => {
									e.preventDefault()
										updateUserProfile()
									     }} className={cn('button', styles.button)}>Update Profile</button>
								<button className={styles.clear}>
									<Icon name='circle-close' size='24' />
									Clear all
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileEdit
