import Image from "next/image";

import Navigation from '../Navigation/Navigation';

import classes from './header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <p className={classes.logo}>Vikash portfolio</p>
            <div>
                <Navigation />
            </div>
        </header>
    )
}