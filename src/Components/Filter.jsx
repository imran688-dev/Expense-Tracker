
export default function Filter({ onSelectCategory }) {

  const categories = ["Utility", "Mango Bar", "Jusika Bazar", "Lut taraj", "Hatijil"];

  return (
    <>
      <select className="select select-info w-full max-w-xs focus:outline-none my-5" onChange={(e) => onSelectCategory(e.target.value)}>
        <option disabled selected>Select language</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

// 1:04: 24 / 1: 50: 56
