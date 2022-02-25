
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses=[
    {title:"Car",Date: new Date(2022,2,3),price:"$300"},
    {title:"Car",Date: new Date(2022,2,3),price:"$100"},
    {title:"Car",Date: new Date(2022,2,3),price:"$300"},
    {title:"Car",Date: new Date(2022,2,3),price:"$300"}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      Date={expenses[0].Date} 
      price={expenses[0].price}>

      </ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title} 
      Date={expenses[1].Date} 
      price={expenses[1].price}>

      </ExpenseItem>
      <ExpenseItem
      title={expenses[2].title} 
      Date={expenses[2].Date} 
      price={expenses[2].price}>
        
      </ExpenseItem>

      <ExpenseItem
      title={expenses[3].title} 
      Date={expenses[3].Date} 
      price={expenses[3].price}>
        
      </ExpenseItem>
    </div>
    
  )
}

export default App;
