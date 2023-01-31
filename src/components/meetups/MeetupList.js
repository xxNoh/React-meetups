import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetups) => {
        return <MeetupItem
          key={meetups.id}
          id={meetups.id}
          title={meetups.title}
          image={meetups.image}
          description={meetups.description}
          address={meetups.address}
        />;
      })}
    </ul>
  );
}

export default MeetupList;
