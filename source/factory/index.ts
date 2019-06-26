import { IBMW , bmwtype } from './interfaces';
export class BmwFactory {

    static create(type: bmwtype) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300);
        }
        if (type === 'X6') {
            return new Bmw(type, 111000, 320);
        }
    }
}

export class Bmw implements IBMW {
    constructor(public model: bmwtype,public price: number,public maxSpeed: number) {}
}

export default BmwFactory;