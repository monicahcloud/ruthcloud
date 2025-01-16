
import {  videos } from '../data'
import ServiceCard from './ServiceCard'
import Title from './Title'

const Services = () => {
  return (
    <section className='pt-36 align-element' id='videos'>
      <Title text='Informational Videos'/>
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
