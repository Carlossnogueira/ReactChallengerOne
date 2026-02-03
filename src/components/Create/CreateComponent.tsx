import styles from './CreateComponent.module.css'

export function CreateComponent() {
    return (
        <div className={styles.Container}>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Your name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"  placeholder="Your email"/>
                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" name="birthdate" id="birthdate" />
                <button>Send</button>
            </form>
        </div>
    )
}