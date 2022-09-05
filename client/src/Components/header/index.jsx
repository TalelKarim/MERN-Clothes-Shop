import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky} from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

import logo from '../../Assets/logo.png'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './style.css'

const HeaderContainer = styled.div`
height: 150px;
background-color: #15161D;
color: #fff;
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
export default function Header() {
  return (
     <HeaderContainer>
          <div className="top-header">
              <span className="telephone">
              <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faPhone}

                       />
                +216 29189298
                 </span>

              <span className="chat">
              <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faComment}

                       />
                
                Live Chat</span>
              <span className="Articles">
              <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faNoteSticky}

                       />
                Articles</span>
              <span className="help">
              <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faCircleInfo}

                       />Help</span>
          </div>

          <div className="middle-header">
          <span class="title"> <span>Z</span>A<span>R</span>A </span>
              
                <InputGroup className="col-6">
          <FormControl
            placeholder="What are you shopping for ?"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

                <div className="pro">
                  <span className="areyou">Are you pro ?</span>
                  <span className="pricing">Get <b>PRO</b> pricing</span>
                </div>
  
                <span className="panier">
                   <FontAwesomeIcon 
                        className='carticon'
                         icon={faCartShopping}
                         />
                         Cart
                </span>

                <span className="signup">
                  <FontAwesomeIcon 
                        className='signupicon'
                        icon={faUserPlus}
                         />
                  <StyledLink to='/Signup'>Sign Up</StyledLink>
                </span>
                <span className="login">
                  <FontAwesomeIcon 
                        className='loginicon'
                        icon={faRightToBracket}
                        />
                  <StyledLink to='/login'> Sign In</StyledLink>
                </span>
            

          </div>

     </HeaderContainer>
  )
}
