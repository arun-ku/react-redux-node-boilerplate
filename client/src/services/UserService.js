import axios from 'axios';
import * as UtilService from './UtilService';

export function isLoggedIn(){
  let token = UtilService.getCookie('token')
  if(token){
    return true;
  }
  return false;
}
