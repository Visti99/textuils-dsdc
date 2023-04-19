import React, { useState } from 'react'

export default function AboutUs() {
  const [style, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  })

  //here function chng bg & text color with onclick function
  const handlestyle = () => {//condition function
    
    if (style.color === "white")
  {//=== strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.
      setstyle({ color: "black", backgroundColor: "white" })
    }
    else {
      setstyle({ color: "white", backgroundColor: "black" })
    }
  }

  return (
    <div>
      <div class="card mb-3" style={style}>
 {/* here we inline style with {style} function */}
 {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div class="card-body">
          <h5 class="card-title">About Us</h5>
          <p class="card-text">Some quick example text to build on the card title and make
            up the bulk of the card's content.Some quick example text to build on the card title and make
            up the bulk of the card's content.</p>
          <p className="Card-text">
            <small className="text-muted">
              Last updated 2 mins ago
            </small>
          </p>

 {/* button is for enable dark mode */}
          <button className="btn btn-primary"
                  onClick={handlestyle}>
                  Enable Dark Mode
          </button>
        </div>
      </div>
    </div>
  )
}