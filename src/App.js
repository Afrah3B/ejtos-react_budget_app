import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Company's Budget Allocation</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
                    <div className='col-sm'>
                    <div className='alert alert-primary'>
                    <select id="inputGroupSelect02" style={{color:'white', background: '#7EC3B5'}} /*onChange={(event) => setAction(event.target.value)}*/>
						<option defaultValue value="$" name="Dollar">$ Dollar</option>
	        	        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
	        	        <option value="₹" name="Ruppee">₹ Ruppee</option>
				    </select>
		            </div></div>
				</div>
				<h3 className='mt-3'>Allocation</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Change allocation</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AllocationForm/>
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
