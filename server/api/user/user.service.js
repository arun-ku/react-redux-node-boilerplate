/**
 * Created by mayank on 7/9/16.
 */

import User from "./user.model"
import Constants from "../../constants"
import jwt from 'jsonwebtoken';
import config from '../../config/environment'

exports.create = function(user) {
    var emmiter  = this;
    var newUser = new User(user);
    newUser.save((err,savedUser) => {
        if(err){
            return emmiter.emit(Constants.EVENTS.ERROR,{message:Constants.MESSAGES.SERVER_ERROR})
        }
        else{
            var token = jwt.sign({ _id: savedUser._id }, config.secrets.session, {
                expiresIn: 60 * 60 * 5
            });
            return emmiter.emit(Constants.EVENTS.DONE,{token})
        }
    })

}.toEmitter()
