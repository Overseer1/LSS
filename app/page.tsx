'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [QKey, setQKey] = useState("");
  const [showModal, setShow] = useState(false);
  useEffect(() => {
    const letterKeyCheck = async() => {
      let hasItem = localStorage.getItem('letterKey') !== null;
      // Conditional logic based on hasItem
      if (hasItem) 
      {
        localStorage.removeItem('letterKey')
      } 
      else{
        console.log("eee");
      }
    }
    letterKeyCheck();
    if (QKey == 'KC')
      {
        
      }
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

    </div>
  );
}
