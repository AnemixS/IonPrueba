import {
  Table
} from 'reactstrap'

function DataTable (props) {
  return (
    <main>
      <div className="transactions-wrapper">
        <h2 className="d-flex justify-content-between align-items-center mx-2 font-weight-bold">Tus movimientos <a href="">Ver todos</a></h2>
        <Table>
          <tbody>
            {
              props.transactions.map ( transaction => {
                let { img, alias, category, amount, date } = transaction
                return(
                  <tr>
                    <td>
                      <img src={ img } alt="imgService"/>
                    </td>
                    <td>
                      <p className="d-flex flex-column">
                        <span className="alias font-weight-bold">{ alias }</span>
                        <span className="category">{ category }</span>
                      </p>
                    </td>
                    <td>
                      <p className="d-flex flex-column">
                        <span className="date text-right">{ date }</span>
                        <span className="amount text-right font-weight-bold">{ amount }</span>
                      </p>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </main>
  )
}

export default DataTable;