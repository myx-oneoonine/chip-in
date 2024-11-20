import { prisma } from '@/lib/prisma/client'
import { Trips } from '@prisma/client'

export async function createTrip(title: string): Promise<Trips> {
  const currentDate = new Date();

  try {
    return await prisma.trips.create({
      data: {
        title: title,
        expired_date: new Date(currentDate.setDate(currentDate.getDate() + 7))
      }
    })
  } catch (error) {
    console.error('Error creating trip:', error)
    throw error
  }
}