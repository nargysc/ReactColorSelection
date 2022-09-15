import colorNames from 'colornames';
const Input = ({colorValue, setColorValue, setHexValue,hexValue }) => {
  return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Choose your favorite color name: </label>
        <input 
        autoFocus
        type="text"
        placeholder='Add color name'
        required
        value={colorValue}
        onChange={(e) => { 
        setColorValue(e.target.value);
        setHexValue(colorNames(e.target.value)); 
      }}
        />
      </form>
  )
}

export default Input;
