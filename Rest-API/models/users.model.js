const { v4:uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Shahidul islam",
        email: "shahidul@gmail.com"
    },
    {
        id:uuidv4(),
        username: "zaman Bhai",
        email: "zaman@gmail.com"
    },
];

module.exports = users;