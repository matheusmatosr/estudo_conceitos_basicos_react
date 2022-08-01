const AnotherComponent = () => {

    const handleClick = () => {
        console.log("Clicou!");
    };

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>click</button>
            <hr />
            <button onClick={() => console.log("teste")}>amem</button>
        </div>
    );
};

export default AnotherComponent;