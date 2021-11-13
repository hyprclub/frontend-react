import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loggedIn: false,
	email: undefined,
	uid: undefined,
}

export const userDataSlice = createSlice({
	name: 'UserData',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.loggedIn = true
			state.uid = payload?.uid
			state.email = payload?.email
		},
	},
})

export const UserDataActions = userDataSlice.actions

export default userDataSlice.reducer
