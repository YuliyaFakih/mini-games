export function Reducer(initialState, action) {
    let state
    
    switch(action.type) {
        case 'DROP_EVENT': 
            if(action.payload.figureId === action.payload.dropFigureID) {
                action.payload.dropFigure.style.mixBlendMode = "unset"
                initialState.find(item => item.id === action.payload.dropFigureID).matched = true
                state = initialState
                return state;
            } else {
                return initialState
            }
        case 'DRAG_START':
            action.payload.dragFigure.classList.add('dragStart')
            action.payload.dragFigureID.setData('id', action.payload.figureId)
            return initialState;
        default: return initialState;
    }
}