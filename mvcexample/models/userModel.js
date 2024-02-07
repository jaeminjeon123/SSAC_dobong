// This is a mockup. In real-world applications, this part should interact with a database.
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];

exports.findUserByUsernameAndPassword = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
};
