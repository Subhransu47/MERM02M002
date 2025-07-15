import React from 'react'

function Home(props) {
  return (
    <div>
        value is :(props.a) <br/>

        the string value is :{props.str}

        <br />
        The object value are

        <br />
        name:{props.obj.name}

        <br />
        age:{props.obj.age}
        <br />
        email:{props.obj.email}


        Array elements are :{props.arr[2]}
        {console.log("hello")}
      <h1>This is my home page</h1>
    </div>
  )
}

export default Home
