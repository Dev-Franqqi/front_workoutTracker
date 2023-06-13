import { useEffect } from "react"
import WorkoutForm from "../../WorkoutForm"
import useWorkoutContext from "../useWorkoutContext"
import useAuthContext from "../useAuthContext"
// components
import WorkoutDetails from "../../WorkoutDetails"

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()
  const {user} = useAuthContext();

  //fetch workpouts
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts',{
        headers:{
          'Authorization' :`Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    if(user){
    fetchWorkouts()

    }
    
  }, [dispatch,user])

  return (
    <div className="home">
      <div className="workouts">
      {workouts=== null && <h3>NOTHING TO SEE HERE</h3>}

        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
       
      </div>
      <WorkoutForm />
    </div>
  )
}
export default Home