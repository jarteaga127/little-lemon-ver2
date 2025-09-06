import AboutTokyo from "./AboutTokyo";
import HeroSec from "./HeroSec";
import OurSpecials from "./OurSpecials";
import Reviews from "./Reviews";

const HomePage = () => {
    return ( 
        <main>
        <HeroSec/>
        <OurSpecials/>
        <Reviews/>
        <AboutTokyo/>
        </main>
     );
}
 
export default HomePage;