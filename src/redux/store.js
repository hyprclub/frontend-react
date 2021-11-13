import { configureStore } from '@reduxjs/toolkit'

import UserData from './slices/UserData'

export const store = configureStore({
	reducer: {
		UserData,
	},
})
