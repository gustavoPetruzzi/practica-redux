import * as actionTypes from '../actions';
const initialState={
    counter: 0,
}

const counterReducer = (state = initialState, action) =>{

    switch (action.type) {
        case actionTypes.INCREMENT:
            console.log(state.results);
            return{
                ...state,
                counter: state.counter +1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter -1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACT:
            return{
                ...state,
                counter: state.counter + action.value
            }
        default:
            return state;
    }
    return state;
}

export default counterReducer;