import React, { useState } from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';

import {
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'

function AmountSlider (props) {
  const [ amount, setAmount ] = useState (350000)
  const [ months, setMonths ] = useState (60)

  const onChangeAmount = ( value ) => {
    setAmount( value)
  }

  const onChangeMonths = ( value ) => {
    setMonths( value )
  }

  const result = ((amount*1.166)/months).toFixed(2)

  let CurrencyFormat = require('react-currency-format');

  return (
    <div className="info-wrapper mt-4">
      <h3 className="font-weight-bold">Disposición</h3>
      <Card body className="p-4">
        <CardTitle tag="h5" className="font-weight-bold">Tienes disponible</CardTitle>
        <CardText className="text-purple-light font-weight-bold">{ props.balance}</CardText>
      </Card>
      <Form className="mt-3">
      <FormGroup>
        <Input type="text" name="alias" placeholder="Auto" />
      </FormGroup>
      <FormGroup>
        <CurrencyFormat className="form-control" value={amount} displayType={'input'} thousandSeparator={true} prefix={'$'}   onValueChange={ value => { onChangeAmount( value.value) } }/>
      </FormGroup>
    </Form>
    <p className="font-weight-bold">Selecciona tu plazo</p>
    <div className="slider-wrapper position-relative d-flex justify-content-center my-4">
      <CircularSlider
        label="."
        labelColor="#ecf7fb"
        valueColor="#000"
        valueFontSize="1.5rem"
        hideLabel="true"
        knobColor="#bb64c8"
        knobPosition="top"
        progressColorFrom="#783183"
        progressColorTo="#bb64c8"
        progressSize={24}
        trackColor="#e4f4f9"
        trackSize={24}
        dataIndex={59}
        min={"1"}
        max={"80"}
        knobDraggable={"true"}
        onChange={ value => { onChangeMonths(value) } }
      >
        <circularSvg width="36px" height="36px" viewBox="0 0 36 36"/>
      </CircularSlider>
      <div className="payment-data d-flex flex-column align-items-center  position-absolute">
        <p className="font-weight-bold monthly-payment">Tu pago mensual</p>
        <p className="font-weight-bold amount">${ result }</p>
        <p className="pb-4">
          <span className="font-weight-bold a-month">a</span><span className="font-weight-bold months">meses</span>
        </p>
        <p className="font-weight-bold text-sky-blue rate">Tasa de interés<br/>16.6%</p>
      </div>
    </div>
  </div>
  )
}

export default AmountSlider;