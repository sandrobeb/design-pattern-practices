import { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk } from "./index"

let acr = new AcrylicInk();
let alc = new AlcoholInk();
let epson = new EpsonPrinter(acr);
let hp = new HPprinter(alc);
console.log(epson.print());
console.log(hp.print());