export function Button({ children, ...props }) {
  return (
    <div className="flex justify-center items-center w-full">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" {...props}>
        {children}
      </button>
    </div>
  );
}