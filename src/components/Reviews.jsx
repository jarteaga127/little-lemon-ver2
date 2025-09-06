import ReviewCard from "./ReviewCard";

const Reviews = () => {
    return ( 
        <section className="reviews">
            <h2>What our customers are saying</h2>
            <div className="reviews-grid">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </section>
     );
}
 
export default Reviews;