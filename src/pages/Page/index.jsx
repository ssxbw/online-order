import React from "react";

import { Button, Img, Text } from "components";
import Breadcrumb from "components/Breadcrumb";
import Column from "components/Column";
import Globalheader from "components/Globalheader";
import Sidebar1 from "components/Sidebar1";

const Page = () => {
  return (
    <>
      <div className="bg-gray_100 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute bottom-[0] md:h-[1312px] sm:h-[2576px] h-[923px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute flex md:h-[178px] h-[198px] justify-end right-[0] top-[0] w-[86%] md:w-full">
            <div className="bg-blue_500 h-[72px] mb-6 ml-[25px] mt-auto w-[72px]"></div>
            <div className="absolute bg-white_A700 flex flex-col gap-2 md:h-auto h-full inset-[0] items-center justify-end m-auto max-w-[1232px] pt-4 sm:px-5 px-6 w-full">
              <Breadcrumb
                className="flex flex-col items-center justify-start w-full"
                orderformtext="酒店"
              />
              <div className="flex flex-col h-11 md:h-auto items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-black_900_d8 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    预订酒店
                  </Text>
                </div>
              </div>
              <Column
                className="flex flex-col items-center justify-start sm:w-full"
                searchbutton="搜索"
              />
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-plusjakartasans gap-4 items-start justify-start right-[5%] w-[79%]">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1127px] md:ml-[0] ml-[3px] w-full">
              <Text
                className="font-bold text-black_900_01 w-auto"
                as="h4"
                variant="h4"
              >
                特价房
              </Text>
              <Text
                className="font-medium text-indigo_A400 w-auto"
                as="h5"
                variant="h5"
              >
                查看全部
              </Text>
            </div>
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[96%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      The Aston Vill Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Alice Springs NT 0870, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $200,7
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3_209x257.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_favorite_indigo_a400.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Golden Pelece Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Nothern Territory 0872, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $175,3
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      The Aston Vill Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Alice Springs NT 0870, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $200,7
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3_1.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_favorite_indigo_a400.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Golden Pelece Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Nothern Territory 0872, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $175,3
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      The Aston Vill Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Alice Springs NT 0870, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $200,7
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3_209x257.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_favorite_indigo_a400.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Golden Pelece Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Nothern Territory 0872, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $175,3
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      The Aston Vill Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Alice Springs NT 0870, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $200,7
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 h-[209px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
                  <Img
                    src="images/img_image3_209x257.png"
                    className="h-[209px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute flex h-8 items-center justify-center right-[5%] rounded-[50%] top-[6%] w-8"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_favorite_indigo_a400.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col gap-2 items-start justify-start p-3 rounded-bl-[12px] rounded-br-[12px] shadow-bs2 w-[257px]">
                  <div className="flex flex-row font-plusjakartasans gap-[50px] items-center justify-start w-full">
                    <Text
                      className="font-bold text-black_900_01 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Golden Pelece Hotel
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        src="images/img_antdesignstarfilled.svg"
                        className="h-5 w-5"
                        alt="antdesignstarfi"
                      />
                      <Text
                        className="font-bold text-black_900_01 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium font-plusjakartasans text-blue_gray_400 w-full"
                    as="h6"
                    variant="h6"
                  >
                    Nothern Territory 0872, Australia
                  </Text>
                  <Text
                    className="font-bold font-inter text-indigo_A400 w-full"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-indigo_A400 text-sm font-plusjakartasans text-left">
                      $175,3
                    </span>
                    <span className="text-indigo_A400 text-sm text-left">
                      {" "}
                    </span>
                    <span className="text-blue_gray_400 text-xs font-plusjakartasans text-left font-medium">
                      /night
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Sidebar1 className="!sticky !w-[221px] bg-white_A700 flex font-roboto h-screen md:hidden justify-start left-[0] overflow-auto shadow-bs1 top-[0]" />
        </div>
        <Globalheader
          className="absolute bg-gray_900 flex flex-row flex-wrap h-12 md:h-auto inset-x-[0] items-center justify-between max-w-[1440px] mx-auto px-4 top-[0] w-full"
          antdesignpro="在线支付系统"
        />
      </div>
    </>
  );
};

export default Page;
