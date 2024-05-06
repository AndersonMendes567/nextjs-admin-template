export default function Logo() {

  return (
    <div className={`
      w-12 h-12 bg-white rounded-full
      flex gap-1.5 justify-center items-center px-2
    `}>
      <div className={`w-1 hover:w-3 transition-all h-1/2 bg-green-600 rounded-l-md`}></div>
      <div className={`w-1 hover:w-3 transition-all h-2/3 bg-blue-600 rounded-md`}></div>
      <div className={`w-1 hover:w-3 transition-all h-1/2 bg-red-600 rounded-e-md`}></div>
    </div>
  )
}