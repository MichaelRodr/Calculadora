import {useState} from 'react';
import './App.css';
import freecodecamp from './assets/images/freecodecamp.png';

import Display from './components/Display';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';

import {evaluate} from 'mathjs';

function App() {
	const [input, setInput] = useState(' ');

	const handleClick = (value) => {
		return setInput(input.concat(value));
	};
	const handleClear = () => {
		return setInput(' ');
	};
	const handleResult = () => {
		if (input) {
			return setInput(evaluate(input));
		} else {
			return setInput(' '), alert('Please enter a valid expression.');
		}
	};

	return (
		<div className="App">
			<div className="content-logo">
				<img className="logo" src={freecodecamp} alt="logo free code camp" />
			</div>
			<div className="calculator">
				<Display input={input} />
				<div className="row">
					<Button handleClick={handleClick}>1</Button>
					<Button handleClick={handleClick}>2</Button>
					<Button handleClick={handleClick}>3</Button>
					<Button handleClick={handleClick}>+</Button>
				</div>
				<div className="row">
					<Button handleClick={handleClick}>4</Button>
					<Button handleClick={handleClick}>5</Button>
					<Button handleClick={handleClick}>6</Button>
					<Button handleClick={handleClick}>-</Button>
				</div>
				<div className="row">
					<Button handleClick={handleClick}>7</Button>
					<Button handleClick={handleClick}>8</Button>
					<Button handleClick={handleClick}>9</Button>
					<Button handleClick={handleClick}>*</Button>
				</div>
				<div className="row">
					<Button handleClick={handleResult}>=</Button>
					<Button handleClick={handleClick}>0</Button>
					<Button handleClick={handleClick}>.</Button>
					<Button handleClick={handleClick}>/</Button>
				</div>
				<div className="row">
					<ButtonClear handleClick={handleClear} />
				</div>
			</div>
		</div>
	);
}

export default App;
