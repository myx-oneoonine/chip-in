import { classNames } from '@/lib/utils/style'
import { createTripService } from '@/services/tripService'
import { redirect } from 'next/navigation'

export default async function TripsPage() {
  
  async function handleCreateTrip(formData: FormData) {
    'use server'
    const result = await createTripService(formData.get('tripName') as string)

    redirect(`/trip/${result.id}`)
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <form action={handleCreateTrip}>
        <div className='flex flex-col items-center'>
          <label htmlFor="tripName" className='text-2xl'>Enter Trip</label>
          <div>
            <input type="text" name="tripName"
              className={classNames(
                "rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300",
                "focus:ring-2 focus:ring-inset focus:ring-indigo-600",
                "text-gray-900 placeholder:text-gray-400"
              )}
            />
            <button
              type="submit"
              className="ml-1 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go!~
            </button>
          </div>
        </div>
      </form>


    </div>
  )
}