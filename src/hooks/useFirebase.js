import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../Components/Shared/Login/firebase/firebase.init";
authInitialize();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // Google Log In
    const googleLogIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .finally(() => setIsLoading(false));
    }
    // email Log in and registration toggle
  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
  // name change 
  const handleNameChange = e => {
    setName(e.target.value);
  }
  // email change
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  //change password
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  //Handle Registration
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }
    // log in
    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }
  // prosession log in
  const processLogin = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        setError('');
        
      })
      .catch(error => {
        setError('User name or password not matched');
      })
  }
  // register new user
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }
  // Varify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
      })
  }
  // Handle reset pass
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }
    // use effect for logged in
    useEffect(() => {
      const unsubcribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)
          } else {
              setUser({ })
          }
          setIsLoading(false)
      });
      return () => unsubcribed;
  }, [isLoading])
  // log out user 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    // return all variable and state
    return {
        user,
        isLogin,
        name,
        email,
        password,
        error,
        handlePasswordChange,
        googleLogIn,
        isLoading,
        logOut,
        handleRegistration,
        handleNameChange,
        toggleLogin,
        registerNewUser,
        processLogin, 
        handleResetPassword,
        handleEmailChange,
        verifyEmail
    }

};

export default useFirebase;