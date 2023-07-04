"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const handleSearch =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }

  const [manufacturer,setManufacturer] = useState()

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  )
}

export default SearchBar