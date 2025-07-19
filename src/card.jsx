import './App.css'

function Card(props) {
  return (
    <>
    <div className='card'>
    <h2 className='emoji-name , dynapuff-small'>{props.name}</h2>

    <img src={props.image} alt="" />

    <h3 className='detail , dynapuff-small'>{props.details}</h3>
    </div>
    </>
  )
}

export default Card