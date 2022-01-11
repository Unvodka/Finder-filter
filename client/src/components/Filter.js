import { v4 as uuidv4 } from 'uuid';

const Filter = ({onSelect, items, selected}) => {

  return (
    <ul>
      {items
        .map(item => {
          return (
            <li className={selected === item.toLowerCase() ? "list active" : "list"} onClick={(e) => {
              onSelect(e, item)
            }} key={uuidv4()}>{item}</li>
          )
        })
      }
    </ul>
  )
}
export default Filter;