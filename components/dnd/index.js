import Homepage from "./pages/Homepage";
import { DndProvider } from "react-dnd";
import {HTML5Backend } from 'react-dnd-html5-backend';


const Dradndrop = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="" style={{ overflowX:"scroll"}}>
            <Homepage />

            </div>

        </DndProvider>
    );
};

export default Dradndrop;