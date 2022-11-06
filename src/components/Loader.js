import React from 'react'
import DotLoader from "react-spinners/DotLoader";

const Loader = () => {
  return (
    <div className="error-page">
        <div>
          <DotLoader size={50} color="#fff" />
        </div>
    </div>
  )
}

export default Loader