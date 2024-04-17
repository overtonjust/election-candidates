import './Card.scss';
import person from '../../assets/person.jpg'
const Card = (props) => {
  const {name} = props;
 

  return (
    <div className='card'>
      <img className='card__img' src={person} alt="stock photo" />
      <p className='card__name'>{name}</p>
    </div>
  )
}

export default Card