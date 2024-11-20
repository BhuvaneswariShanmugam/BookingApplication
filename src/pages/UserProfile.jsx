import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../redux/service/UserApi'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
    const { userId } = useParams();  

    const { data: responseData, error, isLoading } = useGetUserByIdQuery(userId);
    
    const [updateUser] = useUpdateUserMutation();

    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!responseData || !responseData.data) {
        return <div>No user data found</div>;
    }

    const user = responseData.data; 

    if (formData.firstName === undefined) {
        setFormData(user);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUser({ id: userId, data: formData }).unwrap();
            setIsEditMode(false);
            alert('User data updated successfully');
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Error updating user data');
        }
    };

    return (
        <div className="container mt-5">
            <h2>{user.firstName} {user.lastName}'s Profile</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                   
                        <form onSubmit={handleFormSubmit}>
                            <h4>Edit Personal Information</h4>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={formData.address || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactNumber" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                            <button
                                type="button"
                                className="btn btn-secondary ms-2"
                                onClick={() => setIsEditMode(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    
                        {/* <div>
                            <h4>Personal Information</h4>
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Email:</strong> {user.email || 'N/A'}</li>
                                <li className="list-group-item"><strong>Gender:</strong> {user.gender || 'N/A'}</li>
                                <li className="list-group-item"><strong>Address:</strong> {user.address || 'N/A'}</li>
                                <li className="list-group-item"><strong>Phone:</strong> {user.contactNumber || 'N/A'}</li>
                                <li className="list-group-item"><strong>Date of Birth:</strong> {user.dateOfBirth || 'N/A'}</li>
                                <li className="list-group-item"><strong>Role:</strong> {user.role || 'N/A'}</li>
                            </ul>
                            <button
                                className="btn btn-warning mt-3"
                                onClick={() => setIsEditMode(true)}
                            >
                                Edit Profile
                            </button>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
