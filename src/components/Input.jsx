const Input = ({ label, invalid, ...props }) => {
  return (
    <p>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-stone-300">
        {label}
      </label>
      <input
        className="w-full rounded border bg-stone-300 px-3 py-2 leading-tight text-gray-700 shadow"
        {...props}
      />
    </p>
  );
};

export default Input;
