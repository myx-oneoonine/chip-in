import { createTripService } from '@/services/tripService'

export default async function TripsPage() {
  async function handleCreateTrip(formData: FormData) {
    'use server'
    await createTripService(formData.get('tripName') as string)
  }

  return (
    <form action={handleCreateTrip}>
      <div>
        <label htmlFor="tripName">Trip Name</label>
        <input type="text" name="tripName" />
      </div>
      <button type="submit">Create Trip</button>
    </form>
  )
}