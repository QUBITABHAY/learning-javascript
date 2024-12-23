const User = {
    _email: "hber@kenv.com",
    _password: "skdhbw82",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const h = Object.create(User)
console.log(h.email);
