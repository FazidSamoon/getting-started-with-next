import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <img className="w-full" src={props.meetupData.image} alt="Meetup Image" />
      <h1 className="text-2xl text-center">{props.meetupData.title}</h1>
      <address className="text-center">{props.meetupData.address}</address>
      <p className=" text-center">{props.meetupData.description}</p>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const collection = db.collection("meetups");
  const meetup = await collection.findOne({ _id: ObjectId(meetupId) });
  return {
    props: {
      meetupData: {
        image: meetup.image,
        id: meetupId,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
