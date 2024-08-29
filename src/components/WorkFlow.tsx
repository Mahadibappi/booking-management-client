import React from "react";

const WorkFlow: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col space-y-8 p-6 md:flex-row md:space-x-8 md:space-y-0">
        {/* <!-- Step 1 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-blue-600">STEP 1</h2>
          <h3 className="text-xl font-bold">Choose type of service</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
              Multi-participant event (e.g., webinar)
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Asset booking (e.g., meeting room)
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
              In-person (e.g., haircut)
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
              Multi-calendar sync (e.g., team meeting)
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              One-time event
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
              Online service (e.g., coaching session)
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
              Series of events
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Date-range (e.g., car rental)
            </span>
          </div>
        </div>

        {/* <!-- Step 2 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-orange-600">STEP 2</h2>
          <h3 className="text-xl font-bold">Define service availability</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded">
              Multiple schedules for one service
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Exceptions in availability
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded">
              Booking window
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded">
              Start & end date
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Breaks between bookings
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded">
              Google Calendar synchronization
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Offset start date
            </span>
          </div>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-green-600">STEP 3</h2>
          <h3 className="text-xl font-bold">Manage connected elements</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
              Single host service
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Multi-host service
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
              Online meeting video links
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
              Auto-assigning hosts (round-robin)
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Locations assignment
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
              Assets assignment
            </span>
          </div>
        </div>

        {/* <!-- Step 4 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-purple-600">STEP 4</h2>
          <h3 className="text-xl font-bold">Set booking flow</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              Automatic booking confirmation
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Confirm by payment
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              Confirm by host
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              Confirm by link in SMS
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Email notifications
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              SMS notifications
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              Reminders for hosts
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Confirm by link in email
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">
              Reminders for customers
            </span>
          </div>
        </div>

        {/* <!-- Step 5 --> */}
        <div className="space-y-4 md:w-1/5">
          <h2 className="text-lg font-semibold text-teal-600">STEP 5</h2>
          <h3 className="text-xl font-bold">Collect customers' data</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              Email address
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              Full name
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Phone number
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              Additional message
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              File upload
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Custom fields
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              Promo code
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
              Allowlist code
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded">
              Privacy policy checkbox
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
