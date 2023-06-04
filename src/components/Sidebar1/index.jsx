import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white_A700 h-[852px] mr-3.5 my-[3px] shadow-bs1 w-[94%]"></div>
        <div className="flex flex-col items-start justify-start py-1 w-[221px] md:w-full">
          <div className="flex flex-row items-center justify-evenly w-full">
            <div className="bg-white_A700 flex flex-col items-center justify-start py-[54px] shadow-bs1 w-[94%]">
              <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start mb-[511px] w-[207px]">
                <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                  <Img
                    src="images/img_wrapper.svg"
                    className="h-3.5 w-3.5"
                    alt="wrapper"
                  />
                  <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-start w-full">
                    <Text
                      className="font-normal font-roboto text-black_900_d8 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      首页
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                  <Img
                    src="images/img_wrapper_1.svg"
                    className="h-3.5 w-3.5"
                    alt="wrapper_One"
                  />
                  <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-start w-full">
                    <Text
                      className="font-normal font-roboto text-black_900_d8 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      酒店
                    </Text>
                  </div>
                </div>
                <div className="bg-light_blue_50 flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                  <Img
                    src="images/img_wrapper_blue_500_14x14.svg"
                    className="h-3.5 w-3.5"
                    alt="wrapper_Two"
                  />
                  <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-start w-full">
                    <Text
                      className="font-normal font-roboto text-blue_500 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      航班
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                  <Img
                    src="images/img_wrapper_black_900_14x14.svg"
                    className="h-3.5 w-3.5"
                    alt="wrapper_Three"
                  />
                  <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-start w-full">
                    <Text
                      className="font-normal font-roboto text-black_900_d8 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      个人中心
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start px-4 w-full">
                  <Img
                    src="images/img_wrapper_14x14.svg"
                    className="h-3.5 w-3.5"
                    alt="wrapper_Four"
                  />
                  <div className="flex flex-1 flex-col h-10 md:h-auto items-center justify-start w-full">
                    <Text
                      className="font-normal font-roboto text-black_900_d8 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      通知
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[66px] items-start justify-start w-[7%]"
              style={{
                backgroundImage: "url('images/img_sidemenufixedswitcher.svg')",
              }}
            >
              <Img
                src="images/img_arrowleft.svg"
                className="h-[11px] my-[26px] w-[11px]"
                alt="arrowleft"
              />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
