export function Reducer(data, action) {
    let figures 
    switch(action.type) {
        case 'DROP_EVENT': 
            if(action.payload.figureId === action.payload.dropFigureID) {
                action.payload.dropFigure.style.mixBlendMode = "unset"
                data.find(item => item.id === action.payload.dropFigureID).matched = true
                figures = [...data]
                return figures;
            } else {
                return data
            }
        case 'DRAG_START':
            action.payload.dragFigure.classList.add('dragStart')
            action.payload.dragFigureID.setData('id', action.payload.figureId)
            return data;
        default: return data;
    }
}