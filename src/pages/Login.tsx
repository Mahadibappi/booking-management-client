/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/auth/AuthApi";
import { loginUser } from "../redux/auth/AuthSlice";
import { toast } from "sonner";

import { TUser } from "../redux/auth/AuthSlice";
import verifyToken from "../utils/verifyToken";

export type TFormData = {
  email: string;
  password: string;
};
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<TFormData>({
    email: "",
    password: "",
  });
  const [login] = useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in");

    try {
      const res = await login(formData).unwrap();

      const user = verifyToken(res.data.token) as TUser;

      dispatch(loginUser({ user: user, token: res.data.token }));

      toast.success("Log in successful", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-[600px] w-[400px] overflow-hidden rounded-3xl">
        <div
          className="h-full w-full bg-[100%]"
          style={{
            backgroundImage: `url(
              'https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=900&t=st=1695564871~exp=1695565471~hmac=4fbe38826442c0a07cec3412127bd88d230f1cee0186b9038a1a1e4046ee4c85'
            )`,
          }}
        ></div>

        <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow ">
          <h2 className="text-center text-white text-2xl mt-[-80px]">
            Login to Your Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-8 px-10 py-10 text-center"
          >
            <div className="group relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                autoComplete="email"
                onChange={handleChange}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Email
              </label>
            </div>
            <div className="group relative">
              <input
                type={visible ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label
                htmlFor="password"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Password
                {visible ? (
                  <AiOutlineEye
                    size={20}
                    className="mx-20 cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={20}
                    className="mx-20 cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </label>
            </div>

            <button
              type="submit"
              className="m-auto inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border border-white-500 px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-800 focus:outline-none text-white font-bold"
            >
              Login
            </button>
          </form>
          <p className="gap-2 text-center text-white">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold text-sky-400 hover:text-blue-800"
            >
              Sign up
            </Link>
          </p>
          <Link
            to="#"
            className="group m-auto my-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border border-white-500 px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-800 focus:outline-none"
          >
            <BiLogoGoogle className="h-2.6 w-5 fill-current text-white" />
            <span className="text-sm font-medium text-white">
              {/* Oauth */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
