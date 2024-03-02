const bcrypt = require('bcrypt');

const password = process.argv[2];
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, has) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(hash);
});