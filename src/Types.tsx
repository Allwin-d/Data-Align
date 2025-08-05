export type Details = {
 ClientName : string,
 Status : string,
 Description:string,
 Address:string
}

export type  InputFieldProps = {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}