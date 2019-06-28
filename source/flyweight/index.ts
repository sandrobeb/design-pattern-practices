import { Name, IColor } from "./interfaces";

class Color implements Name {
    constructor(public name: string) {
    }
}

class colorFactory {
    colors= {} as IColor;
    constructor(public name: Name) {
        this.colors = {};
    }
    create(name: string) {
        let color = this.colors[name];
        if (color) return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    colorFactory
};