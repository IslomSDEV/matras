import React from 'react'
import Buyurtmalar from './Buyurtmalar/Buyurtmalar'
import Customers from './Customers/Customers'
import Layout from './Layouts/Layout'
import Mahsulotlar from './Mahsulotlar/Mahsulotlar'
import Manzil from './Manzil/Manzil'
import Texnologiyalar from './Texnologiyalar/Texnologiyalar'
import Toifalar from './Toifalar/Toifalar'
import "./Admin.css";
import { Route, Routes } from 'react-router-dom'

export default function Admin() {

  return (
    <>
        <Layout>
            <Routes>
              <Route path='/' element={ <Buyurtmalar /> } />
              <Route path='/customers' element={ <Customers /> } />
              <Route path='/toifalar' element={ <Toifalar /> } />
              <Route path='/mahsulotlar' element={ <Mahsulotlar /> } />
              <Route path='/texnologiyalar' element={ <Texnologiyalar /> } />
              <Route path='/manzil' element={ <Manzil /> } />
            </Routes>
        </Layout>
    </>
  )
}
