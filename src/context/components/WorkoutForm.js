import {useState} from 'react'
import useWorkoutContext from './customHook/useWorkoutContext'
import useAuthContext from './customHook/useAuthContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext()
  
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyspace,setEmptyspace] = useState([]);
    const {user} = useAuthContext();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!user){
        setError("You must be logged in");
        return;
      }
      
  
      const workout = {title, load, reps}
      
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
        setEmptyspace(json.emptyspace)
      }
      if (response.ok) {
        setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        setEmptyspace('')
        dispatch({type: 'CREATE_WORKOUT', payload: json})
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Workout</h3>
  
        <label>Exercise Title:</label>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          className= {emptyspace.includes('title')?'error':''}
        />
  
        <label>Load (in kg):</label>
        <input 
          type="number" 
          onChange={(e) => setLoad(e.target.value)} 
          value={load}
          className = {emptyspace.includes('load')?'error':''}
        />
  
        <label>Number of Reps:</label>
        <input 
          type="number" 
          onChange={(e) => setReps(e.target.value)} 
          value={reps} 
          className= {emptyspace.includes('reps')?'error':''}
        />
  
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
  }
export default WorkoutForm;


