import React from 'react';
import './styles.scss';

const BodyWrapper = ({ children }) => {
  return (
    <div className="body-wrapper flex flex-wrap w-100 w-80-l pv3 ph3 bb b--orange">
      { children }
    </div>
  )
}

export default BodyWrapper
