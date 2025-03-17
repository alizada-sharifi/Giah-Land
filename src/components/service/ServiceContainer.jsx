import { serviceData } from "../../data/ServiceData";
import Item from "./Item";

function ServiceContainer() {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-xl text-primary md:font-bold md:text-2xl ">
        خدمات گیاه پزشکی
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {serviceData.map((service, index) => {
          return <Item {...service} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ServiceContainer;
