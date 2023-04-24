import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const { signWithGoogle, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (!loading && user) {
            navigate(from, { replace: true })
        }
    }, [loading, user, navigate]);

    if (loading) {
        return <div>Loading....</div>
    }


    return (
        <div>
            <h3>Please Login First view the {from} Page</h3>
            <button onClick={signWithGoogle}>Sign with Google</button>
        </div>
    );
}

export default Register;
