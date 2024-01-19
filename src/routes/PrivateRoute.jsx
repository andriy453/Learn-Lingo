import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function PrivateRoute({ component: Component, redirectTo }) {
    const [users, setUser] = useState(true)
        const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        // const uid = user.uid;
                    console.log(user)
        if (user) {
            setUser(true)
        }
        else {
         setUser(false)
        }

        // return uid && <Navigate to={redirectTo} />
   
    });
      return users ? Component : <Navigate to={redirectTo} />;

}

export default PrivateRoute; 