import React from 'react';
import propTypes from 'prop-types';
import GustName from './GuestName';

const Guest = props => 
    <li>
        <GustName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </GustName>
        <label>
            <input 
                type="checkbox" 
                checked={props.isConfirmed} 
                onChange={props.handleConfirmation}
            /> Confirmed
        </label>
        <button onClick={props.handleToggleEditing}>
            { props.isEditing ? "save" : "edit" }
        </button>
        <button onClick={props.handleRemove}>remove</button>
    </li>;

Guest.propTypes = {
    name: propTypes.string.isRequired,
    isConfirmed: propTypes.bool.isRequired,
    isEditing: propTypes.bool.isRequired,
    handleConfirmation: propTypes.func.isRequired,
    handleToggleEditing: propTypes.func.isRequired,
    setName: propTypes.func.isRequired,
    handleRemove: propTypes.func.isRequired
}


export default Guest;