import React from 'react'
import styled from 'styled-components'
import Clothe from '../Clothe'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const MainContainer = styled.div`
 width: 100%;
 height : auto ;
 display:flex;
 flex-direction: row;
 justify-content:center;
 align-items:center;
 flex-wrap: wrap;
 padding: 60px 40px 0px 40px;
 `


export default function Main(props) {
 



  
  return (
         <MainContainer>
              {
                    props.clothes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                      /> 
                    })


              } 

           
         </MainContainer>
  )
}
