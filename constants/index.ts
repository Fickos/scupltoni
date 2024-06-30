
const constants = Object.freeze({
    API_ERROR: {
        ROUTE_NOT_FOUND: "route_not_found",
        ENTITY_NOT_FOUND: "entity_not_found",
        NOT_YET_IMPLEMENTED: "not_yet_implemented",
    },
    API_SUCCESS: {
        LIST_SUCCESSFUL: "list_successful",
        LOAD_SUCCESSFUL: "load_successful",
        CREATE_SUCCESSFUL: "create_successful",
        UPDATE_SUCCESSFUL: "update_successful",
        DELETE_SUCCESSFUL: "delete_successful"
    },
    USER_CONSTANTS: {
        LOGIN_SUCCESS: "login_success",
        BAD_CREDENTIALS: "bad_credentials",
        BAD_USERNAME: "bad_username",
    },
    PROJECT_CONSTANTS: {
        PROJECT_SAVED: "project_saved",
        PROJECT_LOAD: "project_loaded",
        PROJECT_LIST: "project_list",
    }
});

export default constants;
