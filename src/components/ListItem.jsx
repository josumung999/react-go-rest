import { Fragment } from "react"

const ListItem = (props) => {
  return (
    <Fragment>
      <tr key={props.id}>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td>
        <td>{props.status}</td>
      </tr>
    </Fragment>
  )
}

export default ListItem
