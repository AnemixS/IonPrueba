import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'

function Header (props) {
  const { name, avatarUrl, balance } = props
  return (
    <header className="position-relative background-gradient">
      <div className="header d-flex position-relative">
        <p className="mt-4 user-name mx-auto d-flex align-items-center font-weight-bold">Hola { name }
          <img className="img-user rounder-circle" src={ avatarUrl } alt=""/>
        </p>
      </div>
      <Card body className="p-3 position-absolute">
        <CardTitle tag="h5" className="text-uppercase mb-0 font-weight-bold">Saldo disponible</CardTitle>
        <CardText className="text-purple-light font-weight-bold">{ balance }</CardText>
      </Card>
    </header>
  )
}
export default Header;