/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styles from './puzzle.module.css'
import style from './style.css'
import store from '../../store/store'

export default () => {
    let data = store.getState() 
    
    const [stateFigures, setStateFigures] = React.useState(data)

    function dragStart(event, id) {
        let action = {
            type: 'DRAG_START',
            payload: {
                dragFigure: event.target,
                dragFigureID: event.dataTransfer,
                figureId: id
            }
        }
        store.dispatch(action);
    }

    function dragOver(e) {
        e.preventDefault()
    }

    function dropEvent(event, id) {
        let action = {
            type: 'DROP_EVENT',
            payload: {
                figureId: event.dataTransfer.getData('id'),
                dropFigureID: id,
                dropFigure: event.target
            }
        }
        store.dispatch(action, data);
        setStateFigures(stateFigures.filter(el => !el.matched))
    }
    
    return (
        <div class="container" className={styles.mainPageContainer}>
            <div className={styles.mainPageContainer__deskBlock}>
                {data && data.map((item) => (
                    <React.Fragment key={item.id}>
                        <img onDrop={(event) => dropEvent(event, item.id)} 
                        onDragOver={(event) => dragOver(event)}
                        className={styles.mainPageContainer__deskBlock__figures} src={item.src} alt="#"/>                        
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.mainPageContainer__figuresBlock}>
                {stateFigures.filter(el => !el.matched).sort(() => Math.random() - 0.5).map((item) => (
                    <React.Fragment key={item.id}>
                        <img onDragStart={(event) => dragStart(event, item.id)}
                         className={styles.mainPageContainer__figuresBlock__figures} 
                         src={item.src} alt="#" draggable="true"/>                        
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

