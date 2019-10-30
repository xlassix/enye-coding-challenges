//main reducer
const rootReducer=(state, action) =>{
    //if (action.type === "ADD_USER"){
    //et newuser=action.user
    //generate random key for user
    //return({users:[...state.users,newuser]})
    switch(action.type){
        case 'full_users':
            console.log(action)
            return({users:[...action.user]})
            break;
        default:
            return state;
    }
    return state;
}

export default rootReducer;


