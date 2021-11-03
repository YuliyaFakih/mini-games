import React from 'react'
import styles from './Сrossword.module.css'
import classes from '../puzzle/puzzle.module.css'
import img_1 from '../../images/a1.png'
import img_2 from '../../images/a2.png'
import img_3 from '../../images/a3.png'
import img_4 from '../../images/a4.png'
import img_5 from '../../images/a5.png'
import img_6 from '../../images/a6.png'
import img_7 from '../../images/a7.png'
import img_8 from '../../images/a8.png'
import img_9 from '../../images/a9.png'
import img_10 from '../../images/a10.png'
import uuid from 'react-uuid'

class Сrossword extends React.Component {
    constructor(props) {
        super(props);
        this.imgArray = [
            {id: uuid(), src: img_1, alt: 'spinningtop'},
            {id: uuid(), src: img_2, alt: 'rocket'},
            {id: uuid(), src: img_3, alt: 'robot'},
            {id: uuid(), src: img_4, alt: 'ball'},
            {id: uuid(), src: img_5, alt: 'bear'}
        ]
        this.imgArray2 = [
            {id: uuid(), src: img_6, alt: 'car'},
            {id: uuid(), src: img_7, alt: 'cubes'},
            {id: uuid(), src: img_8, alt: 'stackingtoy'},
            {id: uuid(), src: img_9, alt: 'doll'},
            {id: uuid(), src: img_10, alt: 'rockinghorse'}
        ]
        this.firstWord = this.firstWord.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    firstWord(event) {
        event.preventDefault()
        let word = event.target
        let firstWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value + word[5].value + word[6].value + word[7].value + word[8].value + word[9].value + word[10].value;
        if(firstWord === this.imgArray[0].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[5].value = ""
            word[6].value = ""
            word[7].value = ""
            word[8].value = ""
            word[9].value = ""
            word[10].value = ""
            word[1].focus()
        }
    }

    secondWord(event) {
        event.preventDefault()
        let word = event.target
        let secondWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value + word[5].value;
        if(secondWord === this.imgArray[1].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[5].value = ""
            word[1].focus()
        }
    }

    thirdWord(event) {
        event.preventDefault()
        let word = event.target
        let thirdWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value;
        if(thirdWord === this.imgArray[2].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[1].focus()
        }
    }

    fourthWord(event) {
        event.preventDefault()
        let word = event.target
        let fourthWord = word[0].value + word[1].value + word[2].value + word[3].value;
        if(fourthWord === this.imgArray[3].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[1].focus()
        }
    }

    fifthWord(event) {
        event.preventDefault()
        let word = event.target
        let fifthWord = word[0].value + word[1].value + word[2].value + word[3].value;
        if(fifthWord === this.imgArray[4].alt) {
            word.style.background = "#2cad31a8"
            word.parentNode.parentNode.lastChild.firstChild[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[1].focus()
        }
    }

    sixthWord(event) {
        event.preventDefault()
        let word = event.target
        let sixthWord = word[0].value + word[1].value + word[2].value;
        if(sixthWord === this.imgArray2[0].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[1].focus()
        }
    }
    seventhWord(event) {
        event.preventDefault()
        let word = event.target
        let seventhWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value;
        if(seventhWord === this.imgArray2[1].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[1].focus()
        }
    }

    eighthWord(event) {
        event.preventDefault()
        let word = event.target
        let eighthWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value + word[5].value + word[6].value + word[7].value + word[8].value + word[9].value + word[10].value;
        if(eighthWord === this.imgArray2[2].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[5].value = ""
            word[6].value = ""
            word[7].value = ""
            word[8].value = ""
            word[9].value = ""
            word[10].value = ""
            word[1].focus()
        }
    }

    ninthWord(event) {
        event.preventDefault()
        let word = event.target
        let ninthWord = word[0].value + word[1].value + word[2].value + word[3].value;
        if(ninthWord === this.imgArray2[3].alt) {
            word.style.background = "#2cad31a8"
            word.nextSibling[1].focus()
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[1].focus()
        }
    }

    tenthWord(event) {
        event.preventDefault()
        let word = event.target
        let tenthWord = word[0].value + word[1].value + word[2].value + word[3].value + word[4].value + word[5].value + word[6].value + word[7].value + word[8].value + word[9].value + word[10].value + word[11].value;
        if(tenthWord === this.imgArray2[4].alt) {
            word.style.background = "#2cad31a8"
        } else {
            word.style.background = "#e1303091"
            word[1].value = ""
            word[2].value = ""
            word[3].value = ""
            word[4].value = ""
            word[5].value = ""
            word[6].value = ""
            word[7].value = ""
            word[8].value = ""
            word[9].value = ""
            word[10].value = ""
            word[11].value = ""
            word[1].focus()
        }
    }

    changeHandler(event) {
        event.target.nextSibling.focus()
    }
    
    render() {
        return (
            <div className={styles.mainPageContainer}> 
                <div className={styles.mainPageContainer__images}>
                    {this.imgArray.map(item => (
                        <React.Fragment key={item.id}>
                        <img src={item.src} alt={item.alt}/>
                        </React.Fragment>
                        )
                    )}
                </div>
                <div className={styles.mainPageContainer__firstCrosswordPart}>
                        <form className={styles.mainPageContainer__firstCrosswordPart__word} onSubmit={(event) => this.firstWord(event)}>
                            <input className={styles.square} type="text" value="s" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" />
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__firstCrosswordPart__word} onSubmit={(event) => this.secondWord(event)}>
                            <input className={styles.square} type="text" value="r" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__firstCrosswordPart__word} onSubmit={(event) => this.thirdWord(event)}>
                            <input className={styles.square} type="text" value="r" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__firstCrosswordPart__word} onSubmit={(event) => this.fourthWord(event)}>
                            <input className={styles.square} type="text" value="b" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__firstCrosswordPart__word} onSubmit={(event) => this.fifthWord(event)}>
                            <input className={styles.square} type="text" value="b" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                    {/*{this.imgArray.map((item, index) => {
                        for(let i = 0; i < this.imgArray[index].alt.length; i++) {
                            return 
                                <div className={styles.square}> {item.alt} </div>
                            }
                    })}*/}
                </div>
                <div className={styles.mainPageContainer__images}>
                    {this.imgArray2.map(item => (
                        <React.Fragment key={item.id}>
                        <img src={item.src} alt={item.alt}/>
                        </React.Fragment>
                        )
                    )}
                </div>
                <div className={styles.mainPageContainer__secondCrosswordPart}>
                        <form className={styles.mainPageContainer__secondCrosswordPart__word} onSubmit={(event) => this.sixthWord(event)}>
                            <input className={styles.square} type="text" value="c" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__secondCrosswordPart__word} onSubmit={(event) => this.seventhWord(event)}>
                            <input className={styles.square} type="text" value="c" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__secondCrosswordPart__word} onSubmit={(event) => this.eighthWord(event)}>
                            <input className={styles.square} type="text" value="s" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__secondCrosswordPart__word} onSubmit={(event) => this.ninthWord(event)}>
                            <input className={styles.square} type="text" value="d" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                        <form className={styles.mainPageContainer__secondCrosswordPart__word} onSubmit={(event) => this.tenthWord(event)}>
                            <input className={styles.square} type="text" value="r" readOnly/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1" onChange={(event) => this.changeHandler(event)}/>
                            <input className={styles.square} type="text" maxLength="1" minLength="1"/>
                            <button type="submit" className={styles.btnSubmit}>submit</button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Сrossword
