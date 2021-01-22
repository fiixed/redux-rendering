const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

console.log('Loading original state');
dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

let button = document.getElementById('addCircle');
button.addEventListener('click', function() {
    console.log('adding random circle');
    dispatch({type: 'random'})
})
