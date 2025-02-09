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
                <a href="/chatbot?subject=Geometry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Geometry
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Geography" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Geography
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Physical Science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Physical Science
                </a>
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
                <a href="/chatbot?subject=Algebra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Algebra
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=World History" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  World History
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Biology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Biology
                </a>
              </li>
            </ul>
          </div>
        </div>




        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/eleven.png" alt="11th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Pre-Calculus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Pre-Calculus
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=U.S History" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                 U.S History
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Chemistry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Chemistry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mb-9 justify-center">
          <div className="shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease w-64">
            <img src="/twelve.png" alt="12th Grade" className="w-full h-auto rounded-lg mb-4" />
            <ul className="ml-4 list-disc">
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Calculus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Calculus
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=European History" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                 European History
                </a>
              </li>
              <li className="text-xs sm:text-sm font-bold mb-2">
                <a href="/chatbot?subject=Physics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Physics
                </a>
              </li>
            </ul>
          </div>
        </div>







        








      </div>
    </div>
  );
};

export default SpecialPage;