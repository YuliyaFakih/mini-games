import { createStore } from 'redux';
import { Reducer } from './reducer';
import img_p1 from  '../images/p1.png'
import img_p2 from  '../images/p2.png'
import img_p3 from  '../images/p3.png'
import img_p4 from  '../images/p4.png'
import img_p5 from  '../images/p5.png'
import img_p6 from  '../images/p6.png'
import img_p7 from  '../images/p7.png'
import img_p8 from  '../images/p8.png'
import img_p9 from  '../images/p9.png'
import uuid from 'react-uuid'

let data = [
    {id: uuid(), src: img_p1, alt: 'oval', matched: false}, 
    {id: uuid(), src: img_p2, alt: 'rhombus', matched: false},
    {id: uuid(), src: img_p3, alt: 'circle', matched: false},
    {id: uuid(), src: img_p4, alt: 'square', matched: false},
    {id: uuid(), src: img_p5, alt: 'pentagon', matched: false},
    {id: uuid(), src: img_p6, alt: 'trapezium', matched: false},
    {id: uuid(), src: img_p7, alt: 'star', matched: false},
    {id: uuid(), src: img_p8, alt: 'rectangle', matched: false},
    {id: uuid(), src: img_p9, alt: 'triangle', matched: false}
]

const store = createStore(Reducer, data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;
