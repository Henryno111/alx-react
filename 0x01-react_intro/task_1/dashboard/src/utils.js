import React from 'react';

const getFullYear = () => {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return <p>Holberton School</p>;
  } else {
    return <p>Holberton School main dashboard</p>
  }
}

export { getFullYear, getFooterCopy};