app.service('UserService', function() {

    var users = [{
        'fname': 'Robert',
        'lname': 'Downey Jr.'
    }, {
        'fname': 'Chris',
        'lname': 'Evans'
    }, {
        'fname': 'Chris',
        'lname': 'Hemsworth'
    }, {
        'fname': 'Jeremy',
        'lname': 'Renner'
    }, {
        'fname': 'Mark',
        'lname': 'Ruffalo'
    }, {
        'fname': 'Scarlett',
        'lname': 'Johansson'
    }];

    this.login = function(user) {
        if ("ADMIN" == user.name.toUpperCase() && "admin" == user.password) {
            isLoggedIn = true;
            return "Success";
        }
    }

    this.add = function(user) {
        users.push(user)
    }

    this.save = function(user, index) {
        this.delete(index);
        this.add(user);
    }

    this.delete = function(index) {
        users.splice(index, 1);
    }

    this.list = function() {
        return users;
    }

})
