const DateNow = () => {
  const date = new Date();
  console.log(date)
  return (
    <div style={{ position: 'absolute', right: 10, top: 10, display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
      <p style={{ lineHeight: 0 }}>{`${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()}`}</p>
      <span style={{ lineHeight: 1 }}>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span>
    </div>
  )
}

export default DateNow