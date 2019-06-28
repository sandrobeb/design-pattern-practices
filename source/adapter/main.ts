import {
    Soldier,
    Jedi,
    JediAdapter
} from "./index"

let soldier = new Soldier(40);
let jedi = new Jedi(30);
let Jediii = new JediAdapter(jedi);

console.log(soldier.attack());
console.log(jedi.attackWithSaber());
console.log(Jediii.attack());