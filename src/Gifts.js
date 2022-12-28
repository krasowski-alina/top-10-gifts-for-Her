import { useState } from 'react';
import { data } from './data';
import classes from './Gifts.module.css'
import trash from './trash.png'
function Gifts(){
    const [ideas, setIdeas] = useState(data);
    const [showText, setShowText] = useState(false)
    const removeItem = (id) => {
        let newIdeas = ideas.filter(item => item.id !== id);
        setIdeas(newIdeas)
    }
    const showTextClick = (idea) => {
        idea.showMore = !idea.showMore
        setShowText(!showText)
    }
    return(
        <div>
            <div className={classes.container}>
                <h1 className={classes.header}>Top {ideas.length} gifts for HER</h1>
            </div>
            {ideas.map((idea => {
                const {id, giftName, image, description, showMore} = idea;
                return(
                    <div key={id}>
                        <div className={classes.container}>
                            <h2 className={classes.heading}>{giftName}</h2>
                        </div>
                        <div className={classes.container}>
                            <img className={classes.gift} src={image} alt='gift'/>
                        </div> 
                        <div className={classes.container}>
                            {/* <button onClick={()=> removeItem(id)}><img src={trash} alt="trash icon" height="40px"/></button> */}
                            <img onClick={()=> removeItem(id)} src={trash} alt="trash icon" className={classes.trashCan}/>
                            </div>
                        <div className={classes.contWidth}>
                            <div className={classes.container}>
                                <h5 className={classes.textContStyle}>{showMore ? description : description.substring(0, 102)+ "..."}
                                <button className={classes.btnShowMore} onClick={()=> showTextClick(idea)}>
                                    {showMore? "Show less" : "Show more"}
                                </button>
                                </h5>
                            </div>
                        </div>
                    </div>
                )
            }))}
            <div className={classes.container}>
                <button className={classes.btn} onClick={() => setIdeas([])}>DELETE ALL</button>
            </div>
        </div>
    )

}

export default Gifts;