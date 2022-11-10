import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { replaceAltImage } from '../utils/exportFun';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();


    let time = new Date()
    let greeting = "Good";


    const getFirstNameFromUser = user?.userName.split(' ').slice(0, -1).join(' ');

    if (time.getHours() < 12) {
        greeting = greeting + ` Morning, ${getFirstNameFromUser}`;
    } else if (time.getHours() < 16) {
        greeting = greeting + ` Afternoon, ${getFirstNameFromUser}`;
    } else {
        greeting = greeting + ` Evening,  ${getFirstNameFromUser}`;

    }


  if (user) {
    return (
      <div>
        <h1 className="text-center font-bold">{greeting}</h1>
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white outline-none"
          />
        </div>
        <div className="flex gap-3 ">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src={user.image || "Good one"} alt="user-pic" onError={replaceAltImage} className="w-14 h-12 rounded-lg" title='View' />
          </Link>
          <Link to="/create-pin" className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
          Post
          </Link>
        </div>
      </div>
      </div>
    );
  }

  return null;
};

export default Navbar; 