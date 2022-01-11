import './App.css';
import React, { useState } from 'react'
import Filter from './components/Filter'
import Images from './components/Images';
// import ProductsList from './components/ProductsList';
import ImagesList from './components/ImagesList';

function App() {
  const [state, setState] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  
  function handleChange(e) {
    setState("all")
    setSearchTerm(e.target.value)
  }

  return (
      <div className="App"> 
        <h1>Finder</h1>
        <section>
          <Filter 
              onSelect={(e, item) => {
                setState(item.toLowerCase())
              }} 
              items={["All", "Sport", "Animal", "Landscape", "Man", "Woman"]}
              selected={state}
          />
        
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search ..." className="input-search" />


          <Images images={ImagesList
            .filter((item) => {
              if ( state === "all") { return true }
              return item.category === state
            })
            .filter((item) => {
              if (item.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item
              } 
              return null
            })
          }/>

          {/* <ProductsList products={ProductsList.product}/> */}
        </section>
      </div>
  );
}

export default App;