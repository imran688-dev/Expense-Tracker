export default function Expense({ expenses, onDelete }) {

  return (
    <div>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-secondary">
              <th>No.</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => (
                <tr key={expense.id} className="bg-base-200" >
                  <th>{expense.id}</th>
                  <td>{expense.category}</td>
                  <td> {expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>
                    <button className="btn btn-secondary" onClick={() => onDelete(expense.id)} >Remove</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr className="text-xl text-lime-400">
              <td></td>
              <td></td>
              <td>Total :</td>
              <td>
                ${expenses.reduce((previous, expense) => previous + expense.amount, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

{/* <tr className="text-xl text-lime-400">
  <td colSpan="3"></td>
  <td>
    Total: ${expenses.reduce((previous, expense) => previous + expense.amount, 0)}
  </td>
</tr> */}

// 43: 37 / 1: 50: 56