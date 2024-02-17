import { useForm } from "react-hook-form"

export default function ExpenseForm({ addExpense }) {

  const categories = ["Utility", "Mango Bar", "Jusika Bazar", "Lut taraj", "Hatijil", "Tour"];

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const submitData = (data) => {
  //   addExpense(data);
  //   reset();
  // }

  const submitData = (data) => {
    addExpense(data);
    reset().then(() => {
      // Optional: You can perform additional actions after the form is reset.
    });
  }



  return (
    <>
      <div className="text-3xl mb-4 font-bold">
        Track Expenses🚛
      </div>
      <form onSubmit={handleSubmit((data) => submitData(data))}>
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs"
          {...register("description", { required: true, minLength: 6, maxLength: 10 })}
        />
        {errors.description?.type === "required" && (
          <p className="text-red-500 px-1 pt-2">Field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-red-500 px-1 pt-2">Too short minimum character is 6.</p>
        )}
        <br />
        <input
          type="number"
          placeholder="$0"
          className="input input-bordered w-full max-w-xs my-4"
          {...register("amount")}
        />

        <br />
        <select className="select select-info w-full max-w-xs focus:outline-none" {...register("category")}>
          <option disabled selected>Choose Category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <br />
        <input type="submit" value={"Add Expenses"} className="btn btn-secondary max-w-xs w-full mt-2" />
      </form>
    </>
  )
}


