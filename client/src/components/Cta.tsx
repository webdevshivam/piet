import React from 'react'
import { Link } from 'wouter';

const Cta = () => {
  return (
    <div>
      <section className="bg-white py-16 px-6 border-e-2 border-t-2">
        <div className="max-w-4xl mx-auto text-center  rounded-xl  px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join PIET and become part of a dynamic, future-focused learning environment. Discover courses that align with your passion and career goals.
          </p>
          <Link href="/admissions">
            <a className="inline-block btn-primary text-white px-6 py-3 rounded-md text-base font-semibold transition shadow">
              <i className="fas fa-file-alt mr-2"></i>
              Apply Now
            </a>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Cta
