import React, { useState } from 'react';
import '../styles/styleHome.sass';

function RotateItem({id, rotateToCatalog, i}) {




    return (<div className='title__navigation__item'  onClick={() => rotateToCatalog(id)} key={id}>   {i} /</div>);
}

export default RotateItem;
