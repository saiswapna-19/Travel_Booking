
const STORAGE_KEY = 'wanderly-bookings'

export function getBookings() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export function saveBooking(booking) {
  const bookings = getBookings()
  const updated = [booking, ...bookings]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function deleteBooking(id) {
  const updated = getBookings().filter((booking) => booking.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}
