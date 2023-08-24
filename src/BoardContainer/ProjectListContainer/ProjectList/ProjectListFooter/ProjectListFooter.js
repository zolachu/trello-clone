import './ProjectListFooter.css';
import Card from '../../../../util/Card/Card';
import AddIcon from '@mui/icons-material/Add';

export default function ProjectListFooter() {
  return (
    <div className='project-list-footer'>
      <Card className='add-card'>
        <AddIcon /> <p>Add a card</p>
      </Card>
    </div>
  );
}
