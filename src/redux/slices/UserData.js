import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  email: undefined,
  uid: undefined,
  bio: undefined,
  facebook: undefined,
  instagram: undefined,
  twitter: undefined,
  name: undefined,
  username: undefined,
  phoneno: undefined,
  portfolio: undefined,
  admin: undefined,
  creator: undefined,
  profileDP: undefined,
  json: undefined,
  nftIds: [],
};

export const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = true;
      state.uid = payload?.uid;
      state.email = payload?.email;
    },
    logout: (state) => {
      state = initialState;
    },
    updateUserDetails: (state, { payload }) => {
      state.bio = payload?.Bio;
      state.facebook = payload?.Facebook;
      state.instagram = payload?.Instagram;
      state.twitter = payload?.Twitter;
      state.name = payload?.Name;
      state.username = payload?.Username;
      state.phoneno = payload?.Phone;
      state.portfolio = payload?.Portfolio;
    },
    updateUserDP: (state, { payload }) => {
      state.profileDP = payload?.profileDP;
    },
    nftData: (state, { payload }) => {
      state.nftIds = payload?.nftIds;
    },
  },
});

export const UserDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
