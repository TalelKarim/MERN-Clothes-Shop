import { combineReducers } from "redux";

//Man
import clothes from './Man/Clothes'
import fshoes from "./Man/fshoes";
import sshoes from "./Man/sshoes";
import man_trousers from "./Man/trousers";
//Kids
import kids_trousers from './Kids/trousers';
import kids_shoes from './Kids/shoes';
import kids_shirts from './Kids/shirts';

//Woman
import robes from "./Woman/robes";
import woman_shirts from './Woman/shirts';
import woman_shoes from './Woman/shoes';
import woman_trousers from './Woman/trousers';

export const reducers =  combineReducers({
    clothes,
    fshoes,
    sshoes,
    man_trousers,
    kids_shirts,
    kids_trousers,
    kids_shoes,
    robes,
    woman_shirts,
    woman_shoes,
    woman_trousers
})