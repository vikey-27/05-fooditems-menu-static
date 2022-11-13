import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map((item)=>item.category))];
console.log(allCategories);

function App() {

  const[menuItems,setmenuItems]=useState(items);
  const[categories,setCategories]=useState(allCategories);


  const filterItems=(category)=>{
    if(category==='all')
    {
      setmenuItems(items);
      return;
    }

    const newItems=items.filter((item)=> item.category===category);
    setmenuItems(newItems);

  };


  return <main>
    <section className='container'>
      <h2>our menu</h2>
      <div className='underline'></div>
      <div>
        <Categories filterItems={filterItems} categoryList={categories} />
        <Menu items= {menuItems}/>
       </div>

    </section>
  </main>;
}

export default App;
