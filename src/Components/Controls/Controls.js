import { Link } from "react-router-dom";

import arrowLeft from '../../assets/icon/arrow-left.svg'

function Controls () {
  return (
    <div className="mt-3 back-wrapper d-flex justify-content-between align-items-center">
      <Link to="/home">
        <img src={ arrowLeft } alt="back"/>
      </Link>
      <Link to="/home" className="text-sky-blue text-uppercase">Cancelar</Link>
    </div>
  )
}

export default Controls;