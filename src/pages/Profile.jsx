import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserByIdQuery } from '../redux/service/UserApi'; 
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { data: userDetails, error, isLoading } = useGetUserByIdQuery(id);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        toast.error("Failed to load user details.");
        return <p>Error loading user details!</p>;
    }

    const handleEditProfile = () => {
        navigate(`/edit-profile/${id}`); 
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-details">
                <p><strong>First Name:</strong> {userDetails.first_name}</p>
                <p><strong>Last Name:</strong> {userDetails.last_name}</p>
                <p><strong>Date of Birth:</strong> {userDetails.date_of_birth}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Gender:</strong> {userDetails.gender}</p>
                <p><strong>Contact Number:</strong> {userDetails.contact_number}</p>
                <p><strong>Address:</strong> {userDetails.address}</p>
                <p><strong>Role:</strong> {userDetails.role}</p>
            </div>
            <button onClick={handleEditProfile} className="btn mt-3" style={{ color: 'white', backgroundColor: '#0066b8' }} >Edit Profile</button>
            <ToastContainer />
        </div>
    );
};

export default Profile;
