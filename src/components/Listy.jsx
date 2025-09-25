export default function Listy() {
    const users = ['John', 'Jane', 'Jack', 'Jill'];
    
    const listItems = users.map((user, index) => {
        return <li key = {index}>{user}</li>
    });

    return (
        <ul>
            {listItems}
        </ul>
    );
}