import React from 'react';

function ItemSolutions({title, img, text, arrayText }) {
    return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 pb-5">
                <div className="border-gradient-services"></div>
                <div className="card">
                    <div className="card-cover">
                        <h5 className="card-title"> {title} </h5>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title bold">{title}</h5>
                        <p className="card-text">{text}</p>
                        <img src= {img} alt={title}  />

                        {arrayText && arrayText.length > 0 ? (
                        arrayText.slice(1).map((text, index) => (
                            <p key={index} className="bold">{text}</p>
                        ))
                        ) : null}
 

                    </div>
                </div>
            </div>
    );
}

export default ItemSolutions;