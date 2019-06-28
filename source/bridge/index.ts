class Printer {
    constructor(public ink: any) {
        this.ink = ink;
    }
}

class EpsonPrinter extends Printer {
    constructor(ink: any) {
        super(ink);
    }

    print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink: any) {
        super(ink);
    }

    print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink {
    constructor(public type: any) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk
};