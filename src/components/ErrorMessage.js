import React from 'react'

const ErrorMessage = () => {
  return (
    <div className="error-message">
        <div>
            <h1>No results found</h1>
        </div>
        <a href="/">
            <div>Go Back</div>
        </a>
    </div>
  )
}

export default ErrorMessage