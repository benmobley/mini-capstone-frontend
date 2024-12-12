import axios from "axios";

export function LogoutLink({ className }) {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <button className={className} href="#" onClick={handleClick}>
      Logout
    </button>
  );
}
