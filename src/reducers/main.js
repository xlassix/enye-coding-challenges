//main reducer
const rootReducer=(state, action) =>{
    switch(action.type){
        case 'full_users':
            //this is excuted once the redux saga yields the actions
            console.log(action)
            return({users:[...action.user]})
            break;
        default:
            return state;
    }
    return state;
}

export default rootReducer;


