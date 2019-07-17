import React from 'react'

const TechItem = ({ tech, onDelete }) => {
  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

export default TechItem;

