const List = () => {
    const itens = [
        {
            id: 1,
            name: "Matheus"
        }, {
            id: 2,
            name: "João"
        }, {
            id: 3,
            name: "Livia"
        },
    ];

    return (
        <div>
            {itens.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    );
};

export default List;