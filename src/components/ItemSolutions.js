import React from 'react';

function ItemSolutions({ title, text, arrayText, img }) {
  return (
    <div className="col-xl-3 col-12 py-5 text-center">
      <div className="card">
        <div className="card-cover">
          <h3 className="card-title">{title}</h3>
          <img src={img} alt="icono solución" />
        </div>

        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p>{text}</p>
          <ul>
            {arrayText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemSolutions;
