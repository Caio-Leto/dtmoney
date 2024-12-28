
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions }= useTransactions()
  

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transatcion => {
            return (
              <tr key={transatcion.id}>
                <td>{transatcion.title}</td>
                <td className={transatcion.type}>
                  {new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transatcion.amount)}
                </td>
                <td>{transatcion.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transatcion.createdAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}