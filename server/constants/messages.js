/**
 * Created by mayank on 07/09/16.
 */

module.exports = {
  api: {
    ENTITY_NOT_FOUND: 'Entity not found',
    NO_URI_ID_FOUND: 'Redirect uri not found.',
    NO_RESOURCE_FOUND : 'Not Found',
    INVALID_RESET_TOKEN: 'Passed reset token in not valid',
    TOKEN_USED: 'This token has already been used.',
    USER_NOT_REGISTERED: 'Sorry !! No user exists with the supplied email id',
    CANNOT_UPDATE_PRIMARY_EMAIL: 'Primary email can not be updated',
    FEED_DELETED_SUCCESSFULLY: 'Your requested feed has been deleted.',
    CONNECTION_DELETED_SUCCESSFULLY: 'Your requested connection has been removed.',
    NO_SPACE_AVAILABLE: 'Sorry !! Your storage limit has exceeded.',
    NO_SUCH_FOLDER_FOUND: 'Sorry !! No folder found with this name.',
    CONNECTION_NOT_FOUND: 'Your requested connection not found.',
    NO_FEED_FOUND: 'Sorry !! Feed does not exist.',
    INVALID_NOTE_STRING: 'Invalid note name',
    INVALID_NOTEBOOK_STRING: 'Invalid note book name',
    INVALID_FOLDER_STRING: 'Invalid folder name',
    NO_FILE_FOUND: 'Sorry !! No such file exists.',
    EMPTY_ARGUMENT: 'Sorry || Passed argument is empty.',
    UNAUTHORIZED: 'Sorry !! You are not authorized to perform this action.',
    FEED_NOT_EXIST: 'Sorry !! This feed does not exist anymore.',
    INVALID_SEARCH_STRING: 'Invalid search string',
    INVALID_GROUP: 'You can not start the call with this Group',
    NO_OPERATION_PERFORMED: 'You can not %s this call',
    SOMETHING_WENT_WRONG: 'Sorry !! Something went wrong. Please try after some time.',
    SERVER_ERROR : 'Error occurred on server. Please, report it back to team.'
  },
  validations: {
    VALIDATION_ERROR: 'validation error',
    INVALID_EMAIL: 'Email is not valid',
    INVALID_PHONE_NUMBER: 'Phone number is not valid',
    EMPTY_EMAIL_ID: 'Email id should not be empty',
    EMPTY_ADDRESS: 'Address should not be empty',
    EMPTY_PHONE_NUMBER: 'Phone number should not be empty',
    INVALID_TOKEN: 'Token is not valid',
    INVALID_PASSWORD: 'Password is not valid',
    INVALID_PASSWORD_PATTERN: 'Password must contain atleast one character, one digit, one special character and should be between 6 to 20 characters.',
    EMPTY_PASSWORD: 'Password should not be empty',
    EMPTY_ISVALID : 'isValid key cannot be empty',
    SPACE_IN_PASSWORD: 'Password should not have space',
    INVALID_PASSWORD_LENGTH: 'Password should be of 6 to 20 characters.',
    INVALID_PAYLOAD: 'Unable to process the request.',
    EMPTY_BASE64_DATA: 'Data for image can not be empty',
    EMPTY_CONNECTION_ID: 'Connection id should not be empty',
    INVALID_MONGO_ID: 'ids should be valid mongo id',
    INVALID_PARAMS: 'Invalid params passed.',
    NOTE_ALREADY_EXIST: 'Note with this name already exist.',
    EMPTY_QUERY: 'Search query should not be empty',
    EMPTY_PAYLOAD: 'Entity should not be empty',
    ARRAY_TYPE: 'Entity should be array type',
    IS_NOT_FEED_OWNER: 'You are not authorised to delete this post.',
    INVALID_MIME_TYPE: 'Sorry !! Supplied format is not supported',
    NO_EXTENSION_FOUND: 'Sorry !! No extension found.',
    EMPTY_COMMENT_TEXT: 'Sorry !! Comment text can not be empty',
    EMPTY_NAME: 'Name should not be empty.',
    EMPTY_CONTACT_INFO: 'Contact info should not be empty.',
    EMPTY_FIRST_NAME: 'First name should not be empty.',
    EMPTY_LAST_NAME: 'Last name should not be empty.',
    INVALID_NAME:'Name must contain characters only',
    INVALID_VALUE : 'Invalid value.',
    INVALID_OBJECT : 'The object does not match the format.',
    BOOLEAN_TYPE : 'Entity should be of boolean type',
    INVALID_ARGUMENTS: 'Sorry !! The arguments you passed are not valid',
    
  },
  misc: {
    UNABLE_TO_PROCESS: 'Unable to process entity',
    INSUFFICIENT_ARGS: 'Insufficient arguments'
  },
  accountSettings : {
    ACCOUNT_ACTIVATE : "Account activated successfully.",
    ACCOUNT_DEACTIVATE : "Account deactivated successfully."
  }
};
