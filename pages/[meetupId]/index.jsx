import { Fragment } from "react";

const MeetupDetails = () => {
  return (
    <Fragment>
      <img
        src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_"
        alt="Meetup Image"
      />
      <h1>Meetup Title</h1>
      <address>Meetup Address</address>
      <p>Meetup Description</p>
    </Fragment>
  );
};

export default MeetupDetails;
