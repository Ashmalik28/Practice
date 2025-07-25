export const Input = ({
    onClick,
    placeholder,
    type
}) => {
     return <span onClick={onClick} className={`p-8 rounded-2xl text-4xl px-2 py-2
    text-white cursor-pointer bg-blue-500`}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none
        " ></input>
    </span> 

}