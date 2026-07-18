import { useEffect, useState } from "react";

function WelcomeScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="welcome-screen">
      <h1>Welcome to GizmoGrid</h1>
      <p>Your world, your soundtrack.</p>
    </div>
  );
}

export default WelcomeScreen;