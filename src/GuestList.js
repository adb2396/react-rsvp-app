import React from 'react';
import propTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => 
        <ul>
        <PendingGuest name={props.pendingGuest} />
        { props.guests
                .filter( guest => !props.isFiltered || guest.isConfirmed)
                .map((guest, index) =>
                <Guest 
                    key={index} 
                    name={guest.name} 
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmationAt(index)}      
                    handleToggleEditing={() => props.toggleEditingAt(index)}
                    setName={text => props.setNameAt(text, index)}
                    handleRemove={() => props.removeGuestAt(index)}
                />
            )
        }
        </ul>

GuestList.propTypes = {
    guests: propTypes.array.isRequired,
    toggleConfirmationAt: propTypes.func.isRequired,
    toggleEditingAt: propTypes.func.isRequired,
    setNameAt: propTypes.func.isRequired,
    isFiltered: propTypes.bool.isRequired,
    removeGuestAt: propTypes.func.isRequired,
    pendingGuest: propTypes.string.isRequired
}


export default GuestList;