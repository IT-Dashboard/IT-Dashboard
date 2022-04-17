import React, { useState } from "react";
import { FiLayers } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {
  AiOutlineStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
export const options = {
  responsive: true,
};
const labels = ["", "", "", "", "", "", ""];
const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [10, 20, 10, 45, 28, 20, 30, 45, 0],
      backgroundColor: "rgb(1,34,87)",
    },
    {
      label: "",
      data: [40, 25, 18, 30, 20, 29, 39, 35],
      backgroundColor: "rgb(76, 63, 145)",
    },
    {
      label: "",
      data: [17, 10, 17, 37, 12, 29, 38, 20, 0],
      backgroundColor: "rgb(92,122,234)",
    },
  ],
};

Chart.register(CategoryScale);
const Dashboard = () => {
  const [mainActive, setMainActive] = useState(true);
  const [time, setTime] = useState(1);
  const [bactive, setBactive] = useState(1);
  const [count, setCount] = useState(0);
  const issues = [
    {
      title: "Recent Issues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab magnam voluptas ipsum dignissimos rerum numquam autem ducimus, quas illum et quod nesciunt, a magni enim. Soluta nesciunt eius totam?",
    },
    {
      title: "Tools Widge B",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab magnam voluptas ipsum dignissimos rerum numquam autem ducimus, quas illum et quod nesciunt, a magni enim. Soluta nesciunt eius totam?",
    },
    {
      title: "Tools Widge C",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab magnam voluptas ipsum dignissimos rerum numquam autem ducimus, quas illum et quod nesciunt, a magni enim. Soluta nesciunt eius totam?",
    },
    {
      title: "Tools Widge D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab magnam voluptas ipsum dignissimos rerum numquam autem ducimus, quas illum et quod nesciunt, a magni enim. Soluta nesciunt eius totam?",
    },
    {
      title: "Tools Widge E",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab magnam voluptas ipsum dignissimos rerum numquam autem ducimus, quas illum et quod nesciunt, a magni enim. Soluta nesciunt eius totam?",
    },
  ];
  return (
    <div>
      <h1 className="text-gray-600  text-2xl font-medium">
        Welcome To Your IT Dashboard
      </h1>
      <div className="w-full mt-6 border rounded-md flex-col lg:flex-row gap-2 flex items-center justify-between">
        <div className="flex items-center gap-4 h-full px-3">
          <div
            onClick={() => setMainActive(true)}
            className={
              mainActive === true
                ? "border-b-2 border-pr text-pr py-2 cursor-pointer"
                : " text-gray-600 py-2 cursor-pointer"
            }
          >
            Usage
          </div>
          <div
            onClick={() => setMainActive(false)}
            className={
              mainActive === false
                ? "border-b-2 border-pr text-pr py-2 cursor-pointer"
                : " text-gray-600 py-2 cursor-pointer"
            }
          >
            Insights
          </div>
        </div>
        <div className="px-3 flex items-center">
          <div
            onClick={() => setTime(1)}
            className={
              time === 1
                ? "bg-pr text-white text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
                : " text-pr font-medium text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
            }
          >
            Days
          </div>
          <div
            onClick={() => setTime(2)}
            className={
              time === 2
                ? "bg-pr text-white text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
                : " text-pr font-medium text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
            }
          >
            Weeks
          </div>
          <div
            onClick={() => setTime(3)}
            className={
              time === 3
                ? "bg-pr text-white text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
                : " text-pr font-medium text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
            }
          >
            Months
          </div>
          <div
            onClick={() => setTime(4)}
            className={
              time === 4
                ? "bg-pr text-white text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
                : " text-pr font-medium text-xs px-3 cursor-pointer py-1 border border-pr font-medium"
            }
          >
            Years
          </div>
        </div>
      </div>
      <div className=" mt-6 bg-white shadow-md w-full">
        <div className=" border-b-2 pb-2">
          <Bar options={options} data={data} />
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4">
          <div
            onClick={() => setBactive(1)}
            className={
              bactive === 1
                ? "flex items-center justify-center text-pr border-b-2 border-pr py-2 flex-col cursor-pointer"
                : "flex items-center justify-center text-gray-600 border-b-2  py-2 flex-col cursor-pointer"
            }
          >
            <FiLayers className="w-6 h-6" />
            <p className="text-xs">Issues</p>
          </div>
          <div
            onClick={() => setBactive(2)}
            className={
              bactive === 2
                ? "flex items-center justify-center text-pr border-b-2 border-pr py-2 flex-col cursor-pointer"
                : "flex items-center justify-center text-gray-600 border-b-2  py-2 flex-col cursor-pointer"
            }
          >
            <BiUser className="w-6 h-6" />
            <p className="text-xs">Users</p>
          </div>
          <div
            onClick={() => setBactive(3)}
            className={
              bactive === 3
                ? "flex items-center justify-center text-pr border-b-2 border-pr py-2 flex-col cursor-pointer"
                : "flex items-center justify-center text-gray-600 border-b-2  py-2 flex-col cursor-pointer"
            }
          >
            <AiOutlineStar className="w-6 h-6" />
            <p className="text-xs">Issues</p>
          </div>
          <div
            onClick={() => setBactive(4)}
            className={
              bactive === 4
                ? "flex items-center justify-center text-pr border-b-2 border-pr py-2 flex-col cursor-pointer"
                : "flex items-center justify-center text-gray-600 border-b-2  py-2 flex-col cursor-pointer"
            }
          >
            <BsChat className="w-6 h-6" />
            <p className="text-xs">Articles</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full flex items-center justify-between">
          <AiOutlineArrowLeft  onClick={count === 0  ? null : () => setCount(count - 1)} className="text-gray-600 w-6 h-6 cursor-pointer" />
          <h6 className="text-lg font-medium text-gray-600">
            Todays Highlights
          </h6>
          <AiOutlineArrowRight
            onClick={count + 1 === issues.length ? null : () => setCount(count + 1)}
            className="text-gray-600 w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full hidden lg:grid mt-6 grid-cols-2 gap-8">
        {issues.slice(count, count + 2).map((item, ind) => (
          <div key={ind} className=" border-2 py-3 px-3 flex  flex-col">
            <h1 className="text-3xl text-gray-600">{item.title}</h1>
            <p className="text-xs text-gray-500 pt-3">{item.desc}</p>
            <div className=" w-full flex items-center justify-end">
              <button className="bg-pr text-white text-sm px-3 py-1 rounded-md hover:bg-blue-700">
                Go
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid lg:hidden  mt-6 grid-cols-1 gap-8">
        {issues.slice(count, count + 1).map((item, ind) => (
          <div key={ind} className=" border-2 py-3 px-3 flex  flex-col">
            <h1 className="text-3xl text-gray-600">{item.title}</h1>
            <p className="text-xs text-gray-500 pt-3">{item.desc}</p>
            <div className=" w-full flex items-center justify-end">
              <button className="bg-pr text-white text-sm px-3 py-1 rounded-md hover:bg-blue-700">
                Go
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
