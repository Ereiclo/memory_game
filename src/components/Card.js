import { useEffect, useState } from 'react';
import '../styles/Card.css'

function Card(props){
    const {actualScore,setNewScore,newTry,setNewTry} = props;
    const [clicked,setClicked] = useState(false);
    const {img,name} = props;

    const checkClick =() => {
        if(clicked){
            setNewScore(0)
            setNewTry(true);
        }else{
            setClicked(true);
            setNewScore(actualScore+1);
        }


    }

    useEffect(() => {

        if (newTry){
            setClicked(false);
        }

    },[newTry]);




    return (
        <div className="card" onClick={checkClick}>
            <img src={img} alt={name} />
            <div>{name}</div>
        </div>
    )



}



export default Card;