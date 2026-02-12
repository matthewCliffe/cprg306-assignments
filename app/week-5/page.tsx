import ItemList from "./item-list"
export default function Page() {
  return (
    <main className="bg-white">
      <h1 className="text-2xl font-bold mb-2 text-center text-black">Shopping List</h1>
      <ItemList />
    </main>
  );
}