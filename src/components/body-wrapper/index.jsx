import React from 'react';
import './styles.scss';

import Footer from '../footer';
import Navbar from '../navbar';
import PropTypes from 'prop-types';

const BodyWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="body-wrapper flex flex-wrap w-100 w-80-l pv3 ph3 bb b--orange">
        { children }
      </div>
      <Footer />
    </>
  )
}

BodyWrapper.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BodyWrapper
