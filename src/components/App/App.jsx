
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

import { useState} from 'react';

import data from "../../values.json";

export default function App(){

  const [values, setValues]=useState(data);
  const [filter, setFilter] = useState('');

  
  const deleteValue = (valueId) => {
    setValues((prevValue) => {
      return prevValue.filter((value) => value.id !== valueId);
    });
  };

  const visibleValues = values.filter((value) =>
    value.name.toLowerCase().includes(filter.toLowerCase())
  );

  return(
    <div>
      <h1>Phonebook</h1>
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList values={visibleValues} onDelete={deleteValue}/>
    </div>

  )
}