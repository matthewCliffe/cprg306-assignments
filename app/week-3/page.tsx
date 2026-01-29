import ItemList from "./item-list"
export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-2 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}