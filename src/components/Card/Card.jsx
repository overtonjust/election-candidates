import './Card.scss';

const Card = (props) => {
  const {name} = props;
 

  return (
    <div className='card'>
      <img className='card__img' src="../src/assets/person.jpg" alt="stock photo" />
      <p className='card__name'>{name}</p>
    </div>
  )
}

export default Card