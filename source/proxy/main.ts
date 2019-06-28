import { Car, CarProxy, Driver } from "./index"

let car = new Car();
let driver = new Driver(19);
let carproxy = new CarProxy(driver);

console.log(carproxy.drive());