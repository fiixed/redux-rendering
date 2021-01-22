const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    console.log('reducer running');

    // ACTION: Add a random circle

    switch(type) {
        case 'random':
            console.log('random circle requested');
            return [
                ...state,
                {
                    radius: 90,
                    color: '#333333'
                }
            ]
        default: 
        return state;
    }

}