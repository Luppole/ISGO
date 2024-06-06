import React from 'react';
import { Link } from 'react-router-dom';
import './ClassBox.css';

function ClassBox({ classData }) {
  return (
    <Link to={`/classroom/${classData.id}`} className="class-box">
      <div className="class-name">{classData.name}</div>
      <div className="class-description">{classData.description}</div>
      <div className="class-professor">Taught by: {classData.professor}</div>
    </Link>
  );
}

export default ClassBox;
