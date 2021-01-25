import bellFill from '../../assets/icon/bell-fill-white.svg'
import tagFill from '../../assets/icon/tag-fill-white.svg'
import starFill from '../../assets/icon/star-fill-white.svg'
import bagBlue from '../../assets/icon/money-bag-blue.svg'
import cardBlue from '../../assets/icon/credit-card-blue.svg'

import {
  Card,
  CardTitle,
  CardText,
  Button, 
} from 'reactstrap'

function Nav () {
  return (
    <nav className="p-3 d-flex align-items-center position-relative">
      <div className="link-wrapper w-100 d-flex">
        <div className="link-item d-flex flex-column">
          <img src={ starFill } alt="startFill"/>
          <span className="font-weight-bold text-white">Crear logo</span>
        </div>
        <div className="link-item d-flex flex-column">
          <img src={ tagFill } alt="tagFill"/>
          <span className="font-weight-bold text-white">Pagar servicio</span>
        </div>
        <div className="link-item d-flex flex-column">
          <img src={ bellFill } alt="bellFill"/>
          <span className="font-weight-bold text-white">Suscripción</span>
        </div>
      </div>
      <Card body className="p-3 position-absolute">
        <CardTitle tag="h5" className="mb-0 font-weight-bold">Tu próximo pago</CardTitle>
        <CardText className="font-weight-bold">$28,860.00</CardText>
        <div className="payment-data d-flex align-items-center justify-content-between">
          <p>Fecha de pago <br/> <b>16 Enero</b></p>
          <Button color="primary" className="text-uppercase">Pagar ahora</Button>
        </div>
        <div className="info-wrapper mt-2">
          <p className="info-item d-flex justify-content-between mb-0">
            <span><img src={ bagBlue } alt="bagBlue" className="pr-2"/> Mis logros</span><b>$27,260.00</b>
          </p>
          <p className="info-item d-flex justify-content-between mb-0">
            <span><img src={ cardBlue } alt="cardBlue" className="pr-2"/>Compras con TDC</span><b>$1,600.00</b>
          </p>
        </div>
      </Card>
    </nav>
  )
}

export default Nav;