import { Fragment } from "react";
import classes from './page.module.css';

function MeetUpDetails() {
    return (
        <Fragment>
            <section className={classes.detail}>
                <img src="https://www.pexels.com/photo/turned-on-imac-beside-macbook-on-table-39284/" alt="A first meetup" />
                <h1>A First meetup</h1>
                <address>some street 5, some city</address>
                <p>The meetup description</p>
            </section>
        </Fragment>
    );
}

export default MeetUpDetails;