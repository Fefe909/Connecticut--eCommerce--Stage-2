import React from "react";
import './Main.scss';


const Main = ({ children, pageTitle, pageDescription }) => {
    
    return (
        <main>
            <section>
                <div className="section__div">
                    <h1 >{pageTitle}</h1>
                    <p>{pageDescription}</p>
                </div>
                {children}
            </section>
        </main>
    );
}

export default Main;