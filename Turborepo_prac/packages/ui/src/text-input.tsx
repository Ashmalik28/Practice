interface PropType {
    placeholder : string;
}

export function TextInput({
    placeholder ,
}: PropType){
    return <input type="text" placeholder={placeholder} style={{
        padding : 10 ,
        margin : 10 , 
        borderColor : 'black',
        borderWidth : 1,
    }} />
}