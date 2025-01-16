
import {  videos } from '../data'
import ServiceCard from './ServiceCard'
import Title from './Title'

const Services = () => {
  return (
    <section className='py-20 align-element' id='services'>
      <Title text='Resources'/>
      <div className="">
        {/* {videos.map((service) => {
          return <ServiceCard key={service.id} {...service}/>
        })} */}
        <ServiceCard/>
      </div>
    </section>
  )
}

export default Services
