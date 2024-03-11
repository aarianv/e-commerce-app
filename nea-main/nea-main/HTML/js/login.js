import {accounts} from "../datasets/logins";

function loginValidation(accounts, username) {
    let usernameValidation;
    let passwordValidation;

    accounts.forEach((account) => {
        if (username === account.username) {
            usernameValidation = true;
        }
    })

    accounts.forEach((account) => {
        if (password === account.password) {
            passwordValidation = true;
        }
    })
}