import pizza1 from './../assets/images/pizza1.jpg';
import pizza2 from './../assets/images/pizza2.jpg';
import pizza3 from './../assets/images/pizza3.jpg';
import pizza4 from './../assets/images/pizza4.jpg';

// const BOOK = 'pizza-react/pizza-reducer/BOOK';
const FILTER_BY_TYPE = 'pizza-react/pizza-reducer/FILTER_BY_TYPE';
const SET_LENGTH = 'pizza-react/pizza-reducer/SET_LENGTH';
const SET_DOUGH = 'pizza-react/pizza-reducer/SET_DOUGH';


let initialState = {
    pizza: [
        {
            id: 1,
            type: 'meat',
            img: pizza1,
            cost: 349,
            length: [true, false, true],
            name: 'Чизбургер-пицца',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 2,
            type: 'meat',
            img: pizza4,
            cost: 385,
            length: [true, false, true],
            name: 'Сырный цыпленок',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 3,
            type: 'vegetarian',
            img: pizza2,
            cost: 450,
            length: [false, true, false],
            name: 'Сырная',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 4,
            type: 'spicy',
            img: pizza3,
            cost: 349,
            length: [true, false, true],
            name: 'Креветки по азтатски',
            booked: 0
        },
        {
            id: 5,
            type: 'meat',
            img: pizza1,
            cost: 349,
            length: [true, false, false],
            name: 'Мясная',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 6,
            type: 'meat',
            img: pizza4,
            cost: 385,
            length: [true, true, true],
            name: 'Пепперони',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 7,
            type: 'vegetarian',
            img: pizza2,
            cost: 450,
            length: [false, true, false],
            name: '4 Сыра',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 8,
            type: 'spicy',
            img: pizza3,
            cost: 349,
            length: [true, true, false],
            name: 'Индийские специи',
            booked: 0,
            lengths: null,
            dough: null

        },
    ],
    filteredPizza: [
        {
            id: 1,
            type: 'meat',
            img: pizza1,
            cost: 349,
            length: [true, false, true],
            name: 'Чизбургер-пицца',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 2,
            type: 'meat',
            img: pizza4,
            cost: 385,
            length: [true, false, true],
            name: 'Сырный цыпленок',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 3,
            type: 'vegetarian',
            img: pizza2,
            cost: 450,
            length: [false, true, false],
            name: 'Сырная',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 4,
            type: 'spicy',
            img: pizza3,
            cost: 349,
            length: [true, false, true],
            name: 'Креветки по азтатски',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 5,
            type: 'meat',
            img: pizza1,
            cost: 349,
            length: [true, false, false],
            name: 'Мясная',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 6,
            type: 'meat',
            img: pizza4,
            cost: 385,
            length: [true, true, true],
            name: 'Пепперони',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 7,
            type: 'vegetarian',
            img: pizza2,
            cost: 450,
            length: [false, true, false],
            name: '4 Сыра',
            booked: 0,
            lengths: null,
            dough: null

        },
        {
            id: 8,
            type: 'spicy',
            img: pizza3,
            cost: 349,
            length: [true, true, false],
            name: 'Индийские специи',
            booked: 0,
            lengths: null,
            dough: null

        },
    ]
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_TYPE:
            return action.items === 'all' ? {
                ...state,
                pizza: state.filteredPizza
            } :
                {
                    ...state,
                    pizza: state.filteredPizza.filter(pizza => pizza.type === action.items)
                }
        // case SET_LENGTH:
        //     return {
        //         ...state,
        //         pizza: [...state.filteredPizza, {
        //             length: action.length
        //         }]
        //     }
        // case SET_DOUGH:
        //     return {
        //         ...state,
        //         pizza: [...state.pizza, {
        //             dough: action.dough
        //         }]
        //     }
        default:
            return state;
    }
}

export const filterByName = (items) => ({ type: FILTER_BY_TYPE, items });
export const setPizzasLength = (length) => ({ type: SET_LENGTH, length });
export const setPizzasDough = (dough) => ({ type: SET_DOUGH, dough });




export default pizzasReducer;