
const Chart = ({amount, day, id}) => {
  
  const styles ={
    backgroundColor: (id === new Date().getDay()) ? "hsl(186, 34%, 60%)" : "#EC755D",
    height: `${Math.floor(amount * 2.88)/16}em`,
    width: "50px",
  }
  

  return (

    <div className='container'>
        <div style={styles}className="bar"></div>
        <p className="amount">{`$${amount}`}</p>
        <p className="day">{day}</p>
    </div>
    
  )
}


export default Chart;