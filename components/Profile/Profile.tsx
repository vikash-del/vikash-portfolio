import Image from 'next/image'

import classes from './profile.module.css';

export default function Profile() {
    return (
        <div className={classes.profile}>
            <div className={classes.profileCard}>
                <figure className={classes.swing}>
                <Image src='/images/pic.jpg'alt='profile pic' height='195' width='195' />
                <p className={`${classes.title} ${classes.text}`}>Vikash</p>
                <p className={`${classes.description} ${classes.text}`}>Software Engineer</p>
                </figure>
            </div>
            <div className={classes.about}>
                <p className={classes.greet}>Hi there!</p>
                <p className={classes.des}>I am Vikash. I am a passionate and dedicated software engineer. I love to explore new technologies. I enjoy tackling challenges and finding solutions. I started my career as an intern at Moonraft Innovation labs at 2022. Currently working at Moonraft Innovation labs as a Software Engineer. I invite you to explore my portfolio site and take a look at the projects and explorations I worked on. Feel free to reach out to me if you have any queries or concerns. I am excited in waiting for your response.</p>
            </div>
        </div>
    )
}