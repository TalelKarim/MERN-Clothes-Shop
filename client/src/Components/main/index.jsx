import React from 'react'
import styled from 'styled-components'
import Clothe from '../Clothe'
import { useSelector } from 'react-redux'
import { useState, useContext } from 'react'
import { ItemContext } from '../../Utils/context' 
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
 
const {item, setItem} = useContext(ItemContext)
  return (
    <>
        {item === "ManShirts" && <MainContainer>
           {
                    props.clothes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
         </MainContainer> }
   

        { item === "Sshoes" && <MainContainer>
              {
                    props.SShoes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

              { item === "Man_Trousers" && <MainContainer>
              {
                    props.Trousers.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "Fshoes" && <MainContainer>
              {
                    props.fShoes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "Woman_shoes" && <MainContainer>
              {
                    props.woman_shoes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "woman_trousers" && <MainContainer>
              {
                    props.woman_trousers.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "woman_shirts" && <MainContainer>
              {
                    props.woman_shirts.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "robes" && <MainContainer>
              {
                    props.Robes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item ==="kids_shoes" && <MainContainer>
              {
                    props.kids_shoes.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "kids_shirts" && <MainContainer>
              {
                    props.kids_shirts.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}

                   { item === "kids_trousers" && <MainContainer>
              {
                    props.kids_trousers.map((item) => {
                      return <Clothe
                          url = {item.imageUrl}
                          name = {item.name}
                          oldPrice = {item.oldPrice}
                          actualPrice = {item.actualPrice}
                          availableSizes = {item.Size} 
                          likes = {item.Likes}
                          imageUrl = {item.imageUrl}
                      /> 
                    })
              } 
              </MainContainer>}     
    </> 
    

    

      
  
           
  )
}
