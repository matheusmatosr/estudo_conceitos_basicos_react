import AnotherComponent from "./AnotherComponent";

function FirstComponent () {

    const name = "Matheus";

    return (
        <div className="firstcomponent">
            <p>Primeiro componente</p>
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    );
}

export default FirstComponent;