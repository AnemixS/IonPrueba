import React, { useState } from 'react'
import avatar from '../../assets/avatar.png'
import car from '../../assets/car.png'
import cfe from '../../assets/cfe.png'
import netflix from '../../assets/netflix.png'
import soriana from '../../assets/soriana.jpg'

import MainNav from '../../Components/MainNav/MainNav'
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'
import DataTable from '../../Components/DataTable/DataTable'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

function Home () {
  const [ userData, setuserData ] = useState (
    {
      name: "José",
      balance: "$1,499,970.00",
      avatarUrl: avatar
    }
  )

  const [ transactionsData, settransactionsData ] = useState ([
    {
      img: car,
      alias: "Auto",
      category: "Mis logros",
      amount: "$350,000.00",
      date: "2m"
    },
    {
      img: cfe,
      alias: "CFE",
      category: "Pago de servicio",
      amount: "$280.00",
      date: "ayer"
    },
    {
      img: netflix,
      alias: "Netflix",
      category: "Suscripciones",
      amount: "$140.00",
      date: "28 de dic"
    },{
      img: soriana,
      alias: "Despensa",
      category: "Casa",
      amount: "$5,500.00",
      date: "Ayer"
    }
  ])
  return (
    <>
      <MainNav/>
      <Container fluid>
        <Row>
          <Col xs="12" className="p-0 has-nav">
            <Header
              name = { userData.name }
              avatarUrl = { userData.avatarUrl }
              balance = { userData.balance }
            />
            <Nav/>
            <DataTable
              transactions = { transactionsData }
            />
          </Col>
        </Row>
      </Container> 
    </>
  )
}

export default Home