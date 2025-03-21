import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({cards = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
        <div className="flex justify-center flex-wrap ">
          {
            cards?.map((card) => {
              return (
                <Link to={`/categories/${card}`} className="p-4 md:w-/4 cursor-pointer">
                  <div className="rounded-lg  bg-gray-100 p-3">
                      <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || 'Example card'}</h2>
                    </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeatureCard