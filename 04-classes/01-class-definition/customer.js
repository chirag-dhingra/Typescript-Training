var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Milkha", "Singh");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
