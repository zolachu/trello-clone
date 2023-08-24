import './ProjectList.css';
import Card from '../../../util/Card/Card';
import ProjectListBody from './ProjectListBody/ProjectListBody';
import ProjectListFooter from './ProjectListFooter/ProjectListFooter';
import ProjectListHeader from './ProjectListHeader/ProjectListHeader';
export default function ProjectList() {
  return (
    <Card className='project-list'>
      <ProjectListHeader />
      <ProjectListBody />
      {/* <div className='project-list'>Project List One Gray Item</div>; */}
      <ProjectListFooter />
    </Card>
  );
}
