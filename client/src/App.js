import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import Footer from './Components/Footer'
import Head from './Components/header'
import Nav from './Components/nav'
import Main from './Components/main'
import {getClothesAct} from './actions/Man/Clothes'
import Pagination from './Components/Pagination'
import AddItem from './Components/AddItem'
import { getClothesActWomanShoes } from './actions/Woman/shoes'

const AppContainer = styled.div`
  height: auto;
  display:flex;
  flex-direction: column;
  width: 100vw;

`

const MainContainer = styled.div`
     width:100%;
     height:auto;
     display: flex;
     flex-direction: column;
     align-items : center;
     justify-content: center;
`

const AuthContainer = styled.div`
 width: 100%;
 height: auto;
 display:flex;
 justify-content: center;
 align-items: flex-start;
`


const GlobalStyle = createGlobalStyle`
*{
}
`


export default function App() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const clothes = useSelector((state) => {
    return state.clothes
 })

 const woman_shoes = useSelector((state) => {
  return state.woman_shoes
})

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClothes = clothes.slice(indexOfFirstPost, indexOfLastPost);

  
  
  useEffect(() => {
    dispatch(getClothesAct());
}, [dispatch, clothes])

// useEffect(() => {
//   dispatch(getClothesActWomanShoes());
// }, [dispatch, woman_shoes])

// console.log(woman_shoes)

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

   useEffect(() => {
    console.log(currentPage, indexOfFirstPost, indexOfLastPost)
   }, [currentPage])


  return (
    <>

    <BrowserRouter>
     <AppContainer>
        <GlobalStyle />
        <Head />
        <MainContainer>
            <Nav />
            <Routes>
                <Route path='/' element={<> <Main clothes={currentClothes}/> <Pagination        postsPerPage={postsPerPage}
                                                                                                 totalPosts={clothes.length}
                                                                                                 paginate={paginate} /> </> } /> 
                <Route path='/Signup' element={ <Signup />} />
                <Route path='/login' element={  <Login />  } />
                <Route path='/add'  element={<AddItem /> } />
           </Routes>
        </MainContainer>
     
      <Footer />
     </AppContainer>   
    

    </BrowserRouter>
  
   </>
  )
}
