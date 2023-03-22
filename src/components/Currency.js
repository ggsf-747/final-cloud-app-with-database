import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [selectedOptionText, setSelectedOptionText] = useState('');

    const {currency, dispatch} = useContext(AppContext);

	const changeCurrency = (val)=>{

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
        <span> Currency ({currency}) </span>
        <span>
          <select 
            className='btn btn-success dropdown-toggle'
            id='currency'
            onChange={(event) =>changeCurrency(event)}>Currency ({currency})
              <option defaultValue={currency}>Currency ({currency})</option>
              <option value='£'>£ Pound</option>
              <option value='$'>$ Dollar</option>
              <option value='€'>€ Euro</option>
              <option value='₹'>₹ Rupee</option>
          </select>
          </span>
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