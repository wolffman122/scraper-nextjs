import { ExpandableButton } from "./expandableButton";
import { TableRow } from "./tableRow";

export const TableSection = ({ personDetails, index }) => {
  return (
    <tbody>
      <tr>
        <td className='button-td'>
          <ExpandableButton />
        </td>
        <td>
          <b>Person: {index}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <TableRow personDetails={personDetails} />
    </tbody>
  );
}