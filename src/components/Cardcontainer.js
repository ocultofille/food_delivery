import data from "../utils/config";
import Card from "./Card";
const Cardcontainer=()=>{
  let {resurl ,name,location,cusine,rating,delivery} = data[0];
    return(
        <div  className=" container d-flex flex-wrap  mt-5 mx-auto" >
          <Card name={name} location={location}  cusine={cusine} resurl={resurl} rating={rating} delivery={delivery}/>
          <Card name={name} location={location}  cusine={cusine} resurl={resurl} rating={rating} delivery={delivery}/>
          <Card name={name} location={location}  cusine={cusine} resurl={resurl} rating={rating} delivery={delivery}/>
          <Card name={name} location={location}  cusine={cusine} resurl={resurl} rating={rating} delivery={delivery}/>
          <Card name={name} location={location}  cusine={cusine} resurl={resurl} rating={rating} delivery={delivery}/>
        </div>
    )
};

export default Cardcontainer;
// className="container d-flex  flex-wrap  justify-content-between mt-5 d-inline-block;