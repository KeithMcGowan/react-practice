// import "./ExpensesList.css";
// import ExpenseItem from "./ExpenseItem";

// const ExpensesList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
//   }

//   return (
//     <ul className="expenses-list">
//       {props.items.map((expense) => (
//         <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//           key={expense.id}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ExpensesList;

import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;