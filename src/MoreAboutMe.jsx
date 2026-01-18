import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomScript } from "./Script";

const MoreAboutMe = () => {
  useCustomScript();

  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center p-5">
      {/* Back Button */}
      <div className="w-full max-w-md mb-6 flex justify-start">
         <Link to="/" className="btn btn-sm btn-outline text-black border-black hover:bg-black hover:text-white">
            ← Back
         </Link>
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl border-2 border-[#333333]">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center">About Me</h2>
          
          <div className="divider"></div> 

          <p className="text-lg">
            Hi! I am PandaMonkey. 🐼
          </p>
          <p className="mt-2">
            I am a Mathematics and Computer Science Graduate and a Junior Web Developer.
            I love building things for the web and managing communities.
          </p>
          
          <div className="card-actions justify-end mt-4">
             <a href="mailto:contact@example.com" className="btn btn-warning btn-sm">Contact Me</a>
          </div>
        </div>
      </div>
      
      {/* Footer same as Card */}
      <footer className="footer footer-center p-5 text-black mt-10">
          <aside>
            <p className="font-bold">CaptainPandaMonkey</p>
            <p>Made in 2024</p>
          </aside>
      </footer>
    </div>
  );
};

export default MoreAboutMe;
