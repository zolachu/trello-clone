import AddIcon from '@mui/icons-material/Add';
import './AddCard.css';

export default function AddCard({ onClick }) {
  return (
    <button className='add-card-button' onClick={onClick}>
      <AddIcon /> <p>Add a card</p>
    </button>
  );
}
