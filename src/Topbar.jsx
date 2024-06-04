import React from 'react'

const Topbar = () => {
  return (
    <div>Logged User: {localStorage.getItem("user")}</div>
  )
}

export default Topbar