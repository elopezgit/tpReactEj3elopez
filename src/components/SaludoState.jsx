import { useState } from "react";

const SaludoState = () => {


    const [saludoState,setSaludoState] = useState('');

    return (
        <section className="text-center">    
            <p>{saludoState}</p>
            <button className="btn btn-primary me-2" onClick={()=>setSaludoState(saludoState+'(from changed state)! ')}>Click Me</button>
        </section>
    );
};

export default SaludoState;