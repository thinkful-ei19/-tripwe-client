import React from 'react';


export default function BudgetList(props) {
console.log(props, "Budget list")
    const budgets = props.budgets.transactions.map(transaction => {

      return (
          <tr className="" key={transaction.id}>
              <td className="">{transaction.amount}</td>
              <td className="">{transaction.description}</td>
          </tr>
      );
    });
return (
        <tbody>
            {budgets}
        </tbody>
  );
}
