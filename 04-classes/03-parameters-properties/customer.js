var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Milkha", "Singh");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
