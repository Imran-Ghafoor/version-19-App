export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`hey ${user}`);
  };
  const handleHover = () => {
    alert("hey im hover");
  };
  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("imran")}
        onMouseEnter={handleHover}
      />
    </>
  );
};
const WelcomeUser = (props) => {
  return (
    <>
      <button onClick={props.onClick}>clickMe</button>
      <button onMouseEnter={props.onMouseEnter}>hoverMe</button>
    </>
  );
};
