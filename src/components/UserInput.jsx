export default function UserInput({ label, identifier, onChangeValue, value }) {
  return (
    <div>
      <label className="block mb-1 font-[sans-serif] text-sm font-bold uppercase">
        {label}
      </label>
      <input
        className="w-full p-2 border-2 border-[#76c0ae] rounded outline-none bg-transparent text-xl text-[#c2e9e0]"
        type="number"
        required
        value={value}
        onChange={(e) => onChangeValue(identifier, e.target.value)}
      />
    </div>
  );
}
