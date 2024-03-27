import React from 'react'
import { Link } from 'react-router-dom'


const Testings = () => {
    return (
        <div>


            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Student</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Calendar</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1"> Online Material</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Expenses & Revenue</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Quiz</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Exam Features</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Announcements</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1"> Website</Link>
            </li>
            <li class="nav-item">
                <Link to="/" className="nav-link nav-link1">Business Report</Link>
            </li>
        </div>
    )
}

export default Testings
