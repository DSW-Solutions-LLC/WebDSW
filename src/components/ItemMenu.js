// ItemMenu.js

import React from 'react';

function ItemMenu({ nombre, referencia }) {
  return (
    <li className='nav-item'>
      <a className='nav-link no-underline' href={referencia}>{nombre}</a>
    </li>
  );
}

export default ItemMenu;
