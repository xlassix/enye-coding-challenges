const full_users=(data)=>{
    var users=[]
    for(var key in data) {
        users=[...users,data[key]];
    }
    return({type:"full_users",user:users})
}
export default full_users