import { useEffect, useState } from "react";

export function useFetch(url , retryTime ){
    const [finalData , setfinalData] = useState();
    const [loading , setLoadng] = useState("true");

    async function getDetails(){
        setLoadng(true);
        const response = await fetch(url);
        const json = await response.json();
        setfinalData(json);
        setLoadng(false);
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        setInterval(getDetails , retryTime * 1000);

    }, [])
 

  return {finalData , loading} ;

}