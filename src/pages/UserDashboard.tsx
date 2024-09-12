import React from "react";
import { useGetAllBookingsQuery } from "../redux/features/booking/bookingApi";

type Booking = {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
  payableAmount: number;
};
const UserDashboard: React.FC = () => {
  const { data: AllBooking } = useGetAllBookingsQuery(undefined);
  console.log(AllBooking);

  return (
    <div className="relative mx-auto p-10 mt-6 shadow-md sm:rounded-lg">
      <div className="w-1/2 mx-auto bg-gradient-to-r from-[#a2c280] via-[#7487d0] to-[#4990e2] text-white p-16 text-center m-5 rounded-md shadow-lg">
        <h3 className="text-4xl font-bold mb-4">
          Welcome <span className="text-[#f4e7d3]">Mahadi</span>
        </h3>
        <p className="text-lg">Here see your booking list</p>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Facility name
            </th>
            <th scope="col" className="px-6 py-3">
              Start time
            </th>
            <th scope="col" className="px-6 py-3">
              End time
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {AllBooking?.data?.map((booking: Booking) => (
            <tr
              key={booking._id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {booking.name}
              </th>
              <td className="px-6 py-4"> {booking.startTime}</td>
              <td className="px-6 py-4">{booking.endTime}</td>
              <td className="px-6 py-4">{booking.payableAmount} $</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button className="px-6 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gray-500 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                    Edit
                  </button>
                  <button className="px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-red-600 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
