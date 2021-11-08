// This file will be runned whenever mongodb image is started
db = db.getSiblingDB("user_db");
db.user_tb.drop();

db.user_tb.insertMany([
    {
        "id":1,
        "username":"nic",
        "password":"password"
    },
    {
        "id":2,
        "username":"zhijian",
        "password":"password2"
    }
]);