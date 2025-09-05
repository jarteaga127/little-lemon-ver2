//import HeroImg from "../assets/pictures/restauranfood-001";

const HeroSec = () => {
    return ( 
        <section className="hero-sec">
            <div className="hero-img-cont"><img src="src/assets/pictures/restauranfood-001.jpg" alt="A chef is holding bruschetta." /></div>
            
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Tokyo</h2>
                <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitte ireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>
                <button className="main-button">Book a table with us.</button>
            </div>
        </section>
     );
}
 
export default HeroSec;