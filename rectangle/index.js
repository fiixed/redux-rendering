const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 


let button = document.getElementById('height');
button.addEventListener('click', function() {
    console.log('adding 10 pixels to the height');
    dispatch({type: 'height'})
})


let widthButton = document.getElementById('width');
widthButton.addEventListener('click', function() {
    console.log('adding 10 pixels to the width');
    dispatch({type: 'width'})
})


let redButton = document.getElementById('red');
redButton.addEventListener('click', function() {
    console.log('changing the color to red');
    dispatch({type: 'color', payload: {color: 'red'}})
})

let blueButton = document.getElementById('blue');
blueButton.addEventListener('click', function() {
    console.log('changing the color to blue');
    dispatch({type: 'color', payload: {color: 'blue'}})
})

let purpleButton = document.getElementById('purple');
purpleButton.addEventListener('click', function() {
    console.log('changing the color to purple');
    dispatch({type: 'color', payload: {color: 'purple'}})
})