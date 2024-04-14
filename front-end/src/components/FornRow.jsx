const FormRow = ({ type, name, value, handleChange, labelText, placeholder }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-sm mb-2 capitalize'>
        {labelText || name}
      </label>
      <input
      placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none'
      />
    </div>
  );
};

export default FormRow;
