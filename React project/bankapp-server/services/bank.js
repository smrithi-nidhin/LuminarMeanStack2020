const { get } = require("../routes/users");

let data={
    test1:{username:"test1",password:"test1",acno:1001,balance:60000,history:[]},
    test2:{username:" test2",password:"test2",acno:1002,balance:40000,history:[]},
    test3:{username:"test3",password:"test3",acno:1003,balance:30000,history:[]},
    test4:{username:"test4",password:"test4",acno:1004,balance:90000,history:[]},
};
let currentUser;
function getUsers(){
    return data;
}

function addUser(username,password,acno){
    data[username]={username,password,acno,history:[],balance:0};

}
function setCurrentUser(username){
    currentUser=username;

}
function getCurrentUser(){
    return currentUser;
}
module.exports={
    getUsers:getUsers,
    addUser:addUser,
    setCurrentUser:setCurrentUser,
    getCurrentUser:getCurrentUser
    
}