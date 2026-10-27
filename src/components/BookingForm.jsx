
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveBooking } from '../utils/localStorage'

const today = new Date()
const minDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-')

export default function BookingForm({ item }) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    travellers: '2',
  })
  const [errors, setErrors] = useState({})

  const total = useMemo(
    () => item.price * Number(form.travellers),
    [item.price, form.travellers]
  )

  function handleChange(event) {
    const { name, value } = event.target
    setForm(previous => ({ ...previous, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.'
    }

    const email = form.email.trim()
    const atIndex = email.indexOf('@')
    const dotIndex = email.lastIndexOf('.')

    if (
      atIndex < 1 ||
      dotIndex < atIndex + 2 ||
      dotIndex === email.length - 1 ||
      email.includes(' ') ||
      email.includes('..')
    ) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.date || form.date < minDate) {
      nextErrors.date = 'Choose today or a future date.'
    }

    if (
      !Number.isInteger(Number(form.travellers)) ||
      Number(form.travellers) < 1 ||
      Number(form.travellers) > 12
    ) {
      nextErrors.travellers = 'Choose between 1 and 12 travellers.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const booking = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      packageId: item.id,
      packageTitle: item.title,
      destination: item.name,
      image: item.image,
      name: form.name.trim(),
      email,
      date: form.date,
      travellers: Number(form.travellers),
      pricePerPerson: item.price,
      total,
    }

    saveBooking(booking)
    navigate('/bookings?success=1')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="field">
        <label htmlFor="name">Full name *</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email address *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="date">Departure date *</label>
        <input
          id="date"
          name="date"
          type="date"
          min={minDate}
          value={form.date}
          onChange={handleChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div className="field">
        <label htmlFor="travellers">Number of travellers *</label>
        <select
          id="travellers"
          name="travellers"
          value={form.travellers}
          onChange={handleChange}
        >
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} {index === 0 ? 'traveller' : 'travellers'}
            </option>
          ))}
        </select>
        {errors.travellers && (
          <p className="error">{errors.travellers}</p>
        )}
      </div>

      <div className="rounded-2xl bg-teal-50 p-5">
        <div className="flex justify-between gap-3 text-sm text-slate-600">
          <span>
            ₹{item.price.toLocaleString('en-IN')} × {form.travellers} traveller(s)
          </span>
          <span>₹{total.toLocaleString('en-IN')}</span>
        </div>
        <div className="my-3 border-t border-teal-100" />
        <div className="flex items-center justify-between">
          <span className="font-bold">Total price</span>
          <strong className="text-2xl text-teal-800">
            ₹{total.toLocaleString('en-IN')}
          </strong>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Demo price in INR. No payment is collected.
        </p>
      </div>

      <button
        type="submit"
        className="rounded-full bg-teal-800 px-5 py-3.5 font-bold text-white hover:bg-teal-900"
      >
        Confirm demo booking
      </button>
    </form>
  )
}
