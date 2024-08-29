import React from "react";

const WorkFlow: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-serif font-semibold mt-10">
        Endless Possibilities
      </h2>
      <p className="text-center text-sm font-serif  mt-2">
        Craft a perfect booking process for your needs.
      </p>
      <div className="flex flex-col space-y-8 p-20 md:flex-row md:space-x-8 md:space-y-0">
        {/* <!-- Step 1 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-green-600">STEP 1</h2>
          <h3 className="text-xl font-bold">Create Own Profile</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white  rounded">
              Name and Email
            </span>
            <span className="px-3 py-1  bg-blue-600 text-white  rounded">
              Phone Number
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Password
            </span>
          </div>
        </div>
        {/* <!-- Step 2 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-blue-600">STEP 2</h2>
          <h3 className="text-xl font-bold">Choose type of service</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Multi-participant event
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Indoor Event
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Outdoor Event
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Indoor Hall
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              One-time event
            </span>
          </div>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-orange-600">STEP 3</h2>
          <h3 className="text-xl font-bold">Define service availability</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Multiple schedules for one service
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Exceptions in availability
            </span>

            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Start & end date
            </span>
          </div>
        </div>

        {/* <!-- Step 4 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-purple-600">STEP 4</h2>
          <h3 className="text-xl font-bold">Set booking flow</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Online booking confirmation
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Confirm by payment
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Confirm by host
            </span>
          </div>
        </div>

        {/* <!-- Step 5 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-teal-600">STEP 5</h2>
          <h3 className="text-xl font-bold">Confirm Payment & Attend Event</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Hand Cash Payment
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Online Payment
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Attend Event
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white rounded">
              Additional message
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
