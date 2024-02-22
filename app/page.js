import Image from "next/image";
import styles from "./page.module.css";
import MeetupList from "@/components/meetups/MeetupList";
import layout from "@components/layout/Layout";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const Dummy_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbangalore&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjKwOD2vIQDFQAAAAAdAAAAABAq',
      address: 'some address 10,',
      description: 'this is second meetup!'
    },
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
      address: 'some address 10,',
      description: 'this is second meetup!'
    },
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
      address: 'some address 10,',
      description: 'this is second meetup!'
    },
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Freflection%2F&psig=AOvVaw1QNX4o6o0zBkgdluIfi-qj&ust=1708614098745000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjDsNXZvIQDFQAAAAAdAAAAABAE',
      address: 'some address 10,',
      description: 'this is second meetup!'
    },

  ];
  return <Layout><MeetupList meetups={Dummy_MEETUPS} /></Layout>
}
