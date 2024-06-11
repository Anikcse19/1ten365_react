import axios from "axios";

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import base_url from "../../utils/baseUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios.post(`${base_url}/admins/login`, formData).then((res) => {
      if (res?.data?.msg == "success") {
        setIsLoading(false);
        localStorage.setItem("token", res?.data?.token);
        router("/dashboard/viewAdmins");
      } else {
        setIsLoading(false);
        toast.error(`${res?.data?.error}`, {
          position: "top-right",
        });
      }
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-700 p-3">
      <div className="bg-slate-600 p-5">
        <div className="text-center my-10">
          <span className="bg-stone-400 px-12 py-2 text-black font-bold">
            Login
          </span>
        </div>

        {/* form */}
        <div className="md:px-24 flex flex-col gap-6">
          {/* email field */}
          <div className="flex flex-col">
            <label className="text-white font-bold" htmlFor="">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-2 outline-none rounded-sm"
              type="text"
            />
          </div>
          {/* password field */}
          <div className="flex flex-col">
            <label className="text-white font-bold" htmlFor="">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-5 py-2 outline-none rounded-sm"
              type="password"
            />
          </div>
        </div>
        {/* button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleLogin}
            className="bg-green-500 hover:bg-green-400 px-12 py-2 rounded-md text-white font-bold"
          >
            Login
          </button>
        </div>

        {isLoading && (
          <div className="text-center mt-5 text-green-600 font-bold">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
