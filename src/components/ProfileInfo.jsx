"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProfileInfo = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setProfile(data.results[0]));
  }, []);

  return (
    <div className="flex items-center justify-center my-10">
      {profile && (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-4">
            <Image
              width={100}
              height={100}
              className="w-24 h-24 rounded-full mx-auto"
              src={profile.picture.large}
              alt={`${profile.name.first} ${profile.name.last}`}
            />
            <div className="text-center mt-4">
              <h1 className="text-lg font-semibold text-gray-800">
                {profile.name.first} {profile.name.last}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Age: {profile.dob.age}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Location: {profile.location.city}, {profile.location.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
