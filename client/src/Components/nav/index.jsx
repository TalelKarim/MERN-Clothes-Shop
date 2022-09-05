import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

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
      color: #fff;
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

  return (
     <NavContainer>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"
             style={{
              color: 'black',
              backgroundColor:'transparent',
              border: '1px solid black'
            }}>
        Man
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login">Shirts</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Trousers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Formal Shoes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sport Shoes</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"
             style={{
              color: 'black',
              backgroundColor:'transparent',
              border: '1px solid black'
            }}>
        Woman
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Shoes</Dropdown.Item> 
        <Dropdown.Item href="#/action-1">Trousers</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Shirts</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Robes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
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
        <Dropdown.Item href="#/action-1">Shoes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Shirts</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Trousers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
    <button 
      className='btn btn-success '
      onClick={navigateToAdd}
      style={{
        position:"relative",
        marginRight:"-150px",
        marginLeft: "100px"
      }}
      type='submit'
       id="submit">
        Add your own item
     </button>  
     </NavContainer>
  )
}
