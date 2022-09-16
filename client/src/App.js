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

//Man clothes
import {getClothesAct} from './actions/Man/Clothes'
import {getClothesActSshoes} from './actions/Man/sshoes'
import {getClothesActFshoes} from './actions/Man/fshoes'
import { getClothesActManTrousers } from './actions/Man/trousers'

//Woman Clothes
import { getClothesActWomanShoes } from './actions/Woman/shoes'
import { getClothesActWomanTrousers } from './actions/Woman/trousers'
import { getClothesActWomanShirts } from './actions/Woman/shirts'
import { getClothesActRobes } from './actions/Woman/robes'

//Kids Clothes
import {getClothesActKidsShirts} from './actions/Kids/shirts'
import {getClothesActKidsShoes} from './actions/Kids/shoes'
import {getClothesActKidsTrousers} from './actions/Kids//trousers'


import Pagination from './Components/Pagination'
import AddItem from './Components/AddItem'
import  {ItemProvider} from './Utils/context'
import { HomeProvider } from './Utils/context'
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
  const [postsPerPage] = useState(9);
  const [items, setItems] = useState('');

// Man 
  const clothes = useSelector((state) => {
    return state.clothes
 })

    useEffect(() => {
     dispatch(getClothesAct());
   }, [dispatch, clothes]) 

 const SShoes= useSelector((state) =>  {
   return state.sshoes
 })

 useEffect(() => {
   dispatch(getClothesActSshoes())
 }, [dispatch, SShoes])

 const fShoes= useSelector((state) =>  {
  return state.fshoes
})

useEffect(() => {
  dispatch(getClothesActFshoes())
}, [dispatch, fShoes])

const Trousers= useSelector((state) =>  {
  return state.man_trousers
})

useEffect(() => {
  dispatch(getClothesActManTrousers())
}, [dispatch, Trousers])


// Woman Clothes

const Robes = useSelector((state) => {
  return state.robes
})

  useEffect(() => {
   dispatch(getClothesActRobes());
 }, [dispatch,Robes]) 


const woman_shirts= useSelector((state) =>  {
 return state.woman_shirts
})

useEffect(() => {
 dispatch (getClothesActWomanShirts())
}, [dispatch, woman_shirts])


const woman_shoes = useSelector((state) => {
  return state.woman_shoes
}) 


useEffect(() => {
  dispatch(getClothesActWomanShoes());
}, [dispatch, woman_shoes])



const woman_trousers= useSelector((state) =>  {
return state.woman_trousers
})

useEffect(() => {
dispatch(getClothesActWomanTrousers())
}, [dispatch, woman_trousers])


// Kids Clothes

const kids_shoes = useSelector((state) => {
  return state.kids_shoes
}) 


useEffect(() => {
  dispatch(getClothesActKidsShoes());
}, [dispatch, kids_shoes])



const kids_trousers= useSelector((state) =>  {
return state.kids_trousers
})

useEffect(() => {
dispatch(getClothesActKidsTrousers())
}, [dispatch, kids_trousers])


const kids_shirts= useSelector((state) =>  {
  return state.kids_shirts
  })
  
  useEffect(() => {
  dispatch(getClothesActKidsShirts())
  }, [dispatch, kids_shirts])





  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClothes = clothes.slice(indexOfFirstPost, indexOfLastPost);

  
  
  

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
           <HomeProvider> 
              <ItemProvider>
                <Nav />
                  <Routes>
             
                          <Route path='/' element={<> <Main  
                                          SShoes={SShoes}
                                          clothes={currentClothes}
                                          fShoes= {fShoes}
                                          Trousers = {Trousers}
                                          Robes = {Robes}
                                          woman_shirts = {woman_shirts}
                                          woman_shoes = {woman_shoes}
                                          woman_trousers = {woman_trousers}
                                          kids_shoes = {kids_shoes}
                                          kids_trousers = {kids_trousers}
                                          kids_shirts = {kids_shirts}

                                          /> <Pagination        postsPerPage={postsPerPage}
                                                                                                    totalPosts={clothes.length}
                                                                                                    paginate={paginate} /> </> } /> 
                          <Route path='/Signup' element={ <Signup />} />
                          <Route path='/login' element={  <Login />  } />
                          <Route path='/add'  element={<AddItem /> } />

                  </Routes>
               </ItemProvider>
           </HomeProvider>
          
      
        </MainContainer>
     
      <Footer />
     </AppContainer>   
    

    </BrowserRouter>
  
   </>
  )
}
