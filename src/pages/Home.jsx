import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 

const Home = () => {
  
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex-grow flex flex-col items-center justify-center mb-10 mt-10">
        <p className="text-4xl mb-5">Your Personal AI Tutor, Anytime, Anywhere</p>
        <p className="text-sm">Explore interactive classes and get answers to all your questions with our AI-powered assistant.</p>
      </div>

      <div
        className="flex flex-col gap-10 justify-center mx-auto mb-5 border border-gray-300 p-4 w-full max-w-6xl bg-cover bg-center bg-75 transparent-bg"
      >
        <div className="flex flex-col">
          <img src="/team.png" alt="Teams" className="w-full h-auto mx-auto" />
        </div>
        <div className="flex flex-col border border-gray-500 p-4 shadow-lg bg-white bg-opacity-50">
          <p className="text-2xl mb-2 font-bold">Overview:</p>
          <p className="text-sm">
            At AI Educator, our mission is to revolutionize the way high school students learn by combining structured classes with cutting-edge AI technology. We provide an interactive platform where students can explore a variety of subjects, engage with tailored lessons, and ask questions to a personalized AI assistant. Designed to adapt to individual learning styles, AI Educator ensures that every student receives the support they need to succeed, whether they’re mastering challenging topics or preparing for exams. Our goal is to make education accessible, engaging, and personalized for every learner.
          </p>
        </div>

        <div className="flex flex-col border border-gray-500 p-4 shadow-lg bg-white bg-opacity-50">
          <p className="text-2xl mb-2 font-bold">Our Mission:</p>
          <p className="text-sm">
            To empower high school students with personalized, accessible, and engaging learning experiences through innovative AI-driven education.
          </p>
        </div>

        <div className="flex flex-col border border-gray-500 p-4 shadow-lg bg-white bg-opacity-50">
          <p className="text-2xl mb-2 font-bold">Vision:</p>
          <p className="text-sm">
            To become the leading platform that transforms education by leveraging AI to create personalized, accessible, and engaging learning experiences for students worldwide, empowering them to reach their full potential and succeed in an ever-changing world
          </p>
        </div>

        <div className="flex flex-col border border-gray-500 p-4 shadow-lg bg-white bg-opacity-50">
          <p className="text-2xl mt-5 mb-2 font-bold">Values:</p>
          <p className="text-sm">
            We believe strongly in the following core values, which support our mission and vision.
          </p>
          <div className="pl-4">
            <p className="text-md mt-5 font-bold underline">Personalization</p>
            <p className="text-sm">
              We believe that every student learns differently, and our platform is designed to adapt to individual learning styles, strengths, and areas for improvement, ensuring a truly customized educational experience.
            </p>

            <p className="text-md mt-5 font-bold underline">Accessibility</p>
            <p className="text-sm">
              Our mission is to break down barriers to education by providing a platform that is available anytime, anywhere, and to anyone, making high-quality learning resources accessible to students from all backgrounds and regions.
            </p>

            <p className="text-md mt-5 font-bold underline">Innovation</p>
            <p className="text-sm"> We are committed to staying at the forefront of technological advancements, using state-of-the-art AI and interactive tools to redefine how students engage with their education and solve complex problems.</p>

            <p className="text-md mt-5 font-bold underline">Engagement</p>
            <p className="text-sm"> We strive to create an immersive and enjoyable learning environment through interactive classes, quizzes, and an AI assistant that motivates students to stay curious, ask questions, and actively participate in their education.</p>

            <p className="text-md mt-5 font-bold underline">Empowerment</p>
            <p className="text-sm"> By providing personalized guidance, clear explanations, and the ability to learn at their own pace, we aim to empower students with the confidence and skills they need to succeed academically, personally, and professionally.</p>
            
            <p className="text-md mt-5 font-bold underline">Collaboration</p>
            <p className="text-sm"> We value the synergy between students, educators, and technology, fostering a supportive community where everyone works together to maximize learning outcomes and drive progress.</p>

            <p className="text-md mt-5 font-bold underline">Excellence</p>
            <p className="text-sm"> We hold ourselves to the highest standards in delivering quality education and innovative solutions, striving to make a lasting impact on students’ lives and the future of learning.</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/signup">
          <button className="text-l font-bold uppercase bg-blue-300 text-black px-4 py-2 inline-block rounded transform transition-transform duration-200 hover:scale-105">
          Sign up!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;