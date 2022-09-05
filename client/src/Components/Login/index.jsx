import React from 'react'
import  styled  from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'

const Formulaire = styled.form`
width: 20%;
height:350px;
display:flex;
margin-top:90px;
flex-direction: column;
align-items:center;
padding-left:10px;
padding-right:12px;
padding-top:35px;
padding-bottom: 15px;
justify-content:space-between;
box-shadow: 0 5px 25px rgba(1 1 1/ 15% );

`

export default function Login() {

  let navigate = useNavigate()
  function goToSignUp(){
      navigate('/Signup')
  }

  return (
    <Formulaire className='border rounded'>

    <input   
          className="form-control"
          placeholder='Email' 
          type="email"
          required/>

    <input   
          className="form-control"
          placeholder='Password'
          type="password"
          required/>


     <button className='btn btn-success'
      type='submit'
       id="submit"
    >
        Sign In
     </button>
     <GoogleLogin
     />
     <span style ={{
          display: 'inline-block',
        //   paddingLeft: '33px',
          marginTop: '22px',
          fontSize: '13px',
          marginBottom: '-5px'
     }}> Don't have an account ?</span>
    
    <button 
      style={{
          backgroundColor: 'transparent',
          color: 'black',
          width:'120px',
      }}
      onClick={goToSignUp}
      className='btn btn-success'
      type='submit'
       id="submit">
        Sign Up
     </button>
     
  
 </Formulaire>
  )
}
