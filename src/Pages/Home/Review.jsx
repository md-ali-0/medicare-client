import { Rating } from "@smastrom/react-rating";

const Review = ({ review }) => {
    const { camp_name, date, participant_name, participant_image, feedback, rating } = review;

    return (
        <figure className="max-w-screen-md mx-auto text-center">
            <div className="mx-auto w-36">
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            </div>
            <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                    {feedback}
                </p>
            </blockquote>
            <div className="py-3">
                <span className="text-gray-500 font-bold pt-5">{camp_name}</span>
            </div>
            <figcaption className="flex items-center justify-center mt-3 space-x-3 rtl:space-x-reverse">
                <img
                    className="w-6 h-6 rounded-full"
                    src={participant_image}
                    alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                        {participant_name}
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                        {date}
                    </cite>
                </div>
            </figcaption>
        </figure>
    );
};

export default Review;
