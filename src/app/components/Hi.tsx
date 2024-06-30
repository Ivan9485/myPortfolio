'use client'

import { useState, useEffect } from "react"


const languages = [ 'Hello, my name is', 'Hola, mi nombre es', 'Bonjour, je m\'appelle', '你好，我叫']



function Hi() {
  const [salute, setSalute] = useState(languages[0])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(()=> {
      setIndex((prevIndex)=>{
        const newIndex = prevIndex + 1 === languages.length ? 0 : prevIndex + 1;
        setSalute(languages[newIndex]);
        return newIndex;
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div key={salute} className="animate-fadein text-[#00BF63] ml-3" >{salute}</div>
  )
}
export default Hi