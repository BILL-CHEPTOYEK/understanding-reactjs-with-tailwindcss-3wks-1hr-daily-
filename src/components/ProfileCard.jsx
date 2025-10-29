// src/components/ProfileCard.jsx
const ProfileCard = ({ name, role, bio, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={`${name}'s profile`}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <h3 className="text-lg text-blue-600 mb-2">{role}</h3>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
