

const Shimmer = () => {
    return (
        new Array(20).fill(0).map((card, index) =>{
            
            return(
                <div className="my-4 me-4">
                <div className="customCard d-flex flex-column">
                    <div className="shimmerImage rounded-3 shine" >
                    </div>
                    <div className="nameContainer shine"></div>
                    <div className="d-flex gap-1">
                        <div className="ratingContainer shine me-auto"></div>
                        <div className="timeContainer shine"></div>
                    </div>
                    <div className="cusineContainer shine"></div>
                    <div className="locationContainer shine"></div>
                </div>
        </div>
            )
        })
        
    )
}
export default Shimmer