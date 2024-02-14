import ProfileInfo from "@/components/ProfileInfo.jsx";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">
        Profile Search Results
      </h1>
      {/* search bar I'm assuming? */}
      <div>
        <ProfileInfo />
        <ProfileInfo />
        <ProfileInfo />
        <ProfileInfo />
      </div>
    </div>
  );
}
