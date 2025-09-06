import { MdStarRate } from "react-icons/md";

const ReviewCard = () => {
    return ( 
        <div className="review-card">
            <div className="rating-bar">
                <span><MdStarRate/></span>
                <span><MdStarRate/></span>
                <span><MdStarRate/></span>
                <span><MdStarRate/></span>
                <span><MdStarRate/></span>
            </div>
            <div className="user-row">
                <div className="user-avatar">
                    <img src="src/assets/pictures/pexels-mart-production-9558604.jpg" alt="a man is wearing a baseball cap" />
                </div>
                <div className="user-name">
                    <span>Tommy Gunn</span>
                </div>
            </div>
            <div className="user-review">
                <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. </p>
            </div>
        </div>
     );
}
 
export default ReviewCard;