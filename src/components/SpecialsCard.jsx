const SpecialsCard = () => {
    return ( 
        <div className="specials-card">
            <div className="specials-img"></div>
            <div className="specials-text">
                <div className="dish-name-price">
                    <span className="dish-name">Dish 1</span>
                    <span className="dish-price">¥1000</span>
                </div>
                <div className="dish-descript"><p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru.</p> </div>
                <div className="delivery-price"><p>Delivery ¥200</p></div>
            </div>
        </div>
     );
}
 
export default SpecialsCard;