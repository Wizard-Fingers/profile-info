// "use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProfileInfo = ({ onFriendRequest }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setProfile(data.results[0]));
  }, []);

  function handleFriendRequest() {
    if (profile) {
      onFriendRequest(profile);
    }
  }

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-4 border-4 border-cyan-50">
      {profile && (
        <div>
          <Image
            width={100}
            height={100}
            className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-50 drop-shadow-lg"
            src={profile.picture.large}
            alt={`${profile.name.first} ${profile.name.last}`}
          />
          <div className="text-center mt-4">
            <h1 className="text-lg font-semibold text-slate-900">
              {profile.name.first} {profile.name.last}
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Age: {profile.dob.age}
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Location: {profile.location.city}, {profile.location.country}
            </p>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-cyan-600 transition-colors duration-300 ease-in-out"
              onClick={handleFriendRequest}
            >
              Send Friend Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
