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
    // <div className='project-list-body'>
    //   ProjectListBody
    <ul className='project-list-body'>{listBody}</ul>
    // </div>
  );
}
