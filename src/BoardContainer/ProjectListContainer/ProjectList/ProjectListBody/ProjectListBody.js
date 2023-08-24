import ProjectListCard from './ProjectListCard/ProjectListCard';
import './ProjectListBody.css';

export default function ProjectListBody() {
  return (
    <div className='project-list-body'>
      ProjectListBody
      <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      {/* <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> */}
    </div>
  );
}
