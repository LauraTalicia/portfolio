import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, FormEvent } from "react";
import { auth } from "../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signingoogle = () => {
    const provider = new GoogleAuthProvider();

    const authPopup = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
      <button type="button" onClick={signingoogle}>
        Google
      </button>
    </form>
  );
};

export default LoginPage;
