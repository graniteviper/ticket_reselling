import React from "react";
import { faqDat } from "../data";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq_section";
import TicketDetails from "../Components/listing/Ticketdetails";

function AddEventstep3(){
    return (
        <div>
            <TicketDetails />
            <Faq  faqData ={faqDat} />
            
        </div>
    );
}

export default AddEventstep3;