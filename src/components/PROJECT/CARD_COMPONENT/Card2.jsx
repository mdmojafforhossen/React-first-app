import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'
  ]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
