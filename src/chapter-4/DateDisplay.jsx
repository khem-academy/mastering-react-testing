import React from 'react'
import { formatDate } from './formatDate'

const DateDisplay = ({ date }) => {
  return <div>{formatDate(date)}</div>
}

export default DateDisplay
