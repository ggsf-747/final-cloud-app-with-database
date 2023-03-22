import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [selectedOptionText, setSelectedOptionText] = useState('');

    const {dispatch} = useContext(AppContext);

	const changeCurrency = (val)=>{

        dispatch({

            type: 'CHG_CURRENCY',

            payload: val,

        })

}
return (

    <div className='alert alert-secondary'>
     <span> Currency </span>

  <select name="currency" id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
  
    <option value="$">$ Dollar</option>

    <option value="£">£ Pound</option>

    <option value="€">€ Euro</option>

    <option value="₹">₹ Ruppee</option>

  </select>		

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