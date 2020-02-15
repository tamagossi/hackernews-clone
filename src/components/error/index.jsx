import React from 'react'
import './styles.scss'

const ErrorIndicator = () => {
  return (
    <div className="error-overlay relative flex w-100">
      <div className="error-container absolute el-centered flex flex-wrap w-100">
        <div className="image-container w-100 tc">
          <img
            alt="Error"
            className="w-50 w-40-m w-30-l"
            src="https://i.dlpng.com/static/png/3949766-error-png-92-images-in-collection-page-3-error-png-900_858_preview.webp"
          />
        </div>
        <h2 className="gray fw5 w-100 tc">
          There is something wrong when fetching data
        </h2>
      </div>
    </div>
  )
}

export default ErrorIndicator
