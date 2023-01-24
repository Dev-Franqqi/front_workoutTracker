import {useContext} from 'react'
import {Authcontext}  from '../../Authcontext'
const useAuthContext = () => {

    const context  = useContext(Authcontext)

    if(!context){
        throw Error('useWorkoutContext must be used withtin the app component tree')
    }
    


    return context

    
}
 
export default useAuthContext;