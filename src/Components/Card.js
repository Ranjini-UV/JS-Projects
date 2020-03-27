import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import '../Styles/custom.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(){
    this.props.onScroll();
}

  componentDidMount(){
    window.addEventListener("scroll", this.onScroll,false);

}

componentWillUnmount(){
   window.removeEventListener("scroll", this.onScroll,false);
}

    render() {
      const {cards}= this.props;
      const cardsForDisplay = cards.map((cards)=>
  
    
  <article className="card" key={cards.name}>
    <picture className="thumbnail">
         <img className="category__01" src={cards.imageUrl} alt="" />
    </picture>
    <div className="card-content">
      <h2>{cards.name}</h2>
    <p>Text : {cards.text}</p>
    <p>Set Name : {cards.set.name}</p>
    <p>Type : {cards.type}</p>
   </div>
  </article>
              
            
      )
      return <section className="cards" key={cards.name}>
        {cardsForDisplay}
        </section>;
       }
       
}

Card.propTypes = {
  onScroll : PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    SetName: PropTypes.string,
    type: PropTypes.string
  })).isRequired
}

export default Card;