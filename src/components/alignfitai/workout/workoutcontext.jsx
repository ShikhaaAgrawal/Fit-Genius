import { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workoutPlan, setWorkoutPlan] = useState(null);

    return (
        <WorkoutContext.Provider value={{ workoutPlan, setWorkoutPlan }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => useContext(WorkoutContext);
