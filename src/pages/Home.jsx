import React, { useEffect, useState } from 'react'
import Jobs from '../data.js'
import Vacancy from '../components/Vacancy.jsx'
import CreateJobs from '../components/CreateJobs.jsx'


const Home = () => {
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    setVacancies(Jobs)
  }, [])

  const handleSubmit = (form) => {
    setVacancies([form, ...vacancies])
  }

  const handleDelete = (id) => {
    const _vacancies = vacancies.filter((vacancy => vacancy.id !== id))
    setVacancies(_vacancies)
  }

  return (
    <>
      <section className='hero'>
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">Apply for any vacancies below</p>
        </div>
      </section>

      <section>
        <CreateJobs submit={handleSubmit} />
      </section>

      <section>
        {vacancies.map(vacancy => (
          <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete} />
        ))}
      </section>

    </>
  )
}

export default Home;