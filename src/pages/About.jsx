import React from "react";
import '../styles.css';

export default function About() {
  return (
    <div className="flex flex-col gap-10 mx-7 mb-5 justify-center items-center transparent-bg">
      <h1 className="text-3xl font-bold">The Team</h1>

      <div className="w-full md:w-auto md:mt-5 mb-5">
        <h2 className="text-2xl font-bold mb-3">Mohammed Nizar Meskine</h2>
        <div className="flex flex-row w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease space-x-4">
          <img src="/profilepic.jpg" alt="HTML" className="w-64 h-auto object-contain" />
          <div className="flex flex-col">
            <p className="text-sm">
              As a Computer Science student, I excel in leveraging my international experiences and passion for technology to develop innovative solutions. Skilled in software development and AI integration, I thrive in collaborative settings, working effectively with diverse teams to deliver the best solutions to problems while fostering a learning environment where we grow together. My goal is to lead projects that utilize emerging technologies to revolutionize user interactions and elevate digital experiences, setting new standards in the tech industry.
            </p>
            <p>Connect with me:</p>
            <a 
              href="https://www.linkedin.com/in/nizarm/" 
              className="hover:opacity-60 font-bold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
            </a>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-3 mt-3">Hassan Hassan</h2>
        <div className="flex flex-row w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease space-x-4 mb-7">
          <img src="/hassan.jpeg" alt="HTML" className="w-64 h-auto object-contain" />
          <div className="flex flex-col mt-6">
            <p className="text-sm">
            Third-year computer science student, future Junior Penetration Tester, with a great interest in becoming an expert in the field
            of cyber-security through internships and work experience. By completing some certificates, I have learned the basics of
            cybersecurity and the fundamentals of penetration testing. I have hands-on experience from labs and virtual boxes.            </p>
            <p>Connect with me:</p>
            <a 
              href="https://www.linkedin.com/in/ilpx10701/" 
              className="hover:opacity-60 font-bold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
            </a>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-3 mt-3">Zahin Hoque</h2>
        <div className="flex flex-row w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease space-x-4">
          <img src="/zahin.jpeg" alt="HTML" className="w-64 h-auto object-contain" />
          <div className="flex flex-col mt-6">
            <p className="text-sm">
            As a double major in Linguistics and Computer Science at the University of Georgia, with minors in Arabic and Cognitive Science, I have cultivated an interdisciplinary perspective that merges language and technology to drive innovative research. At the FALCoN Lab, I leveraged my Urdu proficiency to design a neurolinguistics EEG experiment and utilized Unix and Python for data analysis, blending linguistic insight with technical expertise. My coursework in Data Structures, Theory of Computing, and Software Development strengthened my Java skills, while Quantitative Methods in Linguistics and a Harvard CS50P certificate expanded my proficiency in R and Python. With a degree of command in Arabic, Bengali, French, Hindi, Persian, and Urdu, I connect deeply with diverse communities and enhance my research capabilities. As an honors student and Presidential Scholar with a 4.0 GPA, I have earned accolades like the CURO Research Award and SPARK Undergraduate Research Award for pioneering Urdu linguistic research. Moving forward, I aim to bridge linguistics and computer science, pushing boundaries to foster innovation and meaningful progress.            </p>
            <p>Connect with me:</p>
            <a 
              href="https://www.linkedin.com/in/zahin-hoque/" 
              className="hover:opacity-60 font-bold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3 mt-3">Adam</h2>

        <div className="flex flex-row w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-105 transition duration-300 ease space-x-4">
          <img src="/adam.jpeg" alt="HTML" className="w-64 h-auto object-contain" />
          <div className="flex flex-col mt-6">
            <p className="text-sm">
              As a Computer Science student, I excel in leveraging my international experiences and passion for technology to develop innovative solutions. Skilled in software development and AI integration, I thrive in collaborative settings, working effectively with diverse teams to deliver the best solutions to problems while fostering a learning environment where we grow together. My goal is to lead projects that utilize emerging technologies to revolutionize user interactions and elevate digital experiences, setting new standards in the tech industry.
            </p>
            <p>Connect with me:</p>
            <a 
              href="https://www.linkedin.com/in/adam-elbakouri-02b08a345/" 
              className="hover:opacity-60 font-bold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}