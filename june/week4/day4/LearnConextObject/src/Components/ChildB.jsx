import React, { useContext } from 'react'

function ChildB() {

let obj=useContext(nameContext);
  return (
    <div>
      name  is: {obj.name} <br />
        age is: {obj.age}
        <br />
        Array elements are :{obj.arr[2]}
      <h1>this is my childB   </h1>
    </div>
  )
}

export default ChildB
