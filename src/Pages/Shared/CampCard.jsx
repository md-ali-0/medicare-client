import {
    CiBadgeDollar,
    CiCalendarDate,
    CiCircleCheck,
    CiLocationOn,
    CiStethoscope,
    CiUser,
} from "react-icons/ci";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
    const {
        _id,
        campName,
        image,
        participantCount,
        professionalsAttendanceCount,
        scheduledDate,
        scheduledTime,
        description,
        specializedServices,
        targetAudience,
        venueLocation,
        fees,
    } = camp;
    return (
        <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-60 md:h-36 w-full object-cover object-center"
                    src={image}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="flex items-center tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                        <CiLocationOn size={18} className="mr-2 inline" />
                        {venueLocation}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {campName}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {description.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <div className="py-2">
                        <h2 className="flex items-center tracking-widest text-sm title-font font-medium text-gray-700 mb-1">
                            <div className="flex flex-wrap gap-2">
                                {specializedServices.map((service, idx) => {
                                    return (
                                        <span
                                            className="bg-gray-200 text-sm rounded px-1 py-0.5"
                                            key={idx}
                                        >
                                            {service}
                                        </span>
                                    );
                                })}
                            </div>
                        </h2>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div>
                            <CiCircleCheck className="mr-2 inline" />
                            <span className="text-gray-400 text-sm">{targetAudience}</span>
                        </div>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <CiStethoscope size={20} className="mr-2" />
                            {professionalsAttendanceCount}
                        </span>
                    </div>
                    <div className="flex items-center flex-wrap ">
                        <div className="flex items-center flex-wrap gap-2">
                            <div>
                                <CiCalendarDate size={20} className="mr-1 inline" />
                                <span className="text-xs text-gray-500">{scheduledDate}</span>
                            </div>
                            <div>
                                <CiCalendarDate size={20} className="mr-1 inline" />
                                <span className="text-xs text-gray-500">{scheduledTime}</span>
                            </div>
                        </div>
                        {fees ? (
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <CiBadgeDollar size={20} className="mr-2" />
                                {fees}
                            </span>
                        ) : (
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                Free
                            </span>
                        )}
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <CiUser size={18} className="mr-2" />
                            {participantCount}
                        </span>
                    </div>
                    <div className="flex justify-center items-center py-2">
                        <Link
                            to={`/camp-details/${_id}`}
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                            See Details
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampCard;
