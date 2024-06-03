interface AuthInputProps {
  label: any
  value: any
  onValueChange: (value: any)=> void
  type?: 'text' | 'email' | 'password'
  isRequired?: boolean
}

export default function AuthInput({ label, value, onValueChange, type='text', isRequired=false } : AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={(ev)=> onValueChange(ev.target.value)}
        required={isRequired}
        className={`
          px-4 py-3 bg-gray-200 border rounded-lg mt-2
          focus:bg-white  focus:border-blue-400 focus:outline-none 
        `}
      />
    </div>
  )
}