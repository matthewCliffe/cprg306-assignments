
export default function Item({name, quantity, category}){
    return(
        <main className= "border-2 w-1/4 p-2 mb-3 mx-auto">
            <ul>
                <li>
                    <div>{name}</div>
                    <div>{quantity}</div>
                    <div>{category}</div>
                </li>
            </ul>
        </main>
    );
}