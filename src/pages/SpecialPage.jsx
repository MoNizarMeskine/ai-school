import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure your styles are applied

const SpecialPage = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen justify-center items-center p-10 transparent-bg">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        {/* 9th Grade */}
        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/nine.png" alt="9th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=Geometry" className="text-blue-600 hover:underline">
                  Geometry
                </Link>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=Geography" className="text-blue-600 hover:underline">
                  Geography
                </Link>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=Physical Science" className="text-blue-600 hover:underline">
                  Physical Science
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 10th Grade */}
        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/ten.png" alt="10th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=Algebra" className="text-blue-600 hover:underline">
                  Algebra
                </Link>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=World History" className="text-blue-600 hover:underline">
                  World History
                </Link>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <Link to="/chatbot?subject=Biology" className="text-blue-600 hover:underline">
                  Biology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Add similar blocks for 11th Grade and 12th Grade */}
      </div>
    </div>
  );
};

export default SpecialPage;