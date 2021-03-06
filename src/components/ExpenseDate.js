import './ExpenseDate.css'

function ExpenseDate(props){
    const month=props.Date.toLocaleString('en-US',{month:'long'});
    const day=props.Date.toLocaleString('month',{month:'2-digit'});
    const year=props.Date.getFullYear();
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{day}</div>
        <div className="expense-date__day">{year}</div>
      </div>
    )
}


export default ExpenseDate;