import React from 'react'

const date = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='footer'><p>&copy; {date} Just Dream it, I Design it by Darlin</p></div>
  )
}

export default Footer