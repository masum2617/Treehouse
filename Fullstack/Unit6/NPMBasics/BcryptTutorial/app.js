const bcrypt = require('bcrypt');
const colors = require('colors');
const saltRounds = 10;
var myPlaintextPassword = "password";
var hashedPassword;
var someOtherPlaintextPassword = 'wrongpass'

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    console.log(hash.green)
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        console.log(res);
    });
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
        console.log(res)
    });
});

