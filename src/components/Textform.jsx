import React,{useState} from 'react'

export default function Textform() {//all function work in textform function.
  const [text, setText]= useState("Enter Your Text here");//Dstructuring method from javascript

  //function 
 const handleOnChange = (event)=>{
    let newText = event.target.value
    setText(newText);
  }
  // for convert to uppercase
  const handleonUppercase = (event) =>{
    let newText = text.toUpperCase()
    setText(newText)
  }
// for convert to lowercase 
  const handleonlowercase = (event) =>{
    let newText = text.toLowerCase()
    setText(newText)
  }
// fro clearinig text on click
  const handleonClearText = (event) =>{
    setText('');
  }


  return (
    <div>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
            <textarea 
              value={text}
              className="form-control" 
              onChange={handleOnChange}
              id="text"
              rows="3"
            ></textarea>
  </div>
     {/*change text into lowercase */}
        <button className="btn btn-outline-success m-2"
        onClick={handleonUppercase}> Change to Uppercase</button>
     {/* change text into lowercase */}   
        <button className="btn btn-outline-info m-2"
        onClick={handleonlowercase}> Change to Lowercase</button>
     {/* Button for clearing text on click */}
        <button type="button" class="btn btn-outline-danger"
         onClick={handleonClearText}>Clear Text</button>
    <hr/>
    <div className="classname p-3">
          <h1>
            Your Text Area
          </h1>
     </div>
     <hr/>
     <p>Your text Contains :{text.split("").length-1} Words and {text.length}: Characters </p>
     <hr/>
    <p>Preview Your Text</p>

  </div>
  )
}
