import {Fragment} from "react";
const Card = ({resurl ,name,location,cusine,rating,delivery}) => {
    return (
        <Fragment >

            <div className="dummyCard mx-auto">
                <div className="">
                <img className="rounded-3" src={resurl} alt="resimg" width="100%"style={{height:"150px", objectFit:"cover"}} />
                </div>
                <p className="h5 fw-bolder  resName">{name}</p>
                <div className="d-flex gap-3">
                    <p className="badge bg-success">{rating}</p>
                    <p className="fw-bold ">{delivery}</p> 
                </div>
                <div className="text-secondary ">{cusine}</div>
                <div className="text-secondary">{location}</div>
            </div>
        </Fragment>
    )
};
export default Card;