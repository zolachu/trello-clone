import ProjectListCard from './ProjectListCard/ProjectListCard';
import './ProjectListBody.css';

export default function ProjectListBody({ count }) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  console.log(arr.length);
  const listBody = arr.map((i) => (
    <li>
      <ProjectListCard />
    </li>
  ));

  return (
    <div className='project-list-body'>
      ProjectListBody
      {/* <ProjectListCard />
      <ProjectListCard /> <ProjectListCard /> */}
      <ul>{listBody}</ul>
      {/* <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> <ProjectListCard />
      <ProjectListCard /> */}
    </div>
  );
}
