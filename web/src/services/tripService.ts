import { createTrip } from "@/lib/prisma/trips/commands/createTrip";

export async function createTripService(title: string) {
  console.log('createTripService')
  // Add validation
  // Add business logic
  // Add error handling

  try {
    const result = await createTrip(title)
    // console.log(`trip result: ${result}`)

    return result
  } catch (error) {
    console.error('Error creating trip:', error);
    throw new Error('Failed to create trip');
  }
}