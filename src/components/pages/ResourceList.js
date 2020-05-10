import React from "react";
import useResources from '../hooks/useResources'

const ResourceList = ({ resourse }) => {
  const resourses = useResources(resourse);

  return (
  
    <ul>
      {resourses.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
