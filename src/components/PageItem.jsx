import React, { useState } from 'react';
import '../styles/styleHome.sass';

function RotateItem({ setPage, i }) {
  return (<div className="pages__item" key={i} onClick={() => setPage(i)}>{i}</div>);
}

export default RotateItem;
