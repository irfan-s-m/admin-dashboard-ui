import ChartBox from "../../components/chartBox/ChartBox";
import ChartBoxProduct from "../../components/chartBox/ChartBoxProduct";
import ChartBoxRatio from "../../components/chartBox/ChartBoxRatio";
import ChartBoxRevunue from "../../components/chartBox/ChartBoxRevunue";
import TopDeals from "../../components/homeComponents/topDeals/TopDeals";

const Home = () => {
    return (
        <div className="home grid grid-cols-4 px-6 gap-5 auto-rows-min-180">
            <div className="border border-solid border-softBg p-3 rounded-lg row-span-3 col-span-1"><TopDeals></TopDeals></div>
            <div className="border border-solid border-softBg p-3 rounded-lg"><ChartBox></ChartBox></div>
            <div className="border border-solid border-softBg p-3 rounded-lg"><ChartBoxProduct></ChartBoxProduct></div>
            <div className="border border-solid border-softBg p-3 rounded-lg row-span-3 col-span-1">box-4</div>
            <div className="border border-solid border-softBg p-3 rounded-lg"><ChartBoxRevunue></ChartBoxRevunue></div>
            <div className="border border-solid border-softBg p-3 rounded-lg"><ChartBoxRatio></ChartBoxRatio></div>
            <div className="border border-solid border-softBg p-3 rounded-lg col-span-2 row-span-2">box-7</div>
            <div className="border border-solid border-softBg p-3 rounded-lg">box-8</div>
            <div className="border border-solid border-softBg p-3 rounded-lg">box-9</div>
        </div>
    );
};

export default Home;