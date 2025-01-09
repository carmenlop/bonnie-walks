'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import createWalk from "@/data/createWalk";
import getWalks from "@/data/getWalks";
import endWalk from "@/data/endWalk";

type Walk = {
  id: string,
  start: Date,
  end: Date | null,
  walk_total: number | null,
  history_total: number | null,
}

export default function Home() {
  const [photo, setPhoto] = useState<'/bonnie.png' | '/bonnie-reverse.png'>('/bonnie.png')

  const [allWalks, setAllWalks] = useState<Walk[]>([])
  const [totalTime, setTotalTime] = useState<string>('0h 0m')
  const [onWalk, setOnWalk] = useState<boolean>(false)

  const getAllWalks = async () => {
    const {data} = await getWalks()
    console.log(data, 'second')
    if (data) {
      setAllWalks(data)
    }
  }

  const startWalk = async () => {
    const {data} = await createWalk()
    if (data) {
      getAllWalks();
    }
  }

  const finishWalk = async () => {
    const {data} = await endWalk()
    if (data) {
      setOnWalk(false)
      getAllWalks()
    }
  }

  useEffect(() => {
    const total = allWalks[0]?.history_total ? allWalks[0]?.history_total : allWalks[1]?.history_total ? allWalks[1]?.history_total : 0
    const minutes = total === 0 ? 0 : total % 60;
    const hours = total === 0 ? 0 : (total / 60).toFixed()
    setTotalTime(`${hours}h ${minutes}m`)
    if (allWalks[0]?.end === null) {
      setOnWalk(true)
    }
  }, [allWalks])

  useEffect(() => {
    getAllWalks()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (photo === '/bonnie-reverse.png') {
        setPhoto('/bonnie.png')
      } else {
        setPhoto('/bonnie-reverse.png')
      }
    }, 700)
  }, [photo])
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-red-500">
      <div className="w-full flex flex-col gap-[12px] p-[16px]">
        <div className="text-white text-3xl font-bold flex justify-center w-full py-[24px]">Bonnie{"'"}s Walks</div>
        {onWalk ? 
          <div className="self-center flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[150px] h-[150px]">
              <div className="text-l">On Walk</div>
              <div onClick={() => finishWalk()} className="text-4xl font-bold">Finish</div>
          </div>
          :
          <div className="self-center flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[150px] h-[150px]">
              <div onClick={() => startWalk()} className="text-4xl font-bold">Start</div>
          </div>
        }
        <div className="flex flex-row justify-between items-center px-[16px]">
          <Image src={photo} width={150} height={150} alt="dog head" className="bg-red-600 rounded-full px-[30px] py-[15px]"/>
          <div className="flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[150px] h-[150px]">
            <div className="text-l">Total Time</div>
            <div className="text-2xl font-bold">{totalTime}</div>
          </div>
        </div>
        <table className="table-auto border-collapse border border-slate-400 mt-[50px]">
          <thead className="bg-red-600">
            <tr>
              <th className="border border-red-700 text-white py-[6px]">Date</th>
              <th className="border border-red-700 text-white py-[6px]">Start</th>
              <th className="border border-red-700 text-white py-[6px]">End</th>
              <th className="border border-red-700 text-white py-[6px]">Total</th>
            </tr>
          </thead>
          <tbody className="bg-red-400">
            {allWalks && allWalks.length > 0 && allWalks?.map((walk, index) => {
              const walkInfo = new Date(walk.start).toLocaleString("en-US", {
                timeZone: "America/Los_Angeles"
              })
              const comma = walkInfo.indexOf(',')
              const date = walkInfo.slice(0, comma)
              const time = walkInfo.slice(comma + 2)
              const endwalkInfo = walk.end ? new Date(walk.end).toLocaleString("en-US", {
                timeZone: "America/Los_Angeles"
              }) : 'N/A'
              const endcomma = endwalkInfo.indexOf(',')
              const endtime = endwalkInfo === 'N/A' ? 'N/A' : endwalkInfo.slice(endcomma + 2)
              return (
                <tr key={`walk-${index}`}>
                  <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">{date}</td>
                  <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">{time}</td>
                  <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">{endtime}</td>
                  <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">{walk.walk_total ? walk.walk_total : 'N/A'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
