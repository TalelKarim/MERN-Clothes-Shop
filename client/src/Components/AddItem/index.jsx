import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {createClothesAct} from '../../actions/Man/Clothes'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const Formulaire = styled.form`
width: 25%;
height: 650px;
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
   const [nom ,setNom ] = useState("");
   const [size,setSize] = useState("");
   const [actualPrice, setActualPrice] = useState(0);
   const [oldPrice, setOldPrice] = useState(0);
   const [file, setFile] = useState(null);
   const  [info, setInfo] = useState("")
   const [feedback, setFeedback] = useState("")
   
  
   const navigate = useNavigate()
   const dispatch =  useDispatch();
  
   const sample = {
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "lol lol baby",
    Size: " L M S",
    actualPrice: "50 DT",
    oldPrice:"72 DT",
     Likes: 6,
     info:"ffff",
     feedback: "ddff"
 }

   function handleSubmit(e){
    e.preventDefault();
    // create the photo
    const config = {

      headers: {

        'content-type': 'multipart/form-data',

      },

    };
       const data = new FormData()
       data.append('name', nom)
       data.append('Size', size)
       data.append('actualPrice', actualPrice)
       data.append('oldPrice', oldPrice)
       data.append("Likes", 0)
       data.append("info", info)
       data.append("feedback", feedback)
       data.append('photo', file)
  
    //    data.append('photo', File)
      //  data.append('imageUrl', "https://images.unsplash.com/flagged/photo-1596479042555-9265a7fa7983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
      //  dispatch(createClothesAct(data))
        dispatch(createClothesAct(data))
         .then(() => {
            console.log('Clothes created successfully')
          })
          .catch((error) => {
             console.log(error)
          })
          

        toast('Hello Geeks')
        navigate('/')  

        }





  return (
     <Formulaire className='border rounded' onSubmit={handleSubmit}>
        <input  
              className="form-control input-sm"
              placeholder='Category and color '
              type="text"
              onChange={(e) => {
                  setNom(e.target.value)}
              }
              required/>

        <input   
              className="form-control"
              placeholder='Available sizes' 
              type="text"
              onChange={(e) => {
                setSize(e.target.value)}
            }
              required/>

        <input   
              className="form-control"
              placeholder='Actual price'
              type="number"
              onChange={(e) => {
                setActualPrice(e.target.value)}
            }
              required/>

        <input   
              type="number"
              className="form-control"
              placeholder='Old price'
              onChange={(e) => {
                setOldPrice(e.target.value)}
            }
            />
          <div className="gender">
             <span className="type_gender">For who ?</span>
             <div className="checks">
               <div class="form-check">        
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                 <label class="form-check-label" for="flexCheckDefault">
                  Man   </label>
                </div>

               <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                 <label class="form-check-label" for="flexCheckChecked">
                   Woman
                 </label>
              </div>

              <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                 <label class="form-check-label" for="flexCheckChecked">
                   Kids
                 </label>
              </div> 

             </div>
       
            </div>

          <div className="type">
          <span className="type_item">Select type:</span> 

          <div className="checks">
              <div class="form-check">        
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label class="form-check-label" for="flexCheckDefault">
                 Shirts   </label>
                </div>

               <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                 <label class="form-check-label" for="flexCheckChecked">
                   Trousers
                 </label>
              </div>
              
              <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                 <label class="form-check-label" for="flexCheckChecked">
                   Shoes
                 </label>
              </div> 

              <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                 <label class="form-check-label" for="flexCheckChecked">
                   Robes
                 </label>
              </div> 
            </div> 



            </div>    

        <textarea 
              className="form-control"
              placeholder='Tell us something about your item'
              onChange={(e) => {
                setInfo(e.target.value)}
            } 
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
             onChange={(e) => {
                setFile(e.target.files[0])
             }}
             style={{
                fontSize: "13px",
                marginTop:"10px"
            }}

             />

       </Buttons> 

       <textarea 
            className="form-control"
            placeholder='Give us a feedback'
            onChange={(e) => {
                setFeedback(e.target.value)}
            } 
        />

         <button className='btn btn-success'
          type='submit'
           id="submit">
            Submit
         </button>
        
     </Formulaire>
  )
}
