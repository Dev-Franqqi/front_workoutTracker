import {useContext} from 'react'
import { WorkoutsContext } from '../../Workoutcontext'
const useWorkoutContext = () => {

    const context  = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkoutContext must be used withtin the app component tree')
    }
    


    return context

    
}
 
export default useWorkoutContext;