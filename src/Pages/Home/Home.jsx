import FeatureDestination from "../FeatureDestination/FeatureDestination";
import Offers from "../Offers/Offers";
import Cover from "./Cover/Cover";
import SubCribe from "./Subscribe/SubCribe";
import Travelblog from "./Travelvlog/Travelblog";

const Home = () => {
  return (
    <div>
      <div>
        <Cover></Cover>
      </div>
      <div>
        <FeatureDestination></FeatureDestination>
      </div>
      <div>
        <Offers></Offers>
      </div>
      <div>
        <Travelblog></Travelblog>
      </div>
      <div>
        <SubCribe></SubCribe>
      </div>
    </div>
  );
};

export default Home;
