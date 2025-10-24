import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import Loader from "../components/shared/Loader";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    document.title = "ToyTopia — Profile";
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      

      Swal.fire("Saved", "Profile updated", "success");
      user.displayName = name;
      user.photoURL = photo;
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };
  if (loading) return <Loader />;


  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">My Profile</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/6ykWQvS/avatar-placeholder.png"
            }
            alt="avatar"
            className="w-40 h-40 rounded-full object-cover border"
          />
          <p className="mt-3 text-black">
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
        <form onSubmit={handleSave} className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-pink-400 file-input-accent input w-full"
            placeholder="Enter your name"
          />
          <input
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="text-pink-400 input file-input-accent w-full"
            placeholder="Enter photo Url"
          />
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
