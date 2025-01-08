import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-red-500">
      <div className="w-full flex flex-col gap-[12px] p-[16px]">
        <div className="text-white text-3xl font-bold flex justify-center w-full py-[24px]">Bonnie{"'"}s Walks</div>
        <div className="flex flex-row justify-between items-center px-[16px]">
          <Image src='/bonnie.png' width={150} height={150} alt="dog head" className="bg-red-600 rounded-full px-[30px] py-[15px]"/>
          <div className="flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[150px] h-[150px]">
            <div className="text-l">Total Time</div>
            <div className="text-2xl font-bold">300h 39m</div>
          </div>
        </div>
        <div className="self-center flex flex-col justify-center items-center bg-red-600 text-white rounded-full w-[150px] h-[150px]">
            <div className="text-4xl font-bold">Start</div>
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
            <tr>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">1/6/25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">8:25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:00</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">35m</td>
            </tr>
            <tr>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">1/5/25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">8:40</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:15</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">35m</td>
            </tr>
            <tr>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">1/4/25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:00</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:15</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">15m</td>
            </tr>
            <tr>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">1/3/25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:00</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:15</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">15m</td>
            </tr>
            <tr>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">1/2/25</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:00</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">9:15</td>
              <td className="border border-red-700 text-center text-md text-white font-bold py-[6px]">15m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
