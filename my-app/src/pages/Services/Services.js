import React from "react";
import CardsSection from "../../components/CardsSection/CardsSection";
import servicesData from "../../data/servicesData";

const Services = () => {
    return (
        <div>
            <CardsSection sectionTitle={"Our Services"} cards={servicesData.cardsData}/>
        </div>
    )
}

export default Services