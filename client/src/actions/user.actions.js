import { API_CALL_STARTED, API_CALL_ENDED, USER_SIGNUP, SET_USER_DATA } from '../constants/constants';
import axios from 'axios';
import * as UtilService from '../services/UtilService'

export function showLoader(){
  return {
    type: API_CALL_STARTED
  };
}

export function hideLoader(){
  return {
    type: API_CALL_ENDED
  };
}

export function logoutUser(){
  return (dispatch)=> {
    dispatch(showLoader());
    UtilService.setCookie('token', '');
    dispatch(hideLoader());
  }
}

export function createUser(userData){
  var signupData = Object.assign({},userData);
  delete signupData.confirmPassword;
  return (dispatch) => {
    dispatch(showLoader());
    axios.post('/api/users', signupData).then((response) => {
      // console.log(response.data.data.token);
      UtilService.setCookie('token', response.data.data.token);
      // localStorage.setItem("token", response.data.data.token);
      // console.log(localStorage.getItem("token"))
      dispatch(getUserData());
      dispatch(hideLoader());
    }).catch((err) => {
      dispatch(hideLoader());
      console.log('Something went wrong');
    });
  }
}

export function login(user){
  return (dispatch) => {
    axios({
        method: 'post',
        url: '/auth/local',
        data : user
    }).then((response) => {
      UtilService.setCookie("token", response.data.token);
      dispatch(getUserData());
    })
  }
}
export function getUserData(){
  return (dispatch) => {
    axios({
        method: 'get',
        url: '/api/users/me',
        headers: {
          Authorization: 'Bearer '+UtilService.getCookie("token")
        }
    }).then((response) => {
      dispatch(updateUserData(response.data));
    })
  }
}

export function updateUserData(data){
  return {
    type : SET_USER_DATA,
    payload : data
  }
}
