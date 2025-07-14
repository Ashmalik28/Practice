import { useRef, useState } from "react";
import { Button } from "./Buttons";


export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled , setdisabled] = useState(true);

    function checkAllFields(){
        if(
           ref1.current.value &&
           ref2.current.value &&
           ref3.current.value &&
           ref4.current.value &&
           ref5.current.value &&
           ref6.current.value
        ){
            setdisabled(false)
        }else {
            setdisabled(true)
        }
    }

    return <div className="flex-col justify-center">
        <div className="flex justify-center ">
        <SubOtpBox reference={ref1} onDone={()=>{
            ref2.current.focus();
        }} goBack={() => {
            ref1.current.focus();
        }} checKAll = {checkAllFields}/>
        <SubOtpBox reference={ref2} onDone={()=>{
            ref3.current.focus();
        }} goBack={() =>{
            ref1.current.focus();
        }} checKAll = {checkAllFields}/>
        <SubOtpBox reference={ref3} onDone={()=>{
            ref4.current.focus();
        }} goBack={() => {
            ref2.current.focus()
        }} checKAll = {checkAllFields}/>
        <SubOtpBox reference={ref4} onDone={()=>{
            ref5.current.focus();
        }} goBack={() => {
            ref3.current.focus();
        }}checKAll = {checkAllFields}/>
        <SubOtpBox reference={ref5} onDone={()=>{
            ref6.current.focus();
        }} goBack={() => {
            ref4.current.focus();
        }} checKAll = {checkAllFields} />
        <SubOtpBox reference={ref6} onDone={()=>{
            checkAllFields();
        }} goBack={() => {
            ref5.current.focus();
        }} checKAll = {checkAllFields}/>
        </div>
        <div className="flex justify-center m-5"><Button disabled={disabled}>Sign up</Button></div> 
    </div>
    

}

function SubOtpBox({
    checKAll ,
    reference , 
    onDone ,
    goBack
}){
    const [inputvalue , setinputvalue] = useState("");
    return <div>
        <input value={inputvalue} ref={reference} onKeyUp={(e) => {
            if(e.key == "Backspace"){
                goBack()
                setinputvalue("");
                checKAll();
            }
        }} onChange={(e) => {
            const val = e.target.value;
            if(val == "1" || val == "2" || val == "3" || val == "4" || val == "5"
                || val == "6" || val == "7" || val == "8" || val == "9"){
                    setinputvalue(val);
                    onDone();
                    checKAll();
                }else {
                   checKAll();
                }
        }} type="text" className="m-1 w-[40px] h-[50px] bg-blue-500 rounded-xl 
        outline-none px-4 text-white"> 
        </input>
    </div>

}