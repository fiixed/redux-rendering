const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    
    switch(action.type) {
    // ACTION 1 - Increment height by 10
        case 'height':
            return {
                ...state,
                height: state.height + 10
            }
    // ACTION 2 - Increment width by 10
        case 'width':
            return {
                ...state,
                width: state.width + 10
            }
    // ACTION 3 - Change the color
        case 'color': 
            return {
                ...state,
                color: action.payload.color
            }
        default:
        return state;
    }
}