"use client";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "top-0  px-5 py-1 justify-around gap-8 flex inset-x-0 items-center max-w-full bg-slate-800 mx-auto z-50  flex-col lg:flex-row max-sm:gap-1",
        className
      )}
    >
      <div className="h-full not-sr-only sr-only max-md:not-sr-only  cursor-pointer">
        <svg
          height="50px"
          widths={"80px"}
          version="1.1"
          strokeWidth={14}
          className=" cursor-pointer"
          viewBox="10 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="形状_4_3_" color="#FFFFFF">
            <g id="形状_4">
              <g>
                <path
                  d="M342.951,247.745c-8.171-4.596-17.69-5.941-26.687-5.731     l24.238-34.603c2.244-3.111,3.511-5.072,3.521-6.572l0.004-8.956c-0.004-1.546-1.202-2.635-2.699-2.638l-46.794,0.006     c-1.441-0.003-2.637,1.057-2.646,2.644v10.441c0.012,1.562,1.21,2.629,2.705,2.629l24.449,0.003l-28.08,40.285     c-1.711,2.586-1.741,5.483-1.741,7.176v10.591c0,1.534,1.701,3.288,3.331,2.419c15.925-8.46,35.037-7.637,49.441-0.091     c1.763,0.922,3.443-0.854,3.443-2.387v-11.139C345.292,250.316,344.798,248.781,342.951,247.745z M180.164,187.902     c-8.372,0-16.213,4.305-19.666,13.529c-3.987-9.225-9.568-13.529-18.472-13.529c-8.769,0-15.281,4.305-18.736,13.529h-0.266     v-9.537c-0.089-1.333-1.202-2.384-2.588-2.454l-13.257,0.003c-1.519,0-2.749,1.17-2.749,2.632l-0.009,73.063     c0.109,1.299,1.192,2.314,2.546,2.404h14.236c1.516,0,2.748-1.173,2.745-2.629l0.006-38.727c0-8.457-0.4-20.142,9.834-20.142     c10.098,0,8.77,11.994,8.77,20.142l0.013,38.729c0,1.403,1.126,2.533,2.555,2.626h14.22c1.514,0,2.744-1.173,2.744-2.629v-38.727     c0-4.153-0.134-10.302,1.33-13.993c1.462-3.688,5.05-5.994,8.505-5.994c4.119,0,7.309,1.384,8.371,6.304     c0.666,2.921,0.398,10.607,0.398,13.684l0.003,38.729c0,1.403,1.128,2.533,2.557,2.626h14.219c1.516,0,2.746-1.173,2.746-2.629     l0.012-46.107c0-7.844,0.93-16.759-3.591-22.907C192.655,190.362,186.144,187.902,180.164,187.902z M384.308,187.902     c-20.597,0-32.024,17.682-32.024,40.435c0,22.604,11.297,40.746,32.024,40.746c19.934,0,32.555-17.684,32.555-39.976     C416.862,206.045,405.438,187.902,384.308,187.902z M384.308,254.014c-11.159,0-11.028-19.064-11.028-27.982     s0.662-23.214,11.162-23.214c4.515,0,7.707,1.999,9.3,7.071c1.862,5.842,2.128,13.222,2.128,19.373     C395.869,238.638,395.341,254.014,384.308,254.014z M482.25,196.515c-3.986-6.304-10.231-8.612-16.613-8.612     c-9.831,0-15.411,4.769-19.395,14.761h-0.271v-11.174c-0.26-1.135-1.283-1.987-2.527-2.049l-13.204,0.003     c-1.436,0-2.614,1.051-2.737,2.384l0.023,73.089c0,1.403,1.126,2.533,2.557,2.626h14.182c1.518,0,2.749-1.173,2.772-2.629V225.57     c0-4.92,0.266-9.379,2.262-13.838c1.593-3.534,4.779-5.842,8.235-5.842c9.837,0,8.905,11.684,8.905,19.68v39.673     c0.152,1.243,1.218,2.215,2.536,2.299h14.271c1.406,0,2.567-1.004,2.73-2.299v-45.977     C485.976,212.193,485.976,202.356,482.25,196.515z M274.564,240.964v-22.179c0-9.398,0.666-18.031-6.26-24.5     c-5.459-5.238-14.515-7.089-21.44-7.089c-13.547,0-28.664,5.058-31.835,21.796c-0.336,1.78,0.96,2.714,2.125,2.977l13.797,1.494     c1.291-0.067,2.225-1.337,2.473-2.617c1.187-5.767,6.013-8.551,11.441-8.551c2.931,0,6.26,1.08,7.992,3.7     c1.996,2.927,1.731,6.934,1.731,10.324v1.848c-8.257,0.925-19.044,1.541-26.768,4.932c-8.922,3.852-15.18,11.708-15.18,23.267     c0,14.789,9.322,22.187,21.307,22.187c10.122,0,15.655-2.387,23.471-10.348c2.583,3.741,3.431,5.557,8.158,9.487     c1.063,0.571,2.42,0.511,3.364-0.333l0.032,0.032c2.842-2.53,8.009-7.016,10.918-9.455c1.16-0.945,0.955-2.486,0.047-3.782     C277.335,250.559,274.564,247.635,274.564,240.964z M251.925,247.751c-2.265,4.01-5.86,6.47-9.854,6.47     c-5.461,0-8.657-4.161-8.657-10.321c0-12.122,10.875-14.331,21.175-14.331v3.084C254.589,238.2,254.72,242.819,251.925,247.751z      M87.947,240.964v-22.179c0-9.398,0.666-18.031-6.258-24.5c-5.461-5.238-14.517-7.089-21.441-7.089     c-13.547,0-28.664,5.058-31.834,21.796c-0.337,1.78,0.958,2.714,2.124,2.977l13.797,1.494c1.291-0.067,2.227-1.337,2.473-2.617     c1.185-5.767,6.013-8.551,11.442-8.551c2.928,0,6.258,1.08,7.991,3.7c1.996,2.927,1.73,6.934,1.73,10.324v1.848     c-8.257,0.925-19.044,1.541-26.769,4.932c-8.921,3.852-15.18,11.708-15.18,23.267c0,14.789,9.32,22.187,21.307,22.187     c10.12,0,15.656-2.387,23.469-10.348c2.585,3.741,3.432,5.557,8.161,9.487c1.061,0.571,2.42,0.511,3.363-0.333l0.033,0.032     c2.841-2.53,8.011-7.016,10.917-9.455c1.158-0.945,0.954-2.486,0.047-3.782C90.718,250.559,87.947,247.635,87.947,240.964z      M65.308,247.751c-2.263,4.01-5.86,6.47-9.854,6.47c-5.458,0-8.655-4.161-8.655-10.321c0-12.122,10.876-14.331,21.174-14.331     v3.084C67.973,238.2,68.105,242.819,65.308,247.751z"
                  fill="#FFFFFF"
                />
              </g>
            </g>
          </g>
          <g id="形状_4_2_" color="#F2941B">
            <g id="形状_4_1_">
              <g>
                <path
                  d="M307.486,289.35c-29.959,12.709-62.519,18.852-92.138,18.852     c-43.908,0-86.42-12.043-120.796-32.048c-3.007-1.75-5.24,1.34-2.739,3.596c31.865,28.773,73.968,46.055,120.728,46.055     c33.36,0,72.106-10.491,98.83-30.212C315.792,292.329,312.006,287.433,307.486,289.35z M333.894,274.189     c-2.913-3.592-27.977-6.697-43.272,4.048c-2.352,1.654-1.947,3.928,0.66,3.616c8.615-1.027,27.793-3.333,31.211,1.044     c3.421,4.377-3.803,22.415-7.025,30.472c-0.978,2.434,1.119,3.42,3.325,1.576C333.129,302.948,336.832,277.823,333.894,274.189z"
                  fillRule="evenodd"
                  clipRule={"evenodd"}
                  fill="#F2941B"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="h-full sr-only p-1 w-full flex lg:sr-only max-md:not-sr-only sm:not-sr-only  max-sm:not-sr-only justify-between items-center max-sm:w-full   text-white sm:w-full hover:outline cursor-pointer">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className=" z-10 inline-flex  text-center font-bold font-mono text-xl text-white bg-transparent  rounded-s-lg items-baseline  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="file: mt-4 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Cart
        </button>
      </div>
      <div className="text-white h-full flex  cursor-pointer justify-center items-center sr-only  lg:not-sr-only">
        Update Location
      </div>
      <div className=" max-w-full w-full ">
        <div className="flex  flex-row ">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg "
            type="button"
          >
            All
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="relative    w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5   sm:w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border  outline-none   max-sm:w-full "
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0  p-2.5 text-sm font-medium h-full text-white outline-none  rounded-e-lg  bg-yellow-500 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="black"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-4  justify-around text-lg font-serif font-earthlight text-[#324F77] gap-6 items-center max-xl:sr-only max-lg:sr-only max-md:sr-only max-sm:sr-only">
        <div>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" z-10 inline-flex items-center py-2.5 px-4  text-center font-bold font-mono text-xl text-white bg-transparent  rounded-s-lg   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            EN
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>

        <div>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" z-10 inline-flex sr-only sm:not-sr-only items-center py-2.5 px-4  text-center font-bold font-mono text-xl text-white bg-transparent  rounded-s-lg   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <div className="flex flex-col">
              <div className="text-sm font-normal leading-2">
                Hello, sigin in
              </div>
              <div className="text-base font-bold leading-4">
                Accounts & lists
              </div>
            </div>
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
        <div>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" z-10 inline-flex items-center  text-center font-bold font-mono text-xl text-white bg-transparent  rounded-s-lg   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <div className="flex flex-col">
              <div className="text-base font-normal leading-3">Returns</div>
              <div className="text-base font-bold leading-4">& orders</div>
            </div>
          </button>
        </div>

        <div>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className=" z-10 inline-flex  text-center font-bold font-mono text-xl text-white bg-transparent  rounded-s-lg items-baseline  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
