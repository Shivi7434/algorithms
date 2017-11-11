var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//everything mentioned above should be brought inside class otherwise it gets mad
var Something = /** @class */ (function () {
    function Something(name, age) {
        this.name = name;
        this.age = age;
    }
    Something.prototype.doSomething = function () {
        return this.name;
    };
    Something.prototype.saySomething = function () {
        return "something";
    };
    return Something;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.breathe = function () {
        console.log('breathing');
    };
    Animal.prototype.eat = function () {
        console.log("munch munch");
    };
    return Animal;
}());
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horse.prototype.gallop = function () {
        console.log("I'm runnin Jennay!");
    };
    return Horse;
}(Animal));
