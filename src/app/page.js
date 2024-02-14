"use client";
import React, { useState } from "react";
import ProfileInfo from "@/components/ProfileInfo.jsx";

export default function Home() {
  const [friendRequests, setFriendRequests] = useState([]);

  function handleFriendRequest(profile) {
    setFriendRequests([...friendRequests, profile]);
  }

  function manyProfiles() {
    const profiles = [];
    for (let i = 0; i < 20; i++) {
      profiles.push(
        <ProfileInfo
          key={i}
          onFriendRequest={(profile) => handleFriendRequest(profile)}
        />
      );
    }
    return profiles;
  }

  return (
    <main className="flex">
      <aside className="w-[15rem] bg-cyan-50 p-4 h-full m-4 text-center">
        <h2 className="text-lg font-bold mb-4 text-cyan-800">
          Friend Requests pending:
        </h2>
        <ul>
          {friendRequests.map((profile, index) => (
            <li key={index}>
              {profile.name.first} {profile.name.last}
            </li>
          ))}
        </ul>
      </aside>
      <div className="container mx-auto flex-1">
        <nav>
          <div className="bg-cyan-50 p-4">
            <h1 className="text-2xl font-bold text-center text-cyan-800">
              Profile Search
            </h1>
          </div>
        </nav>
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-center">
            Profile Search Results
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-8">
            {manyProfiles()}
          </div>
        </div>
      </div>
    </main>
  );
}
