import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            <form className="mx-auto p-6 my-3 bg-white/30 rounded-2xl shadow-md space-y-4 w-11/12">
                <h2 className="text-2xl font-bold text-center">Update Profile</h2>

                <div>
                    <label className="block font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        // value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Photo URL</label>
                    <input
                        type="text"
                        // value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                <button type="submit" className="btn btn-success text-white w-full">Save Changes</button>
                <button type="submit" className="btn btn-primary w-full">Cancel Changes</button>
            </form>
        </div>
    );
};

export default UpdateProfile;