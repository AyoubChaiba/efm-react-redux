
import { ADD_LIVERS } from './Liverstype';

const Livers = [];


export const LiversReducer = (state = Livers , actions)=> {
    switch (actions.type) {
        case ADD_LIVERS : return [...state, actions.payload];
    }
}
