import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';
export default function Clothe(props) {
  return (
    <section>
      
        <div className="card">
            <img src={props.imageUrl}/>
            <div className="info">
                <p className="category">Available Sizes :{props.availableSizes}</p>
                <p className="name">{props.name}</p>
                <p className="price">{props.actualPrice} DT <span className="old">{props.oldPrice} DT</span></p>
                <p className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>

            </div>

            
            <div  className="buy">
                  <input type="number" className="amount" placeholder="Select an amount... " />
                  <button className="cart-button"  >
                    <span className="add-to-cart">Add</span>
                    <span className="added"></span>
                    <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faShoppingCart}

                       />
                  </button>
       
                </div>
                <div className="like">
                 <FontAwesomeIcon 
                        className= "likeIcon"
                        icon={faThumbsUp}
                     />
                    <span> {props.likes}  </span>
                </div>
         

          </div>    
</section>
  )
}
