import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'usersReducer',
  initialState: {

    loading: false,
    error: false,
    success: false,
    list: [],
    showAddEmployeeForm:false,
    select:null,
    refresh:false,
    showUpdateForm: false,
    selectedEmployee: {}
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
    changeAddShow: (state) =>{
      state.showAddEmployeeForm=true;
      state.showUpdateForm=false;
    },
    changeAddHide: (state) =>{
      state.showAddEmployeeForm=false;
    },
    changeUpdateShow:(state, action)=>{
      state.showUpdateForm=true;
      state.selectedEmployee = action.payload
      state.showAddEmployeeForm=false;

    },
    changeUpdateHide:(state)=>{
      state.showUpdateForm=false;

    }

  },
})

export const { loadUsers, loadUsersSuccess,changeAddShow, loadUsersFailure, changeAddHide, changeUpdateShow, changeUpdateHide} = usersSlice.actions;

export default usersSlice.reducer;