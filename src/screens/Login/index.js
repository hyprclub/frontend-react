import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Login.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'
import { useHistory } from 'react-router'
import { firebaseApp } from '../../firebaseConfig'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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

const Login = () => {
	const loggedIn = useSelector((state) => state.UserData.loggedIn)
	const [data, setData] = useState({ email: '', password: '' })
	function updateState(e) {
		setData((state) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const handleSubmit = async () => {
		try {
			const auth = getAuth()
			const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
			console.log({ data, userCredential })
		} catch (err) {
			console.error(err)
		}
	}
	const { push } = useHistory()
	useEffect(() => {
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
						<h1 className={cn('h2', styles.title)}>Login</h1>
						Become a part of the social revolution.
						{/* <div className={styles.info}> */}
						{/* sell one collectible multiple times */}
						{/* </div> */}
					</div>
					<div className={styles.list}>
						<div className={styles.item}>
							<form
								onSubmit={(e) => {
									e.preventDefault()
									handleSubmit()
								}}
							>
								<TextInput
									onChange={(e) => {
										updateState(e)
									}}
									className={styles.field}
									value={data.email}
									label='Email Address'
									name='email'
									type='email'
									placeholder='Enter your email'
									required
								/>

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
								<input className={cn('button-stroke', styles.button)} type='submit' value='Login' />
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
						</div>
					</div>
					<div className={styles.note}>We do not own your private keys and cannot access your funds without your confirmation.</div>
				</div>
			</div>
		</div>
	)
}

export default Login
