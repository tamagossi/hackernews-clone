import React from 'react';
import './styles.scss';

const BodyWrapper = ({ child }) => {
  return (
    <div className="body-wrapper flex flex-wrap w-100 w-80-l">
      { child }
    </div>
  )
}

export default BodyWrapper
