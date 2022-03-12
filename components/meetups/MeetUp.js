import classes from "./MeetUp.module.css";
import Card from "../ui/Card";

const MeetUp = (props) => {

  const meetUp = props.meetup

  return (
    <Card className={classes.meetUpCard}>
      <img src={meetUp.image} className={classes.image} />
      <h1 className={classes.title}>{meetUp.title}</h1>
      <h2 className={classes.description}>{meetUp.description}</h2>
      <p className={classes.attendees}>Attendees: {meetUp.attendees}</p>
    </Card>
  );
};

export default MeetUp;
