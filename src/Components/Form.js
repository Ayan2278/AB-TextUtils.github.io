// import { func } from 'prop-types';
import React, { useState } from 'react';




export default function Form(props) {
    const ToUpCase = () => {
        setText("You have clicked on the button.." + text)
        let upCase = text.toUpperCase();
        setText(upCase);
        props.showAlert("Converted to Upper Case..!","success")
    }
    const ToLCase = () => {
        setText("You have clicked on the button.." + text)
        let upLow = text.toLowerCase();
        setText(upLow);
        props.showAlert("Converted to Lower Case..!","success")
    }
    const toCopyText=()=>{
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to clipboard..!","success")
    }
    const ToConvertFirst = () => {
        setText("You have clicked on the button.." + text)
        let upLow = text.split(" ");
        for (var i = 0; i < upLow.length; i++) {
            upLow[i] = upLow[i].charAt(0).toUpperCase() + upLow[i].slice(1);
            props.showAlert("Converted first alphabet..!","success")
            
        }
        const str2 = upLow.join(" ");
        setText(str2);
    }
    const ToClear = () => {
        setText("You have clicked on the button.." + text)
        let upLow = "";
        setText(upLow);
        props.showAlert("Text cleared..!","success")
    }

    const ToChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
        <div className="container">


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Apna textarea</label>
                <textarea className="form-control"  value={text} onChange={ToChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={ToUpCase}>To Upper Case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={ToLCase}>To Lower Case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={ToConvertFirst}>To Capital first letter</button>
            <button className="btn btn-primary mx-3 my-2" onClick={ToClear}>To Clear</button>
            <button className="btn btn-primary mx-3 my-2" onClick={toCopyText}>To Copy Text</button>


            <h1>Your text summary..</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview...</h2>
            <p>{text.length>0?text:"Enter in textarea to preview something"}</p>

        </div>
    )
}
