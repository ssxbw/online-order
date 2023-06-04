import React from "react";

import { Img, Text } from "components";

const Globalheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-3 items-start justify-start pr-4 py-2">
            <Img
              src="images/img_logo.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="logo"
            />
            <Text
              className="font-bold font-roboto text-white_A700 w-auto"
              as="h3"
              variant="h3"
            >
              {props?.antdesignpro}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-end w-auto">
            <Img
              src={props?.iconwrapper}
              className="h-full w-[38px]"
              alt="iconwrapper"
            />
            <div className="h-12 md:h-6 p-3 relative w-12">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto p-1 w-6">
                <Img src="images/img_bell.svg" className="h-4 w-4" alt="bell" />
              </div>
              <div className="absolute flex flex-col items-center justify-start right-1/4 top-[0] w-[46%]">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="bg-red_A200 font-normal font-robotomono justify-center px-2 rounded-[10px] text-center text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      {props?.userbadgecount}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-12 md:h-auto items-center justify-start px-3">
              <div className="flex flex-col items-center justify-center pr-2 w-8">
                <Img
                  src={props?.setting}
                  className="h-6 md:h-auto object-cover w-6"
                  alt="setting"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="font-normal font-roboto text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  {props?.username}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Globalheader.defaultProps = {
  antdesignpro: "在线支付系统",
  userbadgecount: "11",
  username: "user_name",
};

export default Globalheader;
