import './ProjectList.css';
import Card from '../../../util/Card/Card';
import ProjectListBody from './ProjectListBody/ProjectListBody';
import ProjectListFooter from './ProjectListFooter/ProjectListFooter';
import ProjectListHeader from './ProjectListHeader/ProjectListHeader';
import { useState } from 'react';

export default function ProjectList() {
  const [count, setCount] = useState(0);

  const addCardHandler = () => {
    console.log(count);
    setCount((c) => c + 1);
  };
  return (
    <div className='temp-list'>
      <Card className='project-list'>
        <ProjectListHeader />
        <ProjectListBody count={count} />
        {/* <div className='project-list'>Project List One Gray Item</div>; */}
        <ProjectListFooter onClick={addCardHandler} />
      </Card>
    </div>
  );
}
