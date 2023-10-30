import instance from '../../index';
import { changeAddHide, changeAddShow, changeUpdateHide, changeUpdateShow, loadUsers, loadUsersFailure, loadUsersSuccess } from "../slices/userSlice";


export function fetchData() {
    return async dispatch => {
      dispatch(loadUsers());
      
      try {
        const response = await instance.get('/employees');
        const data = await response.data;
  
        dispatch(loadUsersSuccess(data));
        
      } catch (error) {
        dispatch(loadUsersFailure());
      }
    }
  };

 export function handleDelete(id) {
    return async dispatch => {
        dispatch(loadUsers());
        
    try {
      await instance.delete(`/employees/${id}`);
      dispatch(loadUsersSuccess());
      dispatch(fetchData());
    } catch (error) {
      dispatch(loadUsersFailure());
    }
  };}

  export function handleUpdateClick(employee){
    
    return async dispatch =>{
      try {

        const putObject = {
          name: employee.name,
          title: employee.title,
          tribe_id: employee.tribe.id
        }
        dispatch(changeUpdateShow(employee));

      //await instance.put(`/employees/${employee.id}`, putObject);
      //  dispatch(loadUsersSuccess());
      //  dispatch(fetchData());
    } catch(error){
      console.log(error);
        dispatch(loadUsersFailure());
    }  
    }
  };
  export function submitUpdate(employee){
    return async dispatch =>{
      try {



      await instance.put(`/employees/${employee.id}`, employee);
      dispatch(changeUpdateHide());

      dispatch(loadUsersSuccess());
      dispatch(fetchData());
    } catch(error){
      console.log(error);
        dispatch(loadUsersFailure());
    }  
    }
  }

  export function showFormEmployee(){
    return async dispatch =>{
      dispatch(loadUsers());

      try{
        dispatch(changeAddShow());
        dispatch(fetchData());
      }catch (error) {
        console.log(error);
      dispatch(loadUsersFailure());
    }
    };
  }
  export function closeForm(){
    return async dispatch =>{
      dispatch(loadUsers());

      try{
        dispatch(changeAddHide());
        dispatch(fetchData());
      }catch (error) {
      dispatch(loadUsersFailure());
    }
    };
  }
  export function updateShowForm(){
    return async dispatch =>{
      dispatch(loadUsers());

      try{
        dispatch(changeUpdateShow());
        dispatch(fetchData());
      }catch (error) {
      dispatch(loadUsersFailure());
    }
    };
  }
  export function updateHideForm(){
    return async dispatch =>{
      try{
        dispatch(changeUpdateHide());
      }catch (error) {
      dispatch(loadUsersFailure());
    }
    };
  }

