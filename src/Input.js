import React from 'react';

export const Input = ({value, onChange, onEnter}) => {
  return (
    <textarea
      style={{padding: 12}}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => (e.keyCode === 13 ? onEnter(e.target.value) : null)}
    />
  );
};
