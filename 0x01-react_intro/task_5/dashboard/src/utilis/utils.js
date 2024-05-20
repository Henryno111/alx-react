

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

const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};

export { getFullYear, getFooterCopy, getLatestNotification};