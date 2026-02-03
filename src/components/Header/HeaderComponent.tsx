import { Link } from 'react-router'
import styles from './HeaderComponent.module.css'


export function HeaderComponent(){
    return(
        <header>
            <div className={styles.LogoContainer}>
                <span>React Challenger</span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/update">Update</Link></li>
                    <li><Link to="/delete">Delete</Link></li>
                </ul>
            </nav>
        </header>
    )
}