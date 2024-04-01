import React, { useState } from 'react';

export default function TextForms(props) {
    const handleUpClick = () => {
        console.log("UpperCase Btn Pressed" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleloClick = () => {
        console.log("LowerCase Btn Pressed" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const handleSentenceCaseClick = () => {
        console.log("Sentence Case Btn Pressed" + text);
        let newtext = text.toLowerCase();
        newtext = newtext.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
            return c.toUpperCase();
        });
        setText(newtext);
    };

    const HandleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };

    const calculateReadingTime = () => {
        const words = text.split(/\s+/).filter(word => word.trim() !== '');
        const averageWordsPerMinute = 200; // Adjust this value based on your audience
        return Math.ceil(words.length / averageWordsPerMinute);
    };

    const [text, setText] = useState("Enter Text Here");

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'grey'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleloClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleSentenceCaseClick}>Convert to Sentence Case</button>
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).length} words and {text.length} characters</p>
                <p>{calculateReadingTime()} minute(s) read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
