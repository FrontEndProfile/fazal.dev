import React from 'react'
import Header from '../../components/Header/Header'
import ResumeComponent from '../../components/Resume/ResumeComponent'
const Resume = () => {
  return (
    <>
      <main className='wrapper'>
        <div className='container-lg g-0 h-100'>
          <Header />
          <section className='introPageHome ResumePageMain'>
            <ResumeComponent />
          </section>
        </div>
      </main>
    </>
  )
}

export default Resume