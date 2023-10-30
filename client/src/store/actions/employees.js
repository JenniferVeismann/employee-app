import instance from '../../index';
import { changeHide, changeShow, loadUsers, loadUsersFailure, loadUsersSuccess } from "../slices/userSlice";


export  function fetchData() {
    return async dispatch => {
      dispatch(loadUsers())
      
      try {
        const response = await instance.get('/employees');
        const data = await response.data;
  
        dispatch(loadUsersSuccess(data))
        
      } catch (error) {
        dispatch(loadUsersFailure())
      }
    }
  };

 export function handleDelete(id) {
    return async dispatch => {
        dispatch(loadUsers());
        
    try {
      await instance.delete(`/employees/${id}`);
      dispatch(loadUsersSuccess());
      dispatch(fetchData())
    } catch (error) {
      dispatch(loadUsersFailure());
    }
  };}

  export function handleUpdateClick(employee){
    
    console.log('siiiiin');
    return async dispatch =>{
        dispatch(loadUsers())
    try {
      await instance.put(`/employees/${employee.id}`, employee);
        dispatch(loadUsersSuccess());
        dispatch(fetchData());
    } catch(error){
      console.log(employee)
        dispatch(loadUsersFailure());
    }  
    }
  };
  export function showFormEmployee(){
    return async dispatch =>{
      dispatch(loadUsers());

      try{
        dispatch(changeShow())
        dispatch(fetchData())
      }catch (error) {
      dispatch(loadUsersFailure());
    }
    };
  }
  export function closeForm(){
    return async dispatch =>{
      dispatch(loadUsers());

      try{
        dispatch(changeHide())
        dispatch(fetchData())
      }catch (error) {
      dispatch(loadUsersFailure());
    }
    };
  }



  


// export  { fetchData };
