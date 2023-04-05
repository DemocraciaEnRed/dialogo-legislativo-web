import React from 'react'

export default ({ onMarkClick, type, children }) => (
  <button
    onPointerDown={onMarkClick(type)}
    className='style-button'>
    {children}
    <style jsx>{`
      .style-button {
        border: 0;
        background-color: var(--black);
        color: #FFF;
      }
    `}</style>
  </button>
)