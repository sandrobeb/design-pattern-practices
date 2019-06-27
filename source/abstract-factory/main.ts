import droidProducer from "./index";
import { Droid } from "./interfaces";

const droid: Droid = droidProducer('battle')();
console.log(droid);