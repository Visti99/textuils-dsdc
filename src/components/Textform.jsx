import React,{useState} from 'react'

export default function TextForm() {

  // destructuring ;
  // check the textarea 
    const [ text, setText] = useState("");

  //check the search input in word count
    const [search, setSearch] = useState("");
  
  // check the value of word count
    const [value, setValue] = useState("");

  //check the
    const handleChange = (e) =>{
      let newText = e.target.value;
      setText(newText);
    }
    // chnge to uppercase
    const handleUpperCase = (e) => {
      let newTExt = text.toUpperCase();
      setText(newTExt);
    }
    // chnge to lowerCase
    const handleLowerCase = (e) => {
      let newtext = text.toLowerCase();
      setText(newtext);
    
    }
    //chnge to first letter to upper letter
    const handlefirstToUpperCase = (e) => {

      let tempArr = text.split(" ");
      let temp = "";
      tempArr.forEach(element => {
        element = element.charAt(0).toUpperCase()+element.substr(1,element.length).toLowerCase();
        temp = temp+" "+element;
        temp = temp.trim();
        
      });
      setText(temp)
    }
    //click to clear text.
    const handleClearText = (e) => {
      setText("");
    }

    //click word count
    const handleWordCount = (e) => {
      
      // alert(search);
      const regex =  new RegExp(search,'gi');
      const newstr = text.match(regex);
      setValue(newstr.length);
    }


    //click to trim space between & around Spcae
    function handleTrimClick() {

      let res = text.replace(/\s/gi,"")
      setText(res);
    }

    //text Color change
    function handelcolorchng() {
      document.getElementById("txt").style.color = 'green ';
      document.getElementById("txt").style.fontSize = "large"; 
      // document.getElementById("txt").style.direction = "rtl"; //rtl means right to left
      document.body.style.backgroundColor = "black";//click to chng background
      document.body.style.color = "white";//chng text black to white
      
  

    
   }
  //  
  function handelcolornormal() {
    document.getElementById("txt").style.color = 'black';
    document.getElementById("txt").style.fontSize = 'medium'; 
    // document.getElementById("txt").style.direction = "ltr"; //ltr means left to ro=ight 
    document.body.style.backgroundColor = "";//click to chng background normal
    document.body.style.color = "black";
  
 }





  return (
    <div>
  <div className=" mb-3">
    <h1>Enter Your Text Here</h1>
{/* textarea is use to change text using handleon change */}
    <textarea 
      value={text}
      onChange={handleChange}
      className="form-control"
      id="txt"
      rows="3">
      </textarea>
        
  </div>
{/* button - uppercase, lowercase,frst letter to uppercase, text clear . */}
    <button className='btn btn-outline-primary mx-2 text-dark'  onClick={handleUpperCase}><b>Change to UpperCase</b></button>
    <button className='btn btn-outline-primary mx-2 text-dark' onClick={handleLowerCase}><b>Change to lowerCase</b></button>
    <button className='btn btn-outline-primary mx-2 text-dark' onClick={handlefirstToUpperCase}><b>Change to firstToUpperCase</b></button>
    <button className='btn btn-outline-primary mx-2 text-dark' onClick={handleClearText}><b>Clear</b></button>


{/* the model btn start  */}
    <button type="button" 
            className="btn btn-outline-primary text-dark" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal">
    <b>Search Word</b>
    </button>

{/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"><b>Search A word</b></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="input-group">
              <span className="input-group-text">First and last name</span>
{/* input word Search */}
              <input 
              value={search || ""}
              onChange={(e)=>setSearch(e.target.value)}
              type="text"
              aria-label="Last name"
              className="form-control"
              />
{/*Words count through   */}
              </div>
              <p>this word is count: {value}</p>
              </div>
            
              <div className="modal-footer">  
{/* word count button here */}
                <button type="button"
                         className="btn btn-outline-success text-dark" 
                         onClick={handleWordCount}><b>CountWord</b></button>
              </div>
            </div>
          </div>
        </div>
{/* the model btn end  */}

{/* trim buttun here */}
      <button className='btn btn-outline-primary mx-2 text-dark'
        onClick={handleTrimClick}>
        <b>Trim</b>
      </button>

{/* click to text color change  */}
    <button type="button" 
            className="btn btn-outline-primary m-2 text-dark"
             onClick={handelcolorchng} >
          <b>Change</b>
    </button>

{/*  */}
    <button type="button" 
            className="btn btn-outline-primary text-dark "
            onClick={handelcolornormal} >
          <b>Return</b>
    </button>






    <hr /> 
      <div className='p-2'>
        <h1>Your Text Summery</h1>
      </div>

{/*word and Space contains here */}
      <p>Your Text Contains : {text.split(" ").length-1} words and {text.length}:  characters</p>
      <hr />
{/* average typing Speed */}
      <p>The average time to read this : {text.split(" ").length * 2.0}</p>
      <hr />
{/* preview of text */}      
      <h1>preview Text</h1>
      <p>{text}</p>
    </div>
  )
}