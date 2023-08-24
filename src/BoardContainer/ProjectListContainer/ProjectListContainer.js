import Card from '../../util/Card/Card';
import ProjectList from './ProjectList/ProjectList';
import './ProjectListContainer.css';
import { useState } from 'react';

export default function ProjectListContainer() {
  //    const projectList = [];
  const [projectList, setProjectList] = useState([]);

  const addAnotherList = () => {
    console.log(projectList);
    setProjectList((pl) => {
      return [...pl, pl.length];
    });

    alert('clicked another list');
  };

  const mappedProjectList = projectList.map((projectList, index) => {
    return (
      <li key={index}>
        <ProjectList /> {projectList}
      </li>
    );
  });

  return (
    /*<div className='main-container'>*/
    /* <div className='project-list-container'> */
    /* <ul className='project-list-container'>{mappedProjectList}</ul> */
    <div className='project-list-container'>
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList />
      <ProjectList onClick={addAnotherList} />
      <Card>
        <button onClick={addAnotherList}></button>
      </Card>
    </div>
    // </div>
  );
}
