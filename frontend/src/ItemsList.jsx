
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
 
    axios.get('http://localhost:3000/api/items')
      .then(response => {
        setItems(response.data);  
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
