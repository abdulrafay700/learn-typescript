//TypeScript supports getters/setters as a way of intercepting accesses to a member of an object, thus allowing Encapsulation
//This gives you a way of having finer-grained control over how a member is accessed on each object.
//Encapsulation is the packing of data and functions into a single component. 
//It allows selective hiding of properties and methods in an object by building an impenetrable wall to protect the code from accidental corruption.
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//We check to make sure the user has a secret passcode available before we allow them to modify the employee. 
//# sourceMappingURL=app.js.map