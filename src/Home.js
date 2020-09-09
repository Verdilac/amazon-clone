import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />

          <Product
            title="Amazon Alexa"
            price={69.99}
            image="https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDFlLzkxODM0Njg0ODY2ODYuanBnfDkxNTNmNTk2YjdmOTY1ZTNmYWQ0OWU1NGY1MGVmMzk3NTBmOWZjMjVkZGY5NTQ5MmNhY2I3YmZiOWIzNzlmYWI"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Apple watch"
            price={429.0}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXR12_VW_34FR+watch-44-alum-silver-nc-nike5s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1583262350521,1590016244000"
            rating={4}
          />

          <Product
            title="Mac Book Air 2020"
            price={1299.0}
            image="data:image/jpeg;base64,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X89yjahO9b4Hi5u+fz3JtQb0+IPFzd8/nu7U2oN6fEHi5u+fz3dqbUG9PiDxc3fP57k2oN6fEHi5u+fz3dqbUJ3rHi5uV/Pd2ptQb1jxc3K/nu7U2oN6y2JVUNwk7CIOIucRYZhNqDesyGgt3zucU24Ruz4PoDcrucU2oN6x9Abvnc4ptQb1lr6uYQWkuIcCCC4yIN4Tbg3pUFWsFgL7MWG6zrTahO9ZXxczK/nv7U2oRvWPFzN8/nv7U2oTvWPFzN8/nv7U2oRvT8Dxc3fP57+1NqDenxB4ubvn89/am1BvT4g8XN3z+e/tTag3p8QeLWb5/Pf2ptQb0+IU8Ws3z+e/tTag3rfBe2gMGNx0vf2qduEbtl9GocOHPAYG4VpIFrtJxqYrEdlbXtbvLOrKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP//Z"
            rating={5}
          />
          <Product
            title="Nulaxy Laptop Stand"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51749HV1GVL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Smsung 49 Curved Ultra Wide Monitor"
            price={799.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
