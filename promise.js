let addition = function (a, b) {
    return new Promise(function (resolve, reject) {
        var add = function (a, b, cb) {
            cb(a + b);
        }
        add(a, b, function (data) {
            if (data >= 3) {
                resolve(data);
            }
            else {
                reject('Error');
            }
        })
    })
};

let subtraction = function (a, b) {
    return new Promise(function (resolve, reject) {
        var sub = function (a, b, cb) {
            cb(a - b);
        }
        sub(a, b, function (data) {
            if (data >= 3) {
                resolve(data);
            }
            else {
                reject('Error');
            }
        })
    })
};

let multiplication = function (a, b) {
    return new Promise(function (resolve, reject) {
        var sub = function (a, b, cb) {
            cb(a * b);
        }
        sub(a, b, function (data) {
            if (data >= 3) {
                resolve(data);
            }
            else {
                reject('Error');
            }
        })
    })
};

addition(3, 2).then(function (one) {
    return subtraction(one, 1);
}).then(function (two) {
    return multiplication(two, 2);
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});