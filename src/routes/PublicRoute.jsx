
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";




function PublicRoute({ component: Component, redirectTo = '/' }) {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      const uid = user.uid;
        return uid  ?  <Navigate to={redirectTo} /> : Component;
});
}

export default PublicRoute;