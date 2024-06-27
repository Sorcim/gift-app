import Layout from '~/app/components/layout'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react'
import { FormEvent } from 'react'
import type { Beneficiary, Gift } from '#types/common'

interface Props {
  gifts: Gift[]
  beneficiaries: Beneficiary[]
}

export default function Home(props: Props) {
  const { gifts, beneficiaries } = props
  const handleFilter = () => {}
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Liste de cadeaux</h1>
        </div>

        {/* Filters */}
        <section aria-labelledby="filter-heading" className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between">
            <PopoverGroup className="hidden sm:flex sm:items-baseline sm:space-x-8">
              <Popover
                as="div"
                key="beneficiaries"
                id="menu"
                className="relative inline-block text-left"
              >
                <div>
                  <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <span>Beneficiaries</span>
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </PopoverButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <PopoverPanel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <form className="space-y-4" onSubmit={handleSubmit} onChange={handleFilter}>
                      {beneficiaries.map((beneficiary) => (
                        <div className="flex items-center">
                          <input
                            id={`filter-beneficiary-${beneficiary.id}`}
                            name={`filter-beneficiary`}
                            type="checkbox"
                            value={beneficiary.name}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-beneficiary-${beneficiary.id}`}
                            className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                          >
                            {beneficiary.name}
                          </label>
                        </div>
                      ))}
                    </form>
                  </PopoverPanel>
                </Transition>
              </Popover>
            </PopoverGroup>
          </div>
        </section>

        {/* Product grid */}
        <section aria-labelledby="products-heading" className="mt-8 mb-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {gifts.map((product) => (
              <Link href={`/gift/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={product.image ? product.image : 'https://dummyimage.com/640x640/ccc/000'}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  <p>{product.price} €</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
