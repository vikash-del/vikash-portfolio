import classes from './footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div>
            <a href='https://www.linkedin.com/in/vikash-v-a5a548190/' target="_blank"><i className="fa fa-linkedin-square"></i></a>
            <a href='https://instagram.com/_vikash__v_?igshid=YmMyMTA2M2Y=' target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vikashvishal159@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a>
            </div>
            <div>
               <p>Built with next js</p>
            </div>
        </footer>
    )
}