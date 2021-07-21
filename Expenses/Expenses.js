import React , {useState} from 'react';


import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectYear)=> {
        setFilterYear(selectYear);
    };
    const filterExpenses= props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filterYear;
    });

  
    
    
return (
    <div>
    
    
<Card className='expenses'>
<ExpensesFilter 
select= {filterYear}
 onChangeFilter={filterChangeHandler}
     />
     <ExpensesChart expenses= {filterExpenses}/>
     <ExpensesList items ={filterExpenses}/>


</Card>  
</div>
);
};

export default Expenses;