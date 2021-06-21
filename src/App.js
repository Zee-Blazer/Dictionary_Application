import React, { useState } from 'react';
import './App.css';

import JSON from './db.json';

import SearchIcon from '@material-ui/icons/Search';

import Display from './Components/Display/display';

function App() {

  const [inputVal, setinputVal] = useState("");
  let [control, setControl] = useState();
  let [ display, setDisplay ] = useState();
  let data = JSON;

  const typeChange = (e) => {
    
    setinputVal(e.target.value);
    
    let filtered = data.filter( item => {
      return item.title.indexOf(inputVal) > -1
    } );
    setControl(filtered)

  }

  const create = (item) => {
    setDisplay(item);
    setinputVal(item.title);
    setControl([]);
  }

  const searchButton = () => {
    setDisplay(control[0]);
    setControl([])
  }

  return (
    <div className="App">
      <h1 className="dic__name">Dictionary</h1>

      <div className="search__bar">
        <div>
          <SearchIcon />
          <input placeholder="Search Word..."
            value={ inputVal }
            onChange={ typeChange }
          />
          <button
            onClick={ searchButton }
          >Search</button>
        </div>

        <div className="item__list">
          {
            inputVal.length > 1 ?
            control.map( (item, i) => (
              <div key={i} onClick={ () => create(item) }>
                {item.title}
              </div>
            ) ) : null
          }
        </div>
      </div>

      

      <Display data={ display }/>
    
    </div>
  );
}

export default App;
