import aboutImg from '../assets/ruthpic.jpg'

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-2">
        <div className="relative">
          <div className="border-8 border-cyan-500 absolute -top-6 -left-6 w-80 h-full"></div>
          <article className="hidden md:block">
            <img
              src={aboutImg}
              className="relative z-10 shadow-lg h-80 lg:h-90"
            />
          </article>
        </div>
        <article>
          <h1 className=" text-7xl font-bold tracking-wider font-bold text-cyan-600">
            Ruth <span className="text-cyan-800"> Cloud</span>{' '}
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Health and Wellness Coach
          </p>
          <p className="mt-4 text-1xl text-slate-700 capitalize tracking-wide">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores enim earum saepe quam soluta fugiat iste doloremque pariatur, quas a quae inventore perspiciatis incidunt deleniti. Optio pariatur possimus facere?
          </p>

        </article>
      </div>
    </section>
  )
}

export default About

