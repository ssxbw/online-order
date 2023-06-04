import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Breadcrumb from "components/Breadcrumb";
import Globalheader from "components/Globalheader";
import Sidebar1 from "components/Sidebar1";

const Page2 = () => {
  return (
    <>
      <div className="bg-gray_100 font-roboto h-[882px] mx-auto relative w-full">
        <div className="absolute bottom-[0] md:h-[1083px] h-[859px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute md:h-[1083px] sm:h-[640px] h-[834px] inset-y-[0] my-auto right-[0] w-[86%] md:w-full">
            <div className="bg-blue_500 h-[72px] ml-[26px] mt-[102px] w-[72px]"></div>
            <div className="absolute bg-white_A700 flex flex-col gap-2 md:h-auto h-full inset-[0] items-center justify-start m-auto max-w-[1232px] pt-4 sm:px-5 px-6 w-full">
              <Breadcrumb
                className="flex flex-row font-roboto items-center justify-start w-full"
                p2ndtolastitemla="航班"
                separator="/"
                orderformtext="订单填写"
              />
              <div className="flex flex-col font-roboto items-center justify-start max-w-4xl w-full">
                <Text
                  className="text-blue_gray_900 w-auto"
                  as="h2"
                  variant="h2"
                >
                  机票信息
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col font-montserrat items-start justify-start max-w-4xl outline outline-[0.5px] outline-blue_800_3f sm:px-5 px-6 py-10 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-blue_gray_900 w-auto"
                        as="h1"
                        variant="h1"
                      >
                        Mon, 14 Jun 2021
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_900 w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Economy
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-[3px] items-center justify-start w-full">
                      <Text
                        className="font-semibold text-blue_gray_900"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-blue_gray_900 text-base font-montserrat text-left font-bold">
                          <>
                            Bengaluru
                            <br />
                          </>
                        </span>
                        <span className="text-blue_gray_900 text-base font-montserrat text-left font-normal">
                          (BLR)
                        </span>
                      </Text>
                      <Line className="bg-black_900 h-px w-[2%]" />
                      <Img
                        src="images/img_laplane.svg"
                        className="h-6 w-6"
                        alt="laplane"
                      />
                      <Line className="bg-black_900 h-px w-[2%]" />
                      <Text
                        className="font-semibold max-w-[91px] md:max-w-full text-blue_gray_900 text-right"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-blue_gray_900 text-base font-montserrat font-bold">
                          New Delhi
                        </span>
                        <span className="text-blue_gray_900 text-base font-montserrat">
                          {" "}
                        </span>
                        <span className="text-blue_gray_900 text-base font-montserrat font-normal">
                          (DEL)
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Img
                        src="images/img_image1.png"
                        className="h-7 md:h-auto object-cover rounded w-16"
                        alt="imageOne"
                      />
                      <Text
                        className="font-normal text-black_900 text-center w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Indigo
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <Text
                        className="font-semibold text-black_900 text-center w-auto"
                        as="h3"
                        variant="h3"
                      >
                        15:45
                      </Text>
                      <Line className="bg-black_900 h-px w-[8%]" />
                      <div className="flex flex-col gap-1 items-start justify-start w-[66px]">
                        <Text
                          className="font-bold text-blue_gray_900 text-center w-full"
                          as="h4"
                          variant="h4"
                        >
                          4h 15m
                        </Text>
                        <Text
                          className="font-normal italic text-center text-deep_orange_300 w-full"
                          as="h4"
                          variant="h4"
                        >
                          1 transit
                        </Text>
                      </div>
                      <Img
                        src="images/img_line5.svg"
                        className="flex-1 h-px max-h-px"
                        alt="lineFive_One"
                      />
                      <Text
                        className="font-semibold text-black_900 text-center w-auto"
                        as="h3"
                        variant="h3"
                      >
                        20:05
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-roboto text-blue_gray_900"
                as="h2"
                variant="h2"
              >
                信息填写
              </Text>
              <div className="bg-white_A700 flex flex-col font-montserrat gap-6 items-start justify-start max-w-4xl outline outline-[0.5px] outline-blue_800_3f sm:px-5 px-6 py-10 rounded-[16px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-semibold text-black_900 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    乘客信息
                  </Text>
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[848px] w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal text-blue_gray_900_01 w-full"
                        as="h6"
                        variant="h6"
                      >
                        姓名
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_100_02 text-blue_gray_100_02 text-left text-sm w-full"
                        name="frame222"
                        placeholder="请输入姓名"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray50"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal text-blue_gray_900_01 w-full"
                        as="h6"
                        variant="h6"
                      >
                        身份证号
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_100_02 text-blue_gray_100_02 text-left text-sm w-full"
                        name="frame222_One"
                        placeholder="请输入身份证号"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray50_1"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal text-blue_gray_900_01 w-full"
                        as="h6"
                        variant="h6"
                      >
                        座位
                      </Text>
                      <Input
                        wrapClassName="flex w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_100_02 text-blue_gray_100_02 text-left text-sm w-full"
                        name="frame222_Two"
                        placeholder="请选择座位"
                        suffix={
                          <Img
                            src="images/img_lacalendarday.svg"
                            className="ml-[35px] my-auto"
                            alt="la:calendar-day"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray50"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-semibold text-black_900 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    联系方式
                  </Text>
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[848px] w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal text-blue_gray_900_01 w-full"
                        as="h6"
                        variant="h6"
                      >
                        电子邮箱
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal p-0 placeholder:text-blue_gray_100_02 text-blue_gray_100_02 text-left text-sm w-full"
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray50"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal text-blue_gray_900_01 w-full"
                        as="h6"
                        variant="h6"
                      >
                        手机号码
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-medium p-0 placeholder:text-blue_gray_100_02 text-blue_gray_100_02 text-left text-sm w-full"
                        name="frame222_Three"
                        placeholder="请输入您的手机号码"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray50"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-montserrat leading-[normal] text-center text-sm text-white_A700 w-[433px]"
                shape="RoundedBorder8"
                size="md"
                variant="FillBlue800"
              >
                下一步
              </Button>
            </div>
          </div>
          <Sidebar1 className="!sticky !w-[221px] bg-white_A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto shadow-bs1 top-[0]" />
        </div>
        <Globalheader
          className="absolute bg-gray_900 flex flex-row flex-wrap h-12 md:h-auto inset-x-[0] items-center justify-between max-w-[1440px] mx-auto px-4 top-[0] w-full"
          antdesignpro="在线支付系统"
        />
      </div>
    </>
  );
};

export default Page2;
