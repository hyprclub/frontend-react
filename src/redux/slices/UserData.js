import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  email: undefined,
  uid: undefined,
  bio: undefined,
  instagram: undefined,
  twitter: undefined,
  name: undefined,
  username: undefined,
  phoneno: undefined,
  portfolio: undefined,
  admin: undefined,
  creator: undefined,
  profileDP: undefined,
  nftIds: [],
  nftIdsLogOut: [],
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
      state.instagram = payload?.Instagram;
      state.twitter = payload?.Twitter;
      state.name = payload?.Name;
      state.username = payload?.Username;
      state.phoneno = payload?.Phone;
      state.portfolio = payload?.Portfolio;
      state.creator = payload?.creator;
      state.admin = payload?.admin;
    },
    updateUserDP: (state, { payload }) => {
      state.profileDP = payload?.profileDP;
    },
    nftData: (state, { payload }) => {
      state.nftIds = payload?.nftIds;
    },
    nftDataId: (state, { payload }) => {
      state.nftIdsLogOut = payload?.nftIdsLogOut;
    },
  },
});

export const UserDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
