import React, { useState } from "react";
import bag from "./assets/bag.png";
const ImageManipulation=() => {
    const [h,setH]=useState(200);
    const [w,setW]=useState(200);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    const [rotate,setRotate]=useState(0);
    function enhanceHeight(){
        setH(h+30);
    }
    function decreaseHeight(){
        setH(h-30);
    }
    function enhanceWidth(){
        setW(w+30);
    }
    function rotateImage(){

    }
    function changeColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function rotate(){
        setRotate();
    }
    return(
        <div style={{background: "lightpink", height: "100vh",alignItems: 'center',display:'flex',flexDirection: 'column',justifyContent: 'center'}}>
            <div style={{padding: "20px",height: '400px', width: '400px', border: '2px solid red', marginLeft:'200px',objectFit: 'cover',backgroundColor:`RGB(${red},${green},${blue})`}} >
                <img src={bag} height={h} width={w} alt="" />
                <div style={{display: 'flex',flexDirection:'column',gap: '10px'}}>
                <button style={{padding: '4px',fontWeight: "bold",cursor: "pointer"}} onClick={enhanceHeight}>Enhance Height</button>
                <button style={{padding: '4px',fontWeight: "bold",cursor: "pointer"}} onClick={decreaseHeight}>Decrease Height</button>
                <button style={{padding: '4px',fontWeight: "bold",cursor: "pointer"}} onClick={enhanceWidth}>Enhance Width</button>
                <button style={{padding: '4px',fontWeight: "bold",cursor: "pointer"}} onClick={rotateImage}>Rotate Image</button>
                <button style={{padding: '4px',fontWeight: "bold",cursor: "pointer"}} onClick={changeColor}>Change Color</button>
            </div></div>
            
        </div>
    )
}

export default ImageManipulation;