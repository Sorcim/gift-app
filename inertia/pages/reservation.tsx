import Layout from '~/app/components/layout'
import { GlobeAltIcon } from '@heroicons/react/16/solid'
import DeleteReservationButton from '~/app/components/reservations/delete_reservation_button'

type ReservationProps = {
  reservation: {
    reservation_id: string
    reserved_by: string
    beneficiary_name: string
    gift_name: string
    gift_description: string
    gift_image: string
    gift_link: string
    gift_price: string
  }
}

export default function Reservation(props: ReservationProps) {
  const { reservation } = props
  return (
    <Layout>
      <main>
        {/* Product */}
        <div>
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <div>
                <p>Pour {reservation.beneficiary_name}</p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {reservation.gift_name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">{reservation.gift_price} €</p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{reservation.gift_description}</p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={reservation.gift_image}
                  alt={reservation.gift_name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <div className="mt-4">
                  {reservation.gift_link && (
                    <a
                      href={reservation.gift_link}
                      className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                    >
                      <GlobeAltIcon
                        className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span>Lien vers le site marchand</span>
                    </a>
                  )}
                </div>
                <div className="mt-10">
                  <DeleteReservationButton href={`/reservations/${reservation.reservation_id}`} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
