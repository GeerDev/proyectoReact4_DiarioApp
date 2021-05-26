import React from 'react'
import { DiarioEntry } from './DiarioEntry';
import { useSelector } from 'react-redux';

export const DiarioEntries = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => (
                    <DiarioEntry 
                    key={ note.id } 
                    { ...note }
                    />
                ))
            }

        </div>
    )
}