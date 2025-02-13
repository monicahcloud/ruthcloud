import aboutImg from '../assets/newruthpic.png'

const About = () => {
  return (
    <section className=" pt-40 pb-5" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-2 lg:gap-4 xl:gap-6">
        <div className="relative">
          <div className="border-8 border-cyan-500 absolute -top-6 -left-6 w-80 h-full"></div>
          <article className=" md:block">
            <img
              src={aboutImg}
              className="relative z-10 shadow-lg h-80 lg:h-90"
            />
          </article>
        </div>
        <article>
          <h1 className=" text-7xl font-bold tracking-wider text-cyan-600">
            Ruth <span className="text-cyan-800"> Cloud</span>{' '}
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Health and Wellness Coach
          </p>
          <p className="mt-4 text-1xl text-slate-700  tracking-wide">
            With over 40 years of experience in nursing, Ruth has spent her
            career providing compassionate care, nurturing wellness, and helping
            countless individuals navigate their health journeys. Now retired,
            she is passionate to continue helping others take control of their well-being and live healthier lives.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About

