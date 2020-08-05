const SET_BOOK = 'react-pizza/cart-reducer/SET_BOOK'
const RESET_CART = 'react-pizza/cart-reducer/RESET_CART'
const DELETE_BOOK = 'react-pizza/cart-reducer/DELETE_BOOK'
const COMPUTE_COST = 'react-pizza/cart-reducer/COMPUTE_COST'




let initialState = {
    booked: [],
    bookedSum: 0,
    fullCost: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                booked: [...state.booked, {
                    img: action.img,
                    cost: action.cost,
                    name: action.name,
                    id: action.id
                }],
            }
        case DELETE_BOOK:
            return {
                ...state,
                booked: state.booked.filter(book => book.id !== action.id)
            }
        case RESET_CART:
            return {
                ...state,
                booked: [],
            }
        case COMPUTE_COST:
            return {
                ...state,
                fullCost: state.cost
            }
        default:
            return state;
    }
}

export const addBook = (img, cost, name, id) => ({ type: SET_BOOK, img, cost, name, id });
export const resetCart = () => ({ type: RESET_CART });
export const deleteBook = (id) => ({ type: DELETE_BOOK, id });
export const computeCost = (cost) => ({ type: COMPUTE_COST, cost });





export default cartReducer;