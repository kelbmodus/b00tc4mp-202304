var users = []

document.querySelector('.login').querySelector('a').onclick = function (event) {
    event.preventDefault()

document.querySelector('.login').classList.add('off')
document.querySelector('.welcomehome').classList.remove('off')
}

document.querySelector('.register').querySelector('a').onclick = function (event) {
    event.preventDefault()

document.querySelector('.register').classList.add('off')
document.querySelector('.login').classList.remove('off')
}
// database below 

document.querySelector('.login').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var found 

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user 

            break 
        }

    }
    if (found) {
        document.querySelector('.login').classList.add('off')
        document.querySelector('.welcomehome').classList.remove('off')
    } else alert ('Wrong Information')
}

document.querySelector('.login').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.login').classList.add('off')
    document.querySelector('.register').classList.remove('off')
}

document.querySelector('.register').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.add('off')
}
document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var name = event.target.name.value
    var email = event.target.email.value
    var password = event.target.password.value

    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)

    alert('User registered')

    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}



