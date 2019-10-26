//main reduxer
const rootReducer=(state, action) =>{
    if (action.type === "ADD_USER"){
    let newuser=action.user
    //generate random key for user
    newuser.key=Math.random()*Math.random()
    return({users:[...state.users,newuser]})
    }
    return state;
}

export default rootReducer;


