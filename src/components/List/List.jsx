
import Card from '../Card/Card';
import './List.scss';

const List = () => {
    const candidateNames = [
        "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
        "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
        "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
        "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler", 
        "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres", 
        "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
        "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
        "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
    ];


  return (
    <div className='list'>
      <div className="list__top-row">
        <p className='list__header'>People</p>  
      </div>
      <div className="list__card-row">
        {candidateNames.map((candidate, index) => {
          return (
            <>
              <Card className='list__card' name={candidate} key={index}/>    
            </>
          )
        })}
      </div>
    </div>
  )
}

export default List