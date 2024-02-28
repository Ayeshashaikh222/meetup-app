import Image from "next/image";
import styles from "./page.module.css";
import MeetupList from "@/components/meetups/MeetupList";
import layout from "@components/layout/Layout";
import Layout from "@/components/layout/Layout";
import { MongoClient } from "mongodb";


// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://www.pexels.com/photo/three-white-and-black-scrabble-tiles-on-brown-wooden-surface-270637/',
//     address: 'some address 10,',
//     description: 'this is second meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'A First Meetup',
//     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
//     address: 'some address 10,',
//     description: 'this is second meetup!'
//   },
//   {
//     id: 'm3',
//     title: 'A First Meetup',
//     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
//     address: 'some address 10,',
//     description: 'this is second meetup!'
//   },
//   {
//     id: 'm4',
//     title: 'A First Meetup',
//     image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
//     address: 'some address 10,',
//     description: 'this is second meetup!'
//   },

// ];

export default function Home(props) {

  return <MeetupList meetups={props.meetups} />


}

// export async function getServersideProps(context){
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

// 
// return {
//         props: {
//             Meetups: Dummy_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
  //fetch data from an ApI
  const client = await MongoClient.connect('mongodb+srv://user:userpassword@cluster0.taya7uh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray(); // which return all the content from the database

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image
      }))
    },
    revalidate: 1
  };
}


