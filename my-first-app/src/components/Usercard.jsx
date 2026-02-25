function Usercard({name,age,city}) {
  return (
    <div className="usercard">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>   
    </div>
  );
}
export default Usercard;