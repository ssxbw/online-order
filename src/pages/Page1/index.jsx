import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Breadcrumb from "components/Breadcrumb";
import Column1 from "components/Column1";
import Globalheader from "components/Globalheader";
import Sidebar1 from "components/Sidebar1";

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute bottom-[0] h-[1025px] md:h-[1546px] sm:h-[2312px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute flex md:h-[178px] h-[198px] justify-end right-[0] top-[0] w-[86%] md:w-full">
            <div className="bg-blue_500 h-[72px] mb-6 ml-[26px] mt-auto w-[72px]"></div>
            <div className="absolute bg-white_A700 flex flex-col gap-2 md:h-auto h-full inset-[0] items-center justify-end m-auto max-w-[1232px] pt-4 sm:px-5 px-6 w-full">
              <Breadcrumb
                className="flex flex-col items-center justify-start w-full"
                orderformtext="航班"
              />
              <div className="flex flex-col h-11 md:h-auto items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-black_900_d8 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    预订机票
                  </Text>
                </div>
              </div>
              <Column1
                className="flex flex-col items-start justify-start sm:w-full"
                usersearchbutton="搜索"
              />
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-plusjakartasans gap-[15px] justify-start right-[5%] w-[79%]">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1127px] w-full">
              <Text
                className="font-bold text-black_900_01 w-auto"
                as="h4"
                variant="h4"
              >
                折扣机票
              </Text>
              <Text
                className="font-medium text-indigo_A400 w-auto"
                as="h5"
                variant="h5"
              >
                查看全部
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-inter gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 ml-3 md:ml-[0] w-[92%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_group43.svg"
                          className="h-8 w-12"
                          alt="groupFortyThree"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          5.50
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          7.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $230
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      onClick={() => navigate("/page2")}
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_computer.svg"
                          className="h-8 w-12"
                          alt="computer"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          4.30
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_One"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          6.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_One"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $360
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_ticket.svg"
                          className="h-8 w-12"
                          alt="ticket"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          2.20
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_Two"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-center w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          3.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          DAC (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_Two"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $550
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_group43.svg"
                          className="h-8 w-12"
                          alt="groupFortyThree"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          5.50
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          7.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $230
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_computer.svg"
                          className="h-8 w-12"
                          alt="computer"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          4.30
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_One"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          6.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_One"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $360
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_ticket.svg"
                          className="h-8 w-12"
                          alt="ticket"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          2.20
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_Two"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-center w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          3.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          DAC (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_Two"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $550
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_group43.svg"
                          className="h-8 w-12"
                          alt="groupFortyThree"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          5.50
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          7.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $230
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_computer.svg"
                          className="h-8 w-12"
                          alt="computer"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          4.30
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_One"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          6.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          CCU (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_One"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $360
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_200_01 h-px w-full" />
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start py-4 rounded-[16px] shadow-bs3 w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-28 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_ticket.svg"
                          className="h-8 w-12"
                          alt="ticket"
                        />
                        <Text
                          className="font-medium text-gray_900_01 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          IN 230
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-gray_700 text-right w-auto"
                        as="h6"
                        variant="h6"
                      >
                        01 hr 40min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          2.20
                        </Text>
                        <Text className="text-gray_700 w-auto" variant="body1">
                          DEL (Delhi){" "}
                        </Text>
                      </div>
                      <div className="h-9 relative w-[48%]">
                        <Img
                          src="images/img_group50.svg"
                          className="absolute h-[7px] inset-[0] justify-center m-auto"
                          alt="groupFifty_Two"
                        />
                        <Button
                          className="absolute flex h-9 inset-[0] items-center justify-center m-auto w-9"
                          shape="icbCircleBorder16"
                          size="smIcn"
                          variant="icbFillDeeporange700"
                        >
                          <Img
                            src="images/img_reply.svg"
                            className="h-6"
                            alt="reply_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-end justify-center w-auto">
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          3.30
                        </Text>
                        <Text
                          className="text-gray_700 text-right w-auto"
                          variant="body1"
                        >
                          DAC (Kolkata)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_200_75 h-px w-full" />
                  <div className="flex flex-col gap-4 items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          src="images/img_chair.svg"
                          className="h-4 w-4"
                          alt="chair_Two"
                        />
                        <Text
                          className="font-normal text-gray_700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Business Class
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="font-light text-gray_700 text-right w-auto"
                          as="h6"
                          variant="h6"
                        >
                          From
                        </Text>
                        <Text
                          className="font-semibold text-gray_900_01 text-right w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $550
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[296px]"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillDeeporange700"
                    >
                      Check
                    </Button>
                  </div>
                </div>
              </div>
            </List>
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

export default Page1;
