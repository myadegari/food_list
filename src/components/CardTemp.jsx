import CardOption from "./CardOption";


export default function Card({
  foodName = "foodName",
  foodOptions = ["foodOption2", "foodOption1"],
  foodTags = ["#foodTag"],
}) {
  const foodOption = foodOptions!=null ? foodOptions.map((option) => {
    return <CardOption key={option} optionName={option} optionId={foodName} />;
  }):"";
  const foodtag = foodTags.map(tag =>{
    return <div key={tag} className="card-tag">#{tag}</div>;
  })
  return (
    <div className="card">
      <div className="card-header">{foodName}</div>
      <div className="detail">
        {/* <div className="card-body">{foodOption}</div> */}
      <div className="card-footer">{foodtag}</div>
      </div>
     
    </div>
  );
}
