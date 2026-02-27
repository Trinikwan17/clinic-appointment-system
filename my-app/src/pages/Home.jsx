import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoc from "../components/TopDoc";
import Banner from "../components/Banner";
function Home()
{
    return (
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopDoc/>
            <Banner />
        </div>
    );
}
export default Home;