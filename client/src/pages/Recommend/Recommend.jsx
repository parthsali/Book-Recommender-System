import React, {useState} from 'react'
import './Recommend.css'

const Recommend = () => {
    const [bookName, setBookName] = useState('')
    

    const handleOnClick = () => {
        console.log(bookName)
    }

    
    return (
    <>
        <div className='main-container'>
            <div className='search-container'>
                <input onChange={e=>setBookName(e.target.value)} placeholder='Search Books here...' type='text'/>
                <button onClick={handleOnClick}>Search</button>
            </div>
        </div>
    </>
  )
}

export default Recommend