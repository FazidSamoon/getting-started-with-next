import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <img
      className="w-full"
        src={props.meetupData.image}
        alt="Meetup Image"
      />
      <h1 className="text-2xl text-center">Meetup Title</h1>
      <address className="text-center">Meetup Address</address>
      <p className=" text-center">Meetup Description</p>
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
