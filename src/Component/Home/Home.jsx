import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import HomeService from '../HomeService/HomeService'
import ElectronicService from '../HomeService/ElectronicService'
import CCTVService from '../HomeService/CCTVService'
import GlassService from '../HomeService/GlassService'
import PlumbingService from '../HomeService/PlumbingService'
import ComputerService from '../HomeService/ComputerService'
import CardDetails from '../CardDetails/CardDetails'
import ModernCard from '../Card/ModernCard'
import ElectronicCard from "../Card/ElectronicCard"

const Home = () => {
  return (
    <div className='max-w-full mx-auto'>
      <Banner></Banner>
       <div className='max-w-7xl mx-auto'>
           <Category></Category>
           <ModernCard></ModernCard>   
           <ElectronicCard></ElectronicCard>
               {/* <HomeService></HomeService> */}
               {/* <ComputerService></ComputerService> */}
               {/* <ElectronicService></ElectronicService> */}
               {/* <CCTVService></CCTVService> */}
               {/* <GlassService></GlassService> */}
               {/* <PlumbingService></PlumbingService> */}
                {/* <CardDetails></CardDetails> */}
       </div>
       
    </div>
  )
}

export default Home
