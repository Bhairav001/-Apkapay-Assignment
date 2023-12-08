import React from 'react'

const SingleBus = () => {
    let data = JSON.parse(localStorage.getItem("singleData"))||[];
    console.log("hello",data);
  return (
    <div>
        <h2>Single Bus</h2>
    </div>
  )
}

export default SingleBus