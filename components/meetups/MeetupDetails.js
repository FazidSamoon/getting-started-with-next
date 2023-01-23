import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment >
      <img className="w-full" src={props.image} alt={props.title} />
      <h1 className="text-center">{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default MeetupDetails;
