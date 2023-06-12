import classes from './contact.module.css';

export default function Contact() {
    return (
        <div className={`${classes.contactContainer}`}>
            <div className={`${classes.contactText}`}>
               <p className={`${classes.head}`}>Let’s work together</p>
               <p className={`${classes.description}`}>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
            <div className={`${classes.inputContainer}`}>
                <input className={`${classes.inputfield}`} type='text' placeholder="Name"/>
                <input className={`${classes.inputfield}`} type='email' placeholder="Email"/>
                <textarea className={`${classes.inputfield} ${classes.descfield}`} placeholder="Type your message here"/>
                <button>Submit</button>
            </div>
        </div>
    )
}