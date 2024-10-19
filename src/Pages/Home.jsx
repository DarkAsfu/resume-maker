import Banner from "../Components/Banner";
import Features from "../Components/Features";
import HowWorks from "../Components/HowWorks";
import Test from "../Components/Test";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            {/* <HowWorks/> */}
            <Test/>
        </div>
    );
};

export default Home;