import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [selectedOptionText, setSelectedOptionText] = useState('');

    const {currency, dispatch} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const thisFunction = (val) => {
        console.log("val", val);
        return val
    };

	const setCurrencyHandler = (currency)=>{
        console.log("currency", currency);
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
          <div id="currency-drop" className="dropdown" style = {{cursor: 'pointer' }}>
              <button
              id = "currency-drop-button"
              className = "btn dropdown-toggle"
              type = "button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style = {{ backgroundColor: '#45e399', color: '#eee' }}
              onClick = {() => setIsOpen(!isOpen)}
            >
            Currency {'('}{currencyLabel()}{')'}
            </button>
            <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}>
                <li>
                    <button
                        className = "dropdown-item"
                        type = "button"
                        onClick = {() => setCurrencyHandler('$')}
                    >
                        $ Dollar
                    </button>
                </li>
                <li>
                    <button
                        className = "dropdown-item"
                        type = "button"
                        onClick = {() => setCurrencyHandler('£')}
                    >
                        £ Pound
                    </button>
                </li>
                <li>
                    <button
                        className = "dropdown-item"
                        type = "button"
                        onClick = {() => setCurrencyHandler('€')}
                    >
                        € Euro
                    </button>
                </li>
                <li>
                    <button
                        className = "dropdown-item"
                        type = "button"
                        onClick = {() => setCurrencyHandler('₹')}
                    >
                        ₹ Ruppee
                    </button>
                </li>
              </ul>                                

            </div>


	);
};
export default Currency;
