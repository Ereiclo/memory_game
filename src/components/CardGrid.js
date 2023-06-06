import '../styles/CardGrid.css'
import aquamarine from '../images/aquamarine.png'
import arabesque from '../images/arabesque.png'
import bloodsport from '../images/bloodsport.png'
import case_hardened from '../images/case_hardened.png'
import fire_serpent from '../images/fire_serpent.png'
import hydrophonic from '../images/hydrophonic.png'
import ice_coalted from '../images/ice_coalted.png'
import misty from '../images/misty.png'
import neon from '../images/neon.png'
import night_wish from '../images/night_wish.png'
import orbitmk from '../images/orbitmk.png'
import vulcan from '../images/vulcan.png'
import Card from '../components/Card'
import { useEffect, useState } from 'react'


function CardGrid(props) {
  const cards = [
    { image: aquamarine , name: 'Aquamarine'},
    { image: arabesque , name : 'Arabesque'},
    { image: bloodsport , name : 'Bloodsport'},
    { image: case_hardened, name : 'Case hardened' },
    { image: fire_serpent , name : 'Fire Serpent'},
    { image: hydrophonic , name : 'Hydrophonic'},
    { image: ice_coalted , name : 'Ice coalted'},
    { image: misty , name : 'Misty'},
    { image: neon , name : 'Neon'},
    { image: night_wish , name : 'Night wish'},
    { image: orbitmk , name : 'Orbit mk'},
    { image: vulcan , name : 'Vulcan'},
  ];

  const [indexes,setIndexes] = useState(cards.map((elem,index) => index));

  const shuffleArray = (originArr) => {
    let arr = [...originArr]

    let actual = arr.length-1;

    while(actual > 0){
      let selected = Math.floor((actual+1)*Math.random());


      [arr[selected],arr[actual]] = [arr[actual],arr[selected]]


      actual--;
    }

    return arr;
    
  }


  useEffect(()=>{

    setIndexes(shuffleArray(indexes));

  },[props.actualScore]);


  return (
    <div className="card-grid">
        {
           indexes.map((card_index) => {
            const card = cards[card_index];
            return (
              <Card key={card.name} {...props} img={card.image} name={card.name}/>
            )
           }) 
        }
    </div>

  );
}

export default CardGrid;