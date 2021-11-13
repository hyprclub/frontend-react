import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { logOut } from './firebaseConfig'

export function Logout() {
	const { push } = useHistory()
	useEffect(() => {
		logOut()
			.then(() => {
				push('/')
			})
			.catch(() => {
				push('/')
			})
	}, [push])
	return <></>
}
