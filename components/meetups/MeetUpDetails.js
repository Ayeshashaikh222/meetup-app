import { Fragment } from 'react';
import classes from './page.module.css';

function MeetUpDetails(props) {
    const { meetup } = props;

    return (
        <Fragment>
            <section className={classes.detail}>
                <img src="https://www.pexels.com/photo/turned-on-imac-beside-macbook-on-table-39284/" alt={meetup.title} />
                <h1>{meetup.title}</h1>
                <address>{meetup.address}</address>
                <p>{meetup.description}</p>
            </section>
        </Fragment>
    );
}

export default MeetUpDetails;