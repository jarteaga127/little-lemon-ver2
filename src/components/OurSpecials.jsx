import SpecialsCard from "./SpecialsCard";

const OurSpecials = () => {
    return ( 
        <section className="our-specials">
            <h2>Check out our specials</h2>
            <div className="specials-grid">
                <SpecialsCard/>
                <SpecialsCard/>
                <SpecialsCard/>
                <SpecialsCard/>
            </div>
        </section>
     );
}
 
export default OurSpecials;