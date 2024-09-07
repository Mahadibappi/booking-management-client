// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSignupMutation } from "../redux/auth/AuthApi";
import { toast } from "sonner";
export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
};
const Register: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<TUser>({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    address: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const Navigate = useNavigate();
  const [singup] = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Creating User");
    try {
      setLoading(true);
      const data = await singup(formData).unwrap();
      console.log(data);

      setLoading(false);
      if (data.success === false) {
        setError(data.message);
        return;
      }
      toast.success("User Registered successful", {
        id: toastId,
        duration: 200,
        position: "top-center",
      });
      setError(null);
      Navigate("/login");
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setError(error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-[750px] w-[500px] overflow-hidden rounded-3xl">
        <div
          className="h-full w-full bg-[100%] "
          style={{
            backgroundImage: `url(
              https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=900&t=st=1695564871~exp=1695565471~hmac=4fbe38826442c0a07cec3412127bd88d230f1cee0186b9038a1a1e4046ee4c85
            )`,
          }}
        ></div>

        <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow ">
          <h2 className="text-center text-white text-2xl mt-[-130px] my-[-40px]">
            Register As New User
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-8 px-10 py-10 text-center"
          >
            <div className="group relative">
              <input
                value={formData.name}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                onChange={handleChange}
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="name"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Full Name
              </label>
            </div>
            <div className="group relative">
              <input
                value={formData.phone}
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                required
                onChange={handleChange}
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="phone"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Phone Number
              </label>
            </div>

            <div className="group relative">
              <input
                value={formData.email}
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                autoComplete="email"
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
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
                value={formData.password}
                type={visible ? "text" : "password"}
                name="password"
                id="password"
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
                    className=" mx-20 "
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={20}
                    className=" mx-20 "
                    onClick={() => setVisible(true)}
                  />
                )}
              </label>

              {error ? (
                <p className="mt-1 text-sm text-red-500">password error</p>
              ) : null}
            </div>
            <div className="group relative">
              <input
                value={formData.role}
                type="text"
                name="role"
                id="role"
                autoComplete="role"
                required
                onChange={handleChange}
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="role"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Role
              </label>
            </div>
            <div className="group relative">
              <input
                value={formData.address}
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                required
                onChange={handleChange}
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="address"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Location
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className=" border-white-500 group m-auto my-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-800 focus:outline-none text-white font-bold "
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
          <p className="gap-2 text-center text-white ">
            Already have an account?
            <Link
              to={"/login"}
              className="font-semibold text-sky-400 hover:text-blue-800 "
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-center text-white">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
