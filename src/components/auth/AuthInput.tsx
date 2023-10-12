interface AuthInputProps {
  label: string
  value: any
  type: string
  required?: boolean
  changeValue: (newValue: any) => void
}


export default function AuthInput(props: AuthInputProps) {
  return (
    <div className={`flex flex-col `}>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.changeValue?.(e.target.value)}
        required={props.required}
      />
    </div>
  )
}
