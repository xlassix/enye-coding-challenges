//main reducer
const rootReducer=(state, action) =>{
    //if (action.type === "ADD_USER"){
    l//et newuser=action.user
    //generate random key for user
    //return({users:[...state.users,newuser]})
    }
    switch(action.type){
        case 'ADD_USER_SYNC':
            return({users:[...state.users,action.user]})
            break;
        default:
            return state
    }
    return state;
}

export default rootReducer;


