"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RealTimeDate from "./realtime";
import TemperatureHumidityChart from "./char";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" bg-linear-to-t from-cyan-200 to-blue-500 min-h-screen flex items-center justify-center p-2 md:4">
      <div
        className="w-full
 bg-gray-600 rounded-3xl p-2 md:p-4 flex flex-col md:flex-row">
        <button
          className="md:hidden text-white bg-gray-700 p-2 rounded-lg mb-2 self-start"
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "✕" : "≡"}
        </button>

        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-24 md:pr-4 mb-4 md:mb-0`}>
          <div className="flex md:flex-col md:space-y-4 md:mt-12 space-x-2 md:space-x-0 justify-between">
            <button className="bg-white text-gray-800 p-2 md:p-4 rounded-2xl flex flex-col items-center text-xs flex-1 md:flex-auto">
              <span className="text-xl mb-0 md:mb-1">⬜</span>
              <span className="hidden md:inline">Dashboard</span>
            </button>
            <button className="bg-gray-800 text-white p-2 md:p-4 rounded-2xl flex flex-col items-center text-xs flex-1 md:flex-auto">
              <span className="text-xl mb-0 md:mb-1">👤</span>
              <span className="hidden md:inline">Profile</span>
            </button>
            <button className="bg-gray-800 text-white p-2 md:p-4 rounded-2xl flex flex-col items-center text-xs flex-1 md:flex-auto">
              <span className="text-xl mb-0 md:mb-1">🔒</span>
              <span className="hidden md:inline">Security</span>
            </button>
            <button className="bg-gray-800 text-white p-2 md:p-4 rounded-2xl flex flex-col items-center text-xs flex-1 md:flex-auto md:mt-auto">
              <span className="text-xl mb-0 md:mb-1">⚙️</span>
              <span className="hidden md:inline">Settings</span>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-2xl p-2 md:p-4 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
            <div>
              <div className="text-xl font-bold">
                {" "}
                <RealTimeDate />
              </div>
            </div>
            <div className="bg-gray-700 rounded-full px-2 md:px-4 py-1 md:py-2 flex items-center w-full sm:w-48">
              <input
                type="text"
                placeholder="Device search..."
                className="bg-transparent border-none outline-none w-full text-white text-xs md:text-sm"
              />
              <span>🔍</span>
            </div>
            <div className="text-xl hidden sm:block">🔔</div>
          </div>

          <div className="bg-gray-700 rounded-full p-1 md:p-2 mb-4 flex justify-between items-center overflow-x-auto">
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              📹
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              🎤
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              🛵
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              📶
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              🎮
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mx-0.5">
              ➕
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            <div className="bg-blue-200 bg-opacity-50 rounded-2xl p-3 md:p-4 relative">
              <div className="text-gray-800 font-medium text-sm md:text-base">
                iMac
              </div>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 md:w-10 h-4 md:h-5 bg-gray-300 rounded-full p-0.5">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 mt-2 bg-gray-400 rounded-md flex items-center justify-center">
                <span className="text-xl md:text-2xl">🖥️</span>
              </div>
            </div>

            <div className="rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-red-500  to-red-200 flex items-center justify-center mb-2 md:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold">28°C</span>
                </div>
              </div>
              <div className="flex space-x-1 md:space-x-2 font-semibold">
                NHIỆT ĐỘ
              </div>
            </div>

            <div className="rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-500  to-blue-500 flex items-center justify-center mb-2 md:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold">28%</span>
                </div>
              </div>
              <div className="flex space-x-1 md:space-x-2 font-semibold">
                ĐỘ ẨM
              </div>
            </div>

            <div className="bg-purple-200 bg-opacity-50 rounded-2xl p-3 md:p-4 relative">
              <div className="text-gray-800 font-medium text-sm md:text-base">
                Air Conditioner
              </div>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 md:w-10 h-4 md:h-5 bg-purple-400 rounded-full p-0.5">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full transform translate-x-4 md:translate-x-5"></div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="text-gray-800 font-medium">20°</div>
                <div className="flex space-x-2">
                  <button className="text-lg">➕</button>
                  <button className="text-lg">➖</button>
                </div>
              </div>
            </div>

            <div className="bg-blue-200 bg-opacity-50 rounded-2xl p-3 md:p-4 relative">
              <div className="text-gray-800 font-medium text-sm md:text-base">
                Television
              </div>
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 md:w-10 h-4 md:h-5 bg-gray-300 rounded-full p-0.5">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 mt-2 bg-gray-400 rounded-md flex items-center justify-center">
                <span className="text-xl md:text-2xl">📺</span>
              </div>
            </div>

            <div className="bg-gray-700 rounded-2xl p-3 md:p-4 flex items-center">
              <div className="w-full">
                <div className="text-white font-medium text-sm md:text-base">
                  ON
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 mt-2 mb-2 md:mb-4 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">💡</span>
                </div>
                <div className="h-1 md:h-2 bg-gray-600 rounded-full relative">
                  <div className="absolute w-2/5 h-full bg-purple-500 rounded-full"></div>
                  <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-white rounded-full top-1/2 left-2/5 transform -translate-y-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-2 md:mt-4">
              <TemperatureHumidityChart />
            </div>

            <div className="col-span-1 sm:col-span-2 row-span-2 bg-gray-700 rounded-2xl overflow-hidden">
              <div className="h-32 sm:h-40 md:h-48 relative">
                <img
                  src="/api/placeholder/400/200"
                  alt="Living Room"
                  className="w-full h-full object-cover brightness-75"
                />
              </div>
              <div className="px-2 md:px-4 py-1 md:py-2">
                <div className="h-1 md:h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 to-purple-500 rounded-full relative mb-2 md:mb-4">
                  <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-gray-700 border-2 border-white rounded-full top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2"></div>
                </div>
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      🛋️
                    </span>
                    <span className="text-xs">Living room</span>
                  </button>
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      🛏️
                    </span>
                    <span className="text-xs">Bedroom</span>
                  </button>
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      👶
                    </span>
                    <span className="text-xs">Children's</span>
                  </button>
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      🍳
                    </span>
                    <span className="text-xs">Kitchen</span>
                  </button>
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      🚿
                    </span>
                    <span className="text-xs">Bathroom</span>
                  </button>
                  <button className="bg-gray-200 text-gray-800 p-1 md:p-2 rounded-xl flex flex-col items-center text-xs">
                    <span className="text-base md:text-lg mb-0 md:mb-1">
                      🚗
                    </span>
                    <span className="text-xs">Garage</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-2xl p-3 md:p-4 row-span-2">
              <div className="flex items-center mb-2 md:mb-4">
                <div className="flex-1">
                  <div className="text-white font-medium text-sm md:text-base">
                    Billie Jean
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">
                    Michael Jackson
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded overflow-hidden">
                  <img
                    src="/api/placeholder/50/50"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-1 bg-gray-600 rounded-full relative mb-1">
                <div className="absolute w-7/10 h-full bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-2 md:mb-4">
                <div>3:30</div>
                <div>4:20</div>
              </div>
              <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <button className="text-base md:text-lg">⏮️</button>
                <button className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  ⏸️
                </button>
                <button className="text-base md:text-lg">⏭️</button>
                <button className="text-base md:text-lg">🔊</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
