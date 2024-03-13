const accounts = [
    {
        username: "av", 
        password: "Aarian17"
    }, {
        username: "id",
        password: "IlyasD"
    }, {
        username: "mb",
        password: "ManavB"
    }, {
        username: "ha",
        password: "HasanA"
    }
]
function getLogin() {
    var username = document.getElementById('user').value
    var password = document.getElementById('password').value

    for (var i = 0 ; i < accounts.length;i++) {
        if (username == accounts[i].username && password == accounts[i].password) {
            console.log(username + "has logged in successfully")
            window.location.href = 'html.html';
            loggedIn = true
            return loggedIn
        }
        else { 
            var printText = document.getElementById('status');
            printText.innerHTML = "DETAILS ARE INCORRECT    TRY AGAIN"
            loggedIn = false
            return loggedIn
        }
    }
    console.log('incorrect details')

}