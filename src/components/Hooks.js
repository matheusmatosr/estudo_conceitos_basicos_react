import { useState, useEffect } from "react";

const Hooks = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    const change = () => {
        idade = 31;
        console.log(idade);
    };

    const changeNew = () => {
        setNovaIdade(45);
    };

    useEffect(() => {
        console.log("Testando!")
    });

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={change}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNew}>Mudar nova idade</button>
        </div>
    );
};

export default Hooks;