"use client";
import React, { useState } from "react";
import Image from "next/image";
import Doc from "@/app/Assets/docbg.png";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [isVideoCallVisible, setIsVideoCallVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [regimeBuilderData, setRegimeBuilderData] = useState(null); // State to hold data for RegimeBuilder
  const [detailReportData, setDetailReportData] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isloged, setisloged] = useState(false);
  const [status, setStatus] = useState(null);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="w-full h-screen bg-white flex flex-row">
      <div className="w-[55%] my-auto flex flex-col gap-16 items-center justify-center">
        <div className="w-[70%] flex flex-col gap-2">
          <p className="font-poppins font-semibold text-5xl text-black">
            DOCTOR
          </p>
          <p className="font-poppins font-semibold text-4xl text-[#7075DB]">
            Login
          </p>
        </div>
        <div className="flex flex-col w-[70%] gap-6">
          <div className="w-full rounded-lg border-2 border-[#1C1B1F] font-poppins font-normal text-lg p-1">
            <input
              type="email"
              placeholder="Email"
              className="py-1 px-2 bg-transparent w-[94.5%] outline-none text-black"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div>
            <div className="w-full rounded-lg border-2 border-[#1C1B1F] font-poppins font-normal text-lg py-1 pl-1 pr-2 flex flex-row justify-between items-center">
              <input
                type="password"
                placeholder="Password"
                className="py-1 px-2 bg-transparent w-[100%] outline-none text-black"
                value={password}
                onChange={handlePasswordChange}
              />
              <svg
                width="30"
                height="30"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                {/* SVG path here */}
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 border-2 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="checkbox"
                className=" text-[#313131] text-sm font-poppins font-medium my-auto"
              >
                Remember Me
              </label>
            </div>
            <p className="font-poppins font-medium text-sm text-[#FF8682] cursor-pointer">
              Forgot Password
            </p>
          </div>
          <button
            className="w-[100%] bg-[#7075DB] font-poppins font-medium text-sm text-white p-3 rounded-lg"
            //onClick={handleLoginchange}
            onClick={() => router.push("/Landing")}
          >
            Login
          </button>
          {status && <div>{status}</div>}
        </div>
        <div className="w-[70%] flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-row items-center gap-2 justify-center opacity-35">
            <div className="w-1/3 h-[0.5px] rounded-full bg-[#313131]" />
            <p className="font-poppins font-normal text-base text-[#313131]">
              Or login with
            </p>
            <div className="w-1/3 h-[0.5px] rounded-full bg-[#313131]" />
          </div>
          <div>
            <div
              className="px-14 py-2 rounded-lg border-[#3869EB] border-[1.8px] cursor-pointer"
              role="button"
              tabIndex={0}
              //onClick={handleGoogleLogin}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1345_4157)">
                  <path
                    d="M8.90368 4.11288H8.59089V4.09676H5.09605V5.65003H7.29062C6.97045 6.55422 6.11014 7.20329 5.09605 7.20329C3.80937 7.20329 2.76615 6.16008 2.76615 4.87339C2.76615 3.58671 3.80937 2.5435 5.09605 2.5435C5.68998 2.5435 6.23032 2.76756 6.64174 3.13354L7.74009 2.03519C7.04656 1.38884 6.11887 0.990234 5.09605 0.990234C2.95158 0.990234 1.21289 2.72892 1.21289 4.87339C1.21289 7.01787 2.95158 8.75655 5.09605 8.75655C7.24053 8.75655 8.97921 7.01787 8.97921 4.87339C8.97921 4.61303 8.95242 4.35888 8.90368 4.11288Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M1.66016 3.06598L2.93597 4.00163C3.28118 3.14694 4.11723 2.5435 5.09559 2.5435C5.68952 2.5435 6.22986 2.76756 6.64128 3.13354L7.73963 2.03519C7.0461 1.38884 6.11841 0.990234 5.09559 0.990234C3.60407 0.990234 2.31059 1.8323 1.66016 3.06598Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M5.09566 8.7562C6.09868 8.7562 7.01005 8.37235 7.69912 7.74813L6.49728 6.73113C6.09432 7.03759 5.60191 7.20334 5.09566 7.20294C4.08565 7.20294 3.22805 6.55891 2.90497 5.66016L1.63867 6.6358C2.28133 7.89336 3.58647 8.7562 5.09566 8.7562Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M8.90334 4.11279H8.59055V4.09668H5.0957V5.64994H7.29027C7.13712 6.08028 6.86125 6.45632 6.49675 6.7316L6.49733 6.73121L7.69917 7.74821C7.61413 7.82548 8.97886 6.81489 8.97886 4.87331C8.97886 4.61295 8.95207 4.35879 8.90334 4.11279Z"
                    fill="#1976D2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1345_4157">
                    <rect
                      width="9.31958"
                      height="9.31958"
                      fill="white"
                      transform="translate(0.435547 0.212891)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {emailNotFound && <p>Email not found. Please register first.</p>}
          </div>
        </div>
      </div>
      <div className="relative w-[45%] h-full rounded-l-[50px] bg-black">
        <div className="w-full h-full object-fit">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 255 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="rounded-l-[50px] object-fit"
          >
            <path
              d="M0 16.3861C0 7.33632 7.33632 0 16.3861 0L274.614 0C283.664 0 291 7.33633 291 16.3861V317.614C291 326.664 283.664 334 274.614 334H16.3861C7.33633 334 0 326.664 0 317.614L0 16.3861Z"
              fill="#7075DB"
            />
            <circle cx="24.5" cy="72.5" r="5.5" fill="#F0F0F0" />
            <path
              d="M214 173C214 215.526 178.854 250 135.5 250C92.1456 250 57 215.526 57 173C57 130.474 92.1456 96 135.5 96C178.854 96 214 130.474 214 173Z"
              fill="#8B91FF"
            />
            <mask id="path-4-inside-1_1364_1201" fill="white">
              <path d="M183.839 82.5007C194.216 84.9556 204.002 89.7661 212.502 96.5904C221.002 103.415 228.006 112.085 233.018 121.986C238.03 131.887 240.926 142.775 241.5 153.877C242.075 164.978 240.314 176.021 236.342 186.22L228.016 182.489C231.493 173.56 233.034 163.893 232.531 154.175C232.028 144.456 229.493 134.924 225.106 126.257C220.718 117.589 214.586 109.999 207.145 104.024C199.704 98.0501 191.137 93.8388 182.053 91.6898L183.839 82.5007Z" />
            </mask>
            <path
              d="M183.839 82.5007C194.216 84.9556 204.002 89.7661 212.502 96.5904C221.002 103.415 228.006 112.085 233.018 121.986C238.03 131.887 240.926 142.775 241.5 153.877C242.075 164.978 240.314 176.021 236.342 186.22L228.016 182.489C231.493 173.56 233.034 163.893 232.531 154.175C232.028 144.456 229.493 134.924 225.106 126.257C220.718 117.589 214.586 109.999 207.145 104.024C199.704 98.0501 191.137 93.8388 182.053 91.6898L183.839 82.5007Z"
              stroke="#E0E0E0"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              mask="url(#path-4-inside-1_1364_1201)"
            />
            <circle cx="49.5" cy="90.5" r="5.5" fill="white" />
            <circle cx="74.5" cy="49.5" r="9.5" fill="#8B91FF" />
          </svg>
          <Image
            src={Doc}
            alt="Doctor Image"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[100%] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
