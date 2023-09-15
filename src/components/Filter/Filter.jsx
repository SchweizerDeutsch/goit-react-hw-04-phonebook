import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
