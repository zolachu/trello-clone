import './BoardContainer.css';
import ProjectListContainer from './ProjectListContainer/ProjectListContainer.js';
import BoardHeader from './BoardHeader/BoardHeader.js';

export default function BoardContainer() {
  return (
    <div className='board-container'>
      <BoardHeader />
      <ProjectListContainer>ee</ProjectListContainer>

      {/* <div style={{ height: '1000px' }}></div> */}
    </div>
  );
}
