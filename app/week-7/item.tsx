type ItemProps = {
  name: string;
  quantity: number;
  category: string;
  onSelect?: () => void;
};

export default function Item({ name, quantity, category, onSelect }: ItemProps) {
  return (
    <main
      className="border-2 rounded shadow-md w-1/4 p-2 mb-3 mx-auto bg-teal-700 cursor-pointer"
      onClick={onSelect}
    >
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