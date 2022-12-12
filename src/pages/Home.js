import React from 'react';

const Home=()=> {
    return (
        <section
            id="hero"
            className="d-flex flex-column justify-content-center align-items-center"
        >
            <div className="hero-container" data-aos="fade-in">
                <h1>Nishant Singh</h1>
                <p>
                    I'm{" "}
                    <span
                        className="typed"
                        data-typed-items="Designer, Developer, Freelancer, Photographer"
                    />
                </p>
            </div>
        </section>
    );
}

export default Home;
