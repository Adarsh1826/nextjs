export const SigninComponent = () => {
    return (
        <div>
          <div>admin</div>
              <div>Sigin</div>
              <div>
              <LabelInput label="Email" placeholder="email" />
              <LabelInput label="password" placeholder="password" />
              </div>
        </div>
        
      );
    } 
  interface LabelField{
    label:string,
    placeholder:string,
    type?:string
    
  }
  function LabelInput({label,placeholder}:LabelField){
      return <div>
        <input type="text" placeholder={placeholder} />{label}
    </div>
}