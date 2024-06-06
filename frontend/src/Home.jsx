import React, { useState } from 'react';
import ClassBox from './ClassBox';
import './Home.css';

function Home() {
  const [classes, setClasses] = useState([
    { id: 1, name: "Math", description: "Learn advanced mathematics.", professor: "John Doe" },
    { id: 2, name: "Science", description: "Explore the world of science.", professor: "Jane Smith" },
    { id: 3, name: "English", description: "Improve your English skills.", professor: "Emily Turner" }
  ]);
  const [newClassName, setNewClassName] = useState('');
  const [newClassDescription, setNewClassDescription] = useState('');
  const [newClassProfessor, setNewClassProfessor] = useState('');

  const handleAddClass = () => {
    const newId = classes.length + 1; // Simple ID generation
    const newClass = {
      id: newId,
      name: newClassName,
      description: newClassDescription,
      professor: newClassProfessor
    };
    setClasses([...classes, newClass]);
    setNewClassName('');
    setNewClassDescription('');
    setNewClassProfessor('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="text"
          placeholder="Class Name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={newClassDescription}
          onChange={(e) => setNewClassDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Professor"
          value={newClassProfessor}
          onChange={(e) => setNewClassProfessor(e.target.value)}
        />
        <button onClick={handleAddClass}>Add Class</button>
      </div>
      <div className="classes-container">
        {classes.map(cls => (
          <ClassBox key={cls.id} classData={cls} />
        ))}
      </div>
    </div>
  );
}

export default Home;
