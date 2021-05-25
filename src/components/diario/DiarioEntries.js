import React from 'react'
import { DiarioEntry } from './DiarioEntry';

export const DiarioEntries = () => {

    const entries = [1,2,3,4,5];

    return (
        <div className="journal__entries">
            
            {
                entries.map( value => (
                    <DiarioEntry key={ value } />
                ))
            }

        </div>
    )
}