import MeetUpDetails from "@/components/meetups/MeetUpDetails";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';

function MeetUpDetailsPage(props) {


    return <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description"
                content={props.meetupData.description} />
        </Head>
        <MeetUpDetails title={props.meetupData.title}
            image={props.meetupData.image}
            address={props.meetupData.address}
            description={props.meetupData.description} />;
    </Fragment>
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://user:userpassword@cluster0.taya7uh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            },
        })),
    };
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://user:userpassword@cluster0.taya7uh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId), });

    client.close();

    // console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    }
}

// export async function getStaticPaths() {
//     const paths = meetupsData.map((meetup) => ({ params: { id: meetup.id } }));
//     return { paths, fallback: false };
// }

// export async function getStaticProps(context) {
//     const meetupId = context.params.id;
//     const meetup = meetupsData.find((meetup) => meetup.id === meetupId);

//     return {
//         props: {
//             meetup,
//         },
//     };
// }



export default MeetUpDetailsPage;