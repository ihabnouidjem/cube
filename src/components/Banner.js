import React, { useContext } from "react";
import "../styles/banner.css";
import { dataContext } from "../App";

function Banner() {
  const { bannerData, settings } = useContext(dataContext);

  return (
    <div className="banner">
      {bannerData[settings.bannerState ? settings.bannerState : 0] && (
        <>
          <h1 className="banner-header">
            {/* fragrances, collections and gifts only for men */}
            {bannerData[settings.bannerState] &&
              bannerData[settings.bannerState].header}
          </h1>
          {bannerData[settings.bannerState].type == "banner" ? (
            <>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img first-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[0]
                    // "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw18fdac3f/assets/Y0017340/Y0017340_F001734009_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
                  }
                />
              </div>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img seconde-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[1]

                    // "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwdc12e3c6/assets/Y0996460/Y0996460_C099600755_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=800"
                  }
                />
              </div>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img third-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[2]
                    // "https://cdn.shopify.com/s/files/1/0341/3498/2789/products/3348901553261sq_300x.jpg?v=1642510583"
                  }
                />
              </div>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img fourth-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[3]
                    // "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwfa6057fe/assets/Y0057601/Y0057601_F005767100_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800"
                  }
                />
              </div>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img fifth-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[4]
                    // "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw5a673f4d/assets/Y0785220/Y0785220_F078522009_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460"
                  }
                />
              </div>
              <div
                style={{
                  backgroundColor: `#${
                    bannerData[settings.bannerState].color
                      ? bannerData[settings.bannerState].color
                      : "#ffffff"
                  }`,
                }}
                className="banner-img sixth-img"
              >
                <img
                  loading="lazy"
                  src={
                    bannerData[settings.bannerState].images[5]
                    // "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw5575836f/assets/Y0996100/Y0996100_C099600402_E01_GHC.jpg?sw=715&sh=773&sm=fit"
                  }
                />
              </div>
            </>
          ) : (
            <div className="banner-advertise">
              <img
                loading="lazy"
                src={bannerData[settings.bannerState].image}
              />
            </div>
          )}
        </>
      )}{" "}
    </div>
  );
}

export default Banner;
