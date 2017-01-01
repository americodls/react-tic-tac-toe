import React from 'react';
import './Gap.css';

function Gap(props) {
  return (
    <button className="gap" onClick={ () => props.onClick() }>
      { props.value }
    </button>
  );
}

export default Gap;
