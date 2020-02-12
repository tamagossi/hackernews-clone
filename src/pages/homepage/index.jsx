import React, { useEffect } from 'react';

import BodyWrapper from '../../components/body-wrapper';
import jsonPlaceHolderServices from '../../services/jsonPlaceHolder';

const Homepage = () => {
  useEffect(() => {
    jsonPlaceHolderServices.getUser().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <BodyWrapper>
      </BodyWrapper>
    </>
  )
}

export default Homepage