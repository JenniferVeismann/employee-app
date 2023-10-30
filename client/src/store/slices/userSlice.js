import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'usersReducer',
  initialState: {

    loading: false,
    error: false,
    success: false,
    list: [],
    show:false,
    select:null,
    refresh:false,
    // showUpdateForm: false,
  },
  reducers: {
    loadUsers: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    loadUsersSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.list = action.payload;
    },
    loadUsersFailure: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
    changeShow: (state) =>{
      state.show=true;
    },
    changeHide: (state) =>{
      state.show=false;
    },

  },
})

export const { loadUsers, loadUsersSuccess, loadUsersFailure, changeShow, changeHide } = usersSlice.actions;

export default usersSlice.reducer;