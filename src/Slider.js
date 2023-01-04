import { useState } from "react";
import classes from './Slider.module.css'

function Slider({imageProps}){
    const [gift, setGifts] =useState(0);
    const prevBtn = () => {
        setGifts((gift => {
            gift --;
            if(gift < 0){
                return imageProps.length - 1
            }
            return gift;
        }))

    }
    const nextBtn = () => {
        setGifts((gift => {
            gift ++;
            if(gift > imageProps.length - 1){
                gift = 0;
            }
            return gift
        }))
    }
    return(
        <div>
            <div className={classes.container}>
                <img src={imageProps[gift]} width="200px" alt="gift" className={classes.gift}/>
            </div>
            <div className={classes.container}>
            <button onClick={prevBtn} className={classes.btn}>PREV</button>
            <button onClick={nextBtn} className={classes.btn}>NEXT</button>
            </div>
        </div>
    )
}
export default Slider;