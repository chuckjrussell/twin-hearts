import React from 'react';

const SectionContainer = (props) => {
    return (
        <section className={props.className} id={props.id}>
            <div className="container">
                <div className="row">
                    <h2>{props.sectionName}</h2>
                </div>

                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    )
};

export default SectionContainer;