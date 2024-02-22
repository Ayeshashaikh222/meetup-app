"use client"
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
// import Layout from "@/components/layout/Layout";

function NewMeetupPage() {
    function addMeetupHandler(eneterMeetupData) {
        console.log(eneterMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
