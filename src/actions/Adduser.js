
export default addUser = (user)=>{
    return {
        type:'ADD_USER_SYNC',
        user:user
    }
}