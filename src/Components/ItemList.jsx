
export default function ItemList() {
  return (
    <>
      <h2 className="text-3xl text-lime-400">Expense List</h2>
      <div className="border-2 mt-5 py-2 px-3 flex justify-between items-center rounded-full border-gray-400">
        <input className="focus:outline-none bg-transparent " type="text" placeholder="Add Items" />
        <button className="bg-secondary py-2 px-4 rounded-full text-white">Add</button>
      </div>
    </>
  )
}
