import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleLoginClick = (type) => {
    navigate(`/${type}`);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="w-full h-15 bg-blue-400 flex justify-between px-10 items-center">
        <Link to={"/"}>
          <span className="text-white text-3xl">Election Portal</span>
        </Link>
        <div className="relative mt-3 px-10">
          <div
            onMouseOver={() => setIsDropdownOpen(true)}
            onMouseOut={() => setIsDropdownOpen(false)}
            className="bg-amber-300 hover:bg-amber-400 border-0 rounded-xl text-xl px-4 py-2 text-white "
          >
            Login
            {isDropdownOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-amber-300 shadow-md rounded-2xl z-10">
                <ul className="flex flex-col">
                  <li
                    className="px-4 py-2 hover:bg-amber-400 rounded-2xl"
                    onClick={() => handleLoginClick('AdminLogin')}
                  >
                    Admin
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-amber-400 rounded-2xl "
                    onClick={() => handleLoginClick('CandidateLogin')}
                  >
                    Candidate
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-amber-400 rounded-2xl "
                    onClick={() => handleLoginClick('VoterLogin')}
                  >
                    Voter
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
