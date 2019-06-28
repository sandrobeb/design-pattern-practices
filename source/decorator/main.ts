import { Penne, SauceDecorator, CheeseDecorator } from "./index"

let penne = new Penne();
let saucedec = new SauceDecorator(penne);
let cheesedec = new CheeseDecorator(saucedec);

console.log(penne.getPrice());
console.log(saucedec.getPrice());
console.log(cheesedec.getPrice());