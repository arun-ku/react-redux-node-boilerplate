/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import EventEmitter from "events";
import constants from "./constants"

Function.prototype.toEmitter = function () {
    var origFunc = this;
    return function () {
        var args = arguments;
        var emitter = new EventEmitter();
        process.nextTick(function () {
            origFunc.apply(emitter, args);
        });
        return emitter;
    }
};

/**
 * create's custom function on request and response object
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {object} next - next middle ware object
 */
exports.apiResponseGenerator = function (req, res, next) {

    /**
     * sends response based on parameters
     * @param {object} dataObj - data to be sent in response
     * @param {object} headers - header object
     * @param {number} status - status of response
     */
    function sendResponse(dataObj, headers, status) {
        status = 200;
        console.log("###########", dataObj)
        headers = headers || {'Content-Type' : 'application/json'};
        res.writeHead(status, headers);
        res.end(JSON.stringify(dataObj));
    }

    /**
     * sends response based on parameters(Error Validations)
     * @param {object} data - data to be sent in response
     * @param {object} headers - header object
     */
    res.sendValidationError = function (data, headers) {
        log.error('Validation Error', data);
        sendResponse({
            code: constants.HTTP_CODES.VALIDATION_ERROR,
            error: {
                detail: Constants.MESSAGES.validations.VALIDATION_ERROR,
                message: typeof data === 'string' ?  data : constants.MESSAGES.validations.INVALID_PAYLOAD
            }
        }, headers, constants.HTTP_CODES.VALIDATION_ERROR);
    };

    /**
     * sends response based on parameters(Error in processing)
     * @param {number} status - status of response
     * @param {string} message - message to be sent in response
     * @param {object} data - data to be sent in response
     * @param {string} code - custom code to be sent in response
     * @param {object} headers - header object
     */
    res.sendError = function (status, detail, message, headers) {
        var response = {
            code: status,
            error: {
            }
        };
        if(typeof message == 'string') {
            response.error.message = message || constants.MESSAGES.api.SERVER_ERROR;
            response.error.detail = detail || constants.MESSAGES.api.SOMETHING_WENT_WRONG;
        }else if(message && message.hasOwnProperty('message')){
            response.error.detail = message.message;
            response.error.message = constants.MESSAGES.api.SOMETHING_WENT_WRONG;
        }else {
            response.error.detail = constants.MESSAGES.api.SERVER_ERROR;
            response.error.message = constants.MESSAGES.api.SOMETHING_WENT_WRONG;
        }
        sendResponse(response, headers, status);
    };

    /**
     * sends response based on parameters(Success in processinh)
     * @param {number} status - status of response
     * @param {string} payload - data to be sent in response
     * @param {object} data - data to be sent in response
     * @param {string} code - custom code to be sent in response
     * @param {object} headers - header object
     */
    res.sendSuccess = function (status, payload, data, code, headers) {
      console.log('sdfsfdsfsdfsdfsdfsfsdffdf', payload)
        var response = {
            code: status,
            data : payload
        };

        //log.info('Response %j\nHeader: %j\nStatus: %s', response, headers, status);
        sendResponse(response, headers, status);
    };

    next();
};
