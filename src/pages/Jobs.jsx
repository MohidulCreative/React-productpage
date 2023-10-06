import React from 'react'

const Jobs = () => {
  return (
    <>
      <section className='hero'>
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">search for any vacancies below</p>
        </div>
      </section>
      
      <section>
        <div className="box">
          <h1 className="title is-5">Search for a Vacancy</h1>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Job title"
              required
              name="title"
            />
            <input
              className="input mt-2"
              type="text"
              placeholder="Company name"
              name="company"
              required
            />
            <input
              className="input mt-2"
              type="text"
              placeholder="City name"
              name="city"
              required
            />
            <button className="button mt-2 is-primary">Search</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Jobs