export const TableRow = ({ personDetails }) => {
  return (
    <tr>
      <td>{personDetails.email}</td>
      <td>{personDetails.name}</td>
      <td>{personDetails.phone}</td>
      <td>{personDetails.country}</td>
      <td>{personDetails.alphanumeric}</td>
      <td></td>
    </tr>
  )
}