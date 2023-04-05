import React,{useState} from 'react'

export default function Textform() {//all function work in textform function.
  const [text, setText]= useState("Enter Your Text here");//Dstructuring method from javascript

  //function 
 const handleOnChange = (event)=>{
    let newText = event.target.value
    setText(newText);
  }
  const handleonUppercase = (event) =>{
    // console.log("text")
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleonlowercase = (event) =>{
    // console.log("text")
    let newText = text.toLowerCase()
    setText(newText)
  }

  return (
    <div>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
            <textarea 
              value={text}
              className="form-control bg-secondry" 
              onChange={handleOnChange}
              id="text"
              rows="3"
            ></textarea>
    </div>
     {/*change text into lowercase */}
        <button className="btn btn-primary m-2 bg-dark"
        onClick={handleonUppercase}> Change to Uppercase</button>
     {/* change text into lowercase */}   
        <button className="btn btn-primary bg-dark"
        onClick={handleonlowercase}> Change to Lowercase</button>
    </div>
  )
}
