export const Input=({type,id,name,value,onChange, className, placeholder, ref})=>{
    return(
        <div>
           <input
             type={type}
             name={name}
             id={id}
             value={value}
             onChange={onChange}
             className={className}
             placeholder={placeholder}
             ref={ref}
          />
        </div>
           
    )
}