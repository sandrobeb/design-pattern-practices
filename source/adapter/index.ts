import { IJadi, ISoldier, IAdapter } from "./interfaces";

class Soldier implements ISoldier {
    level: any;
    constructor(level: number) {
        this.level = level;
    }

    attack() {
        return this.level * 1;
    }
}

class Jedi implements IJadi {
    level: any;
    constructor(level: number) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements IAdapter {
    jedi: any;
    constructor(jedi: IJadi) {
        this.jedi = jedi;
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};