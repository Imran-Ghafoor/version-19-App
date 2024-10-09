const EventHandling = () => {
  //   function handleButtonClick() {
  //     alert("hey im clicked");
  //   }
  const handleButtonClick = (user) => {
    console.log(`Hey ${user}, welcome`);

    // alert("hey im clicked");
  };
  return (
    <>
      {/* <button onClick={handleButtonClick} className="bg-red-500">
        Click Me
      </button> */}
      <button onClick={() => handleButtonClick("imran")} className="bg-red-500">
        Click Me
      </button>
      {/* <button onClick={()=> alert("hey im alert")}>watch</button> */}
    </>
  );
};
export default EventHandling;
