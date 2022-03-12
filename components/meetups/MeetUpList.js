import classes from './MeetUpList.module.css';
import MeetUp from './MeetUp';

const MeetUpList = (props) => {
  // get list of meetups from index
  const meetUps = props.meetups

  return <div>
    {meetUps.map(meetup => (
      <MeetUp key={meetup.id} meetup={meetup}/>
    ))}
  </div>
};

export default MeetUpList;