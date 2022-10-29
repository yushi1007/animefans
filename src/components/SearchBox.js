import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  return (
    <div className="search">
        <input type="text" placeholder="Find Your Anime..." />
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
    </div>
  )
}

export default SearchBox