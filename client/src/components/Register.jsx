/* eslint-disable react/prop-types */
import { useState } from "react";
import Axios from "../utils/Axios";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import summaryApi from "../common/summaryApi";;
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";

const Register = ({ setIsLoginOpen, setIsRegister }) => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });
    const navigate = useNavigate(); 

    const [passwordError, setPasswordError] = useState("");

    const dispatch = useDispatch();

    const handleChangeRegister = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "password" || name === "confirmPassword") {
            setPasswordError(value !== registerData.password && name === "confirmPassword" ? "Passwords do not match" : "");
        }
    };

    const isRegisterDisabled =
        !registerData.name ||
        !registerData.email ||
        !registerData.password ||
        !registerData.confirmPassword ||
        passwordError !== "" ||
        !registerData.mobile;

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await Axios({
                ...summaryApi.register,
                data: registerData
            })
            // console.log("response: ", response);
            if (response.data.error){
                toast.error(response.data.message)
            }
            if (response.data.success) {
                toast.success(response.data.message);
                dispatch(setUserDetails(response.data.user));
                setRegisterData({
                    name: "",
                    email: "",
                    password: "",
                    mobile: "",
                });
                navigate("/")
                setIsLoginOpen(false); // This will close the register pop-up

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            
        } catch (error) {
            // console.log(error);
            AxiosToastError(error);
        }
    }

    return (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
                {/* Back Button */}
                <button className="cursor-pointer absolute top-4 left-4 text-gray-600 text-2xl" onClick={() => setIsLoginOpen(false)}>
                    &larr;
                </button>

                <h2 className="text-xl font-semibold">Create an Account</h2>

                <div className="mt-4">
                    <input
                        value={registerData.name}
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 mb-3 border rounded-md"
                        onChange={handleChangeRegister}
                        autoComplete="off"
                    />
                    <input
                        value={registerData.email}
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 mb-3 border rounded-md"
                        onChange={handleChangeRegister}
                        autoComplete="off"
                    />
                    <input
                        value={registerData.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-3 border rounded-md"
                        onChange={handleChangeRegister}
                        autoComplete="off"
                    />
                    <input
                        value={registerData.confirmPassword}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-2 mb-3 border rounded-md"
                        onChange={handleChangeRegister}
                        autoComplete="off"
                    />
                    <input
                        value={registerData.mobile}
                        name="mobile"
                        type="text"
                        placeholder="Enter mobile number"
                        className="w-full p-2 mb-2 border rounded-md"
                        onChange={handleChangeRegister}
                        autoComplete="off"
                    />

                    {passwordError && <p className="text-red-500 text-sm mb-3">{passwordError}</p>}

                    <button 
                        className={`w-full p-2 rounded-md ${isRegisterDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#0C831F] text-white cursor-pointer"}`}
                        disabled={isRegisterDisabled}
                        onClick={handleSubmit}
                    >
                        Register
                    </button>

                    <p className="text-sm text-gray-600 mt-3">
                        Already have an account?
                        <span className="text-blue-600 cursor-pointer" onClick={() => setIsRegister(false)}> Login</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
