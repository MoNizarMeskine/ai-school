import { Link } from 'react-router-dom';
import '../styles.css'; // Make sure to import the stylesheet

const Classes = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen justify-center items-center p-10 transparent-bg">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/nine.png" alt="9th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">Geometry</li>
              <li className="text-xs sm:text-sm font-bold mb-2">Geograph</li>
              <li className="text-xs sm:text-sm font-bold mb-2">Physical Science</li>
            </ul>
          </div>
        </div>

        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/ten.png" alt="10th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">Algebra</li>
              <li className="text-xs sm:text-sm font-bold mb-2">World History</li>
              <li className="text-xs sm:text-sm font-bold mb-2">Biology</li>
            </ul>
          </div>
        </div>

        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/eleven.png" alt="11th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">Pre-Calculus</li>
              <li className="text-xs sm:text-sm font-bold mb-2">U.S History</li>
              <li className="text-xs sm:text-sm font-bold mb-2">Chemistry</li>
            </ul>
          </div>
        </div>

        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/twelve.png" alt="12th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">Calculus</li>
              <li className="text-xs sm:text-sm font-bold mb-2">European History</li>
              <li className="text-xs sm:text-sm font-bold mb-2">Physics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/about-me">
          <button className="text-l font-bold uppercase bg-blue-300 text-black px-4 py-2 inline-block rounded transform transition-transform duration-200 hover:scale-105">
            Sign up to Start!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Classes;