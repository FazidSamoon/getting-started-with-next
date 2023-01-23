import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEEYUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png",
    address: "Some address 10, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps(context) {
  // fetch data from an API

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })) 
    },
    //update the static page every 10 seconds
    revalidate: 10,
  };
}

//get server side props is executed on the server and return the props to the component in each request

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEEYUPS,
//     },
//   };
// }

export default HomePage;
