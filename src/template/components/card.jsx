import React from 'react';

function Card({ children, ...rest }) {
  return (
    <div {...rest}>
      <div className="card text-black">
        <div className="card-body p-md-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card;