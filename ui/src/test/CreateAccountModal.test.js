import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import CreateAccountModal from '../components/CreateAccountModal'

test('form modal renders conrrectly' , () => {
  render(<CreateAccountModal/>)
  expect(screen.getByLabelText(/Firstname/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Lastname/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Password_confirmation/i)).toBeInTheDocument()
  expect(screen.getByText(/Submit/i)).toBeInTheDocument()
})

test('form submission work correctly', () => {
  render(<CreateAccountModal/>)

  fireEvent.change(screen.getByLabelText(/Firstname/i), {target: {value: 'xcvxcvxcv'}})
  fireEvent.change(screen.getByLabelText(/Lastname/i), {target: {value: 'xcvxcvxcvxcv'}})
  fireEvent.change(screen.getByLabelText(/Email/i), {target: {value: 'zzz@gmail.com'}})
  fireEvent.change(screen.getByLabelText(/Username/i), {target: {value: 'zzz'}})
  fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: '123456789'}})
  fireEvent.change(screen.getByLabelText(/Password_confirmation/i), {target: {value: '123456789'}})
  fireEvent.click(screen.getByText(/Submit/i))
})