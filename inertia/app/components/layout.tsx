import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'

type LayoutProps = {
  children: React.ReactNode
}

type MessageTypes = {
  message: string
  type: string
  title: string
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const { messages } = usePage<{ messages: MessageTypes }>().props
  const [show, setShow] = useState(!!messages)

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-50">
        <div>
          <header className="relative">
            <nav aria-label="Top">
              <div className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                      </svg>
                    </Link>
                    {/*<div className="flex flex-1 items-center justify-end">*/}
                    {/*  <div className="flex items-center lg:ml-8">*/}
                    {/*    <a*/}
                    {/*      href="#"*/}
                    {/*      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"*/}
                    {/*    >*/}
                    {/*      Mes Réservations*/}
                    {/*    </a>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition show={show}>
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">{messages?.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{messages?.message}</p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setShow(false)
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div className={'flex-grow'}>{children}</div>
        <footer aria-labelledby="footer-heading" className="border-t border-gray-200 bg-white">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-100 py-10 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2024 Johan Pesquer, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
