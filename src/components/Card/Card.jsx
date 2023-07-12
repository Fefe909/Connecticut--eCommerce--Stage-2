import React from "react";
import "./Card.scss";

const Card = ({ image, title, description, price }) => {
    return (
        <li className="card">
            <div className="card__image-container">
                <img src={image} alt={title} />
            </div>
            <div className="card__content">
                <h2 className="card__content--heading">
                    {title}
                </h2>
                <div className="card__content--description">
                    <p className="card__content--description-text">
                        {description}
                    </p>
                </div>
            </div>
            <div className="card__price">
                <p>
                    AR$ ${price}
                </p>
            </div>
            <a className="card__button" href="#" onClick={(e) => {
                e.preventDefault();
                alert("hola");
            }}>Comprar!</a>
        </li>   
    );
};
export default Card;