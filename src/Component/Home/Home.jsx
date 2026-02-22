import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import Category from '../Category/Category'

const Home = () => {
  return (
    <div className='max-w-full mx-auto'>
      <Banner></Banner>
       <div className='max-w-7xl mx-auto'>
           <Category></Category>
           <Card></Card>   
       </div>
    </div>
  )
}

export default Home
