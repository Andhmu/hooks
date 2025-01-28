import React from 'react';
import './Reactive.css';

export default function TaskTwo() {
  const forceUpdate = useForceUpdate();

  return (
    <div className="update-component-container">
      <button onClick={forceUpdate}>Обновить компонент</button>
      <Root />
    </div>
  );
}

const Root = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="form-wrapper">
      Введенное значение: {inputValue}
      <Input onChange={handleInputChange} />
    </form>
  );
};

const Input = ({ onChange }) => {
  return (
    <div className="input-wrapper">
      <input type="text" name="value" onChange={onChange} />
    </div>
  );
};

function useForceUpdate() {
  const [, setUpdateCount] = React.useState(0);
  return () => {
    setUpdateCount((prevCount) => prevCount + 1);
  };
}