import './ProjectListFooter.css';
import Card from '../../../../util/Card/Card';
import AddCard from './AddCard';

export default function ProjectListFooter() {
  const addCardHandler = () => {
    console.log('add new card');
  };
  return (
    <div className='project-list-footer'>
      <Card className='add-card'>
        <AddCard onClick={addCardHandler} />
      </Card>
    </div>
  );
}
