import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    function handleClick(event) {
        switch (event.target.textContent) {
            case 'Show all list':
                props.showAllUser();
                break;
            case 'Add the user':
                props.showAddUserForm();
                break;
            case 'Cancel':
                props.canceled();
                break;
            default:
                break;
        }
    }

    return (
        <div className='button'>
            <button className={styles.button} onClick={handleClick} onSubmit={props.collectInfo}>
                {props.value}
            </button>
        </div>
    );
}

export default Button;
