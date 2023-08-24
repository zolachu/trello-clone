import './ProjectListFooter.css';
import Card from '../../../../util/Card/Card';
import AddCard from './AddCard';

export default function ProjectListFooter({ onClick }) {
  return (
    <div className='project-list-footer'>
      <Card className='add-card'>
        <AddCard onClick={onClick} />
      </Card>
    </div>
  );
}
