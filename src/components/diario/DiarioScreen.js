import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
// import { NadaSeleccionado } from './NadaSeleccionado';

export const DiarioScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar />

            <main>

                {/* <NadaSeleccionado /> */}
                <NoteScreen />

            </main>

        </div>
    )
}
