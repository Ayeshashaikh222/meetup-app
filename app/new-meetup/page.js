"use client"
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
// import Layout from "@/components/layout/Layout";

function NewMeetupPage() {

    const router = useRouter();

    async function addMeetupHandler(eneterMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(eneterMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );

        const data = await response.json();

        console.log(data);

        router.push('/');
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
