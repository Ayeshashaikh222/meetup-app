import MeetUpDetails from "@/components/meetups/MeetUpDetails";

function MeetUpDetailsPage() {
    return <MeetUpDetails />;
}

export async function getStaticPaths() {
    const paths = meetupsData.map((meetup) => ({ params: { id: meetup.id } }));
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const meetupId = context.params.id;
    const meetup = meetupsData.find((meetup) => meetup.id === meetupId);

    return {
        props: {
            meetup,
        },
    };
}

export default MeetUpDetailsPage;