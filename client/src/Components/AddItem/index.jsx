import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios'

const Formulaire = styled.form`
width: 25%;
height: 550px;
display:flex;
margin-top:50px;
flex-direction: column;
align-items:center;
padding-left:10px;
padding-right:12px;
padding-top:35px;
padding-bottom: 15px;
justify-content:space-around;
box-shadow: 0 5px 25px rgba(1 1 1/ 15% );

`

const Buttons = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 justify-content: space-around;
 width: 100%;
 margin-top:20px;
 margin-bottom:20px;

`
export default function AddItem(props) {


   const [cardData, setCardData] = useState({
      identifier: `${Math.random() * 1000}`,
      Name: "",
      Age: "",
      Email:"",
      Talent:"",
      Something:"",
      imageUrl: "",
      imageLink:"",
      VideoUrl:"",
      VideoLink:"",
      FeedBack: ""

   })

   function handleSubmit(){
       console.log('Hello World !')
   }


   const dispatch =  useDispatch();



  return (
     <Formulaire className='border rounded' onSubmit={handleSubmit}>
        <input  
              className="form-control input-sm"
              placeholder='Category and color '
              type="text"
              value={cardData.Name}
              

              required/>

        <input   
              className="form-control"
              placeholder='Available sizes' 
              type="text"
              value={cardData.Age}
              required/>

        <input   
              className="form-control"
              placeholder='Actual price'
              type="number"
              value={cardData.Email}
              required/>

        <input   
              type="number"
              className="form-control"
              placeholder='Old price'
              value={cardData.Talent}
            />

        <textarea 
              className="form-control"
              placeholder='Tell us something about your item' 
              value={cardData.Something}
              required/>

       <Buttons>
           <label 
            style={{
                fontSize: "16px"
            }}
           >
               Upload a Photo : 
           </label>
           <input
             type='file'
             className='photo2'
             placeholder="upload your photo"
             style={{
                fontSize: "13px",
                marginTop:"10px"
            }}
             value={cardData.Photo}
             />

       </Buttons> 

       <textarea 
            className="form-control"
            placeholder='Give us a feedback'
            value={cardData.FeedBack}
        />

         <button className='btn btn-success'
          type='submit'
           id="submit">
            Submit
         </button>
        
     </Formulaire>
  )
}
