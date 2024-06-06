import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CanvasDraw from 'react-canvas-draw';
import './Classroom.css';  // Make sure to import the CSS file

const classes = [
  { id: 1, name: "Math", description: "Learn advanced mathematics.", professor: "John Doe" },
  { id: 2, name: "Science", description: "Explore the world of science.", professor: "Jane Smith" },
  { id: 3, name: "English", description: "Improve your English skills.", professor: "Emily Turner" }
];

function Classroom() {
  let { classId } = useParams();
  const classInfo = classes.find(cls => cls.id.toString() === classId);
  const [canvasRef, setCanvasRef] = useState(null);

  return (
    <div className="classroom-container">
      <div className="header">{classInfo.name} - Taught by: {classInfo.professor}</div>
      <div className="description">{classInfo.description}</div>
      <div className="whiteboard-container">
        <CanvasDraw
          ref={canvas => setCanvasRef(canvas)}
          brushColor="black"
          brushRadius={2}
          lazyRadius={0}
          canvasWidth={800}
          canvasHeight={400}
        />
      </div>
      <button onClick={() => canvasRef.undo()}>
        Undo
      </button>
      <button onClick={() => canvasRef.clear()}>
        Clear
      </button>
    </div>
  );
}

export default Classroom;
