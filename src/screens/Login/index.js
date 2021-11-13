import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Login.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'

const breadcrumbs = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Login',
	},
]

// const items = [
// 	{
// 		url: '/upload-details',
// 		buttonText: 'Create Single',
// 		image: '/images/content/upload-pic-1.jpg',
// 		image2x: '/images/content/upload-pic-1@2x.jpg',
// 	},
// ]

const Login = () => {
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
							<form>
								<TextInput
									className={styles.field}
									label='Email Address'
									name='email'
									type='email'
									placeholder='Enter your display name'
									required
								/>

								<TextInput
									className={styles.field}
									label='Password'
									name='password'
									type='password'
									placeholder='Enter your password'
									required
								/>

								<Link
									onClick={(e) => {
										e.preventDefault()
									}}
									className={cn('button-stroke', styles.button)}
									to={'#'}
								>
									Login
								</Link>
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
