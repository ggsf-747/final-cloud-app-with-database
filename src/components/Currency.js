import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [selectedOptionText, setSelectedOptionText] = useState('');

    const {currency, dispatch} = useContext(AppContext);

    const thisFunction = (val) => {
        console.log("val", val);
        return val
    };

	const changeCurrency = (val)=>{
        console.log("val", val);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        })
    };
    const currencyLabel = ()=> {
        switch(currency){
          case '$' :
            return '$ Dollar'
          case '£' :
            return '£ Pound'
          case '€' :
            return '€ Euro'
          case '₹' :
            return '₹ Ruppee'
          default:
            return ''
        }
      };

      return (
		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >Currency {currency}
      <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);

};
export default Currency;
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext'; 
// const Currency = () => {
//     const { expenses, budget } = useContext(AppContext);
//     const totalExpenses = expenses.reduce((total, item) => {
//         return (total = total + item.cost);
//     }, 0);
//     const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
//     return (
//         <div className={`alert ${alertType}`}>
//             <span>Currency: £{budget - totalExpenses}</span>
//         </div>
//     );
// };
// export default Currency;