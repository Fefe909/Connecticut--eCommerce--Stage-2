import React from "react";
import './Main.scss';
import CardList from "../../components/CardList/CardList";

const Main = ({ children }) => {
    return (
        <main>
            <section>{/*Section*/}
                <div className="section__div">
                    <h1>Bienvenido a nuestro site</h1>
                    <p>Estos son nuestros productos</p>
                </div>
                {/*CardList*/}
                <ul className="cards-container" id="cards-container">
                    {/*<Card />*/}
                    <CardList />
                </ul>
            </section>
        </main>
    );
}

export default Main;