import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react'
import { ItemContext } from '../../Utils/context' 
import { HomeContext } from '../../Utils/context';

const NavContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  padding: 10px 230px
  `

  const StyledLink = styled(Link)`
      padding: 5px;
      color: /mainfff;
      text-decoration: none;
      font-size: 15px;
      transition : 0.7s ease;
    &:hover{
      transform: scale(1.1);
      color: white;
  
    }
   `


export default function Nav() {
  const navigate = useNavigate()

  function navigateToAdd(){
    navigate('/add')
  }

  function navigateHome(){
    navigate('/')
  }
  function handleClick(){
    navigateToAdd()
    toggleDisplay()
  }

  function handleClick_two(){
    navigateHome()
    toggleDisplay()
  }

  const {item, setItem} = useContext(ItemContext)
  const {display, toggleDisplay} = useContext(HomeContext)
  return (
     <NavContainer>

    <Dropdown style={{ display : !display ? "none" : null}} >
      <Dropdown.Toggle variant="success" id="dropdown-basic"
             style={{
              color: 'black',
              backgroundColor:'transparent',
              border: '1px solid black'
            }}>
        Man
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#"     onClick={() => { setItem("ManShirts")}}>Shirts</Dropdown.Item>
        <Dropdown.Item href="#"     onClick={() => {setItem("Man_Trousers")}}>Trousers</Dropdown.Item>
        <Dropdown.Item href="#"     onClick={() => {setItem("Fshoes")}}>Formal Shoes</Dropdown.Item>
        <Dropdown.Item href="#"    onClick={() => {setItem("Sshoes")}}>Sport Shoes</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

    <Dropdown style={{ display : !display ? "none" : null}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic"
             style={{
              color: 'black',
              backgroundColor:'transparent',
              border: '1px solid black'
            }}>
        Woman
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#"    onClick={() => {setItem("Woman_shoes")}}>Shoes</Dropdown.Item> 
        <Dropdown.Item href="#"    onClick={() => {setItem("woman_trousers")}}>Trousers</Dropdown.Item>
        <Dropdown.Item href="#"    onClick={() => {setItem("woman_shirts")}}>Shirts</Dropdown.Item>
        <Dropdown.Item href="#"    onClick={() => {setItem("robes")}}>Robes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown style={{ display : !display ? "none" : null}}>
      <Dropdown.Toggle 
       style={{
         color: 'black',
         backgroundColor:'transparent',
         border: '1px solid black'
       }}
      variant="success" id="dropdown-basic">
          kids
              </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#"    onClick={() => {setItem("kids_shoes")}}>Shoes</Dropdown.Item>
        <Dropdown.Item href="#"    onClick={() => {setItem("kids_shirts")}}>Shirts</Dropdown.Item>
        <Dropdown.Item href="#"    onClick={() => {setItem("kids_trousers")}}>Trousers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
    <button 
      className='btn btn-success '
      onClick={handleClick}
      style={{
        position:"relative",
        marginRight:"-150px",
        marginLeft: "100px",
        display : !display ? "none": "block"

        
      }}
      type='submit'
       id="submit">
          Add your own item
     </button>  


     <button 
      className='btn btn-success '
      onClick={handleClick_two}
      style={{
        position:"relative",
        marginRight:"0%",
        z_index: "1000",
        display : display ? "none": "block"
        
      }}
      type='submit'
       id="submit">
          See items 
     </button> 
     </NavContainer>
  )
}
