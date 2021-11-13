import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loggedIn: false,
	email: undefined,
}

export const userDataSlice = createSlice({
	name: 'UserData',
	initialState,
	reducers: {
		login: (state) => {
			state.loggedIn = true
		},
	},
})

export const UserDataActions = userDataSlice.actions

export default userDataSlice.reducer
