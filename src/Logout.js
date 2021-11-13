import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { logOut } from './firebaseConfig'
import { useDispatch } from 'react-redux'
import { UserDataActions } from './redux/slices/UserData'

export function Logout() {
	const { push } = useHistory()
	const dispatch = useDispatch()
	useEffect(() => {
		logOut()
			.then(() => {
				dispatch(UserDataActions.logout())
				push('/')
				window?.location.reload()
			})
			.catch(() => {
				dispatch(UserDataActions.logout())
				push('/')
				window?.location.reload()
			})
	}, [push, dispatch])
	return <></>
}
