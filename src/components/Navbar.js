import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    
    function handleTeamClick() {
        navigate('/about');
    }

    function handleHomeClick() {
        navigate('/')
    }
    function handleProgramClick() {
        navigate('/program')
    }
    function handleLocClick() {
        navigate('/Business_Credit')
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2>GFN Capital</h2>
            </div>
            <div className="navbar-right">
                <p onClick={handleHomeClick} className="nav-item clickable" href="/">Home</p>
                <p onClick={handleLocClick} className="nav-item clickable" href="/">LOC</p>
                <p onClick={handleProgramClick} className="nav-item clickable" href="/programs">Programs</p>
                <p className="nav-item clickable" onClick={handleTeamClick}>Company</p>
            </div>
        </div>
    );
}

export default Navbar;
