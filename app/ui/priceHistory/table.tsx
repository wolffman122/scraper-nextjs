import { info } from '@/app/data/info.js'
import { TableSection } from './tableSection'

type PersonDetails = {
  name: string,
  phone: string,
  email: string,
  alphanumeric: string
}

export const Table = () => {
  return (
    <table>
      <thead>
        <td>Email</td>
        <td>Name</td>
        <td>Phone</td>
        <td>Country</td>
        <td>Alphanumeric</td>
      </thead>
      {info.map((personDetails, index) => (
        <TableSection personDetails={personDetails} index={index} />

      ))}
    </table>
  )
}