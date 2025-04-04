import React, { useState, useEffect } from "react";
import { CiTempHigh } from "react-icons/ci";
import { FaTerminal, FaUser, FaWifi, FaPowerOff } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiTerminalFill } from "react-icons/pi";

export default function TopBar() {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memUsage, setMemUsage] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalCpu = setInterval(() => {
      const usageCpu = Math.floor(Math.random() * 100);
      setCpuUsage(usageCpu);
    }, 1600);

    return () => clearInterval(intervalCpu);
  }, []);

  useEffect(() => {
    const intervalMem = setInterval(() => {
      const usageMem = Math.floor(Math.random() * 100);
      setMemUsage(usageMem);
    }, 2000);

    return () => clearInterval(intervalMem);
  }, []);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalTime);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "short", month: "short", day: "numeric", 
      hour: "numeric", minute: "numeric", hour12: true
    }).replace(",", "");
  };

  return (
    <div className="flex items-center justify-between bg-black/50 text-white text-sm w-screen poppins py-1.5 px-2.5">
      <div className="flex items-center w-1/3">
        <p>Activities</p>
        <div className="flex items-center space-x-2 cursor-pointer">
          <PiTerminalFill className='size-5'/>
          <p className="flex items-center">Terminal <IoMdArrowDropdown className="size-6"/></p>
        </div>
      </div>
      <p className="w-1/3 text-center">{formatDate(currentTime)}</p>
      <div className="flex items-center justify-end w-1/3 gap-4">
        <p className="flex items-center gap-1.5"><CiTempHigh size={24} /> 43°C<p>|</p>48°C</p>
        <p className="w-35 flex gap-1.5"><div>CPU {cpuUsage}%</div><p>|</p><div>MEM {memUsage}%</div></p>
        <FaWifi />
        <FaUser />
        <FaPowerOff className="cursor-pointer" />
      </div>
    </div>
  );
}