import React, { useState } from 'react'

import Controls from '../../Components/Controls/Controls'

import {
  Container,
  Row,
  Col,
  Button, 
} from 'reactstrap'
import AmountSlider from '../../Components/AmountSlider/AmountSlider'

function Details () {
  const [ userData, setuserData ] = useState (
    {
      balance: "$1,499,970.00",
    }
  )
  return (
    <Container fluid className="background-gradient">
      <Row>
        <Col xs="12">
          <Controls/>
          <AmountSlider
            balance = { userData.balance }
          />
          <Button color="primary" className="btn-block text-uppercase my-4">Lo quiero</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Details