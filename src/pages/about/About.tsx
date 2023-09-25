import { Solution, Journey, OurValues, ValueAdd } from './sections'

const About = () => {
  return (
    <>
      <section className="pt-60 pb-20 max-container">
        <Solution />
      </section>
      <section className="py-20  relative max-container ">
        <Journey />
      </section>
      <section className="py-20 max-container ">
        <ValueAdd />
      </section>
      <section className="py-20 max-container ">
        <OurValues />
      </section>
    </>
  )
}

export default About
