import React, {useState, useEffect} from 'react'
import BookItem from '../../components/BookItem/BookItem'
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [Data, setData] = useState();
  const bookArray = [];
  console.log("before calling");

  useEffect(()=>{
    axios.get('http://localhost:5000/').then(res => setData(res.data)).catch(err => console.log(err))

    
  }, [])
  
  if(Data){
    for(var i = 0; i<22; i++){
      bookArray[i] = {
        "title" : Data.title[i],
        "url" : Data.url[i],
        "author" : Data.author[i],
        "rating" : Data.rating[i]
      }
    }
    console.log(bookArray);
  }



  return (
    <>
        <div className='main-container'>
              <div className='heading'>
                <h1>Top 50 Books</h1>
              </div>
              <div className='grid-container'>
                  {bookArray.map(( ele, id)=>{
                    return (

                      <BookItem 
                       id = {id}
                       title={ele.title}
                       url={ele.url} 
                       author = {ele.author}
                       rating = {ele.rating} 
                      />
                    )
                  })} 
              </div>
        </div>
    </>
  )
}

export default Home