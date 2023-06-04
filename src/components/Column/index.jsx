import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Column = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-7 items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <Input
              wrapClassName="sm:flex-1 sm:w-full"
              className="font-normal font-roboto p-0 placeholder:text-black_900_3f text-black_900_3f text-left text-sm w-full"
              name="input"
              placeholder="目的地/酒店名称"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-row items-center justify-start px-3 py-1 rounded-sm w-64">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-normal font-roboto text-black_900_3f w-auto"
                  as="h5"
                  variant="h5"
                >
                  {props?.checkinlabel}
                </Text>
              </div>
              <div className="flex flex-col h-6 md:h-auto items-center justify-center px-2 w-8">
                <Img
                  src="images/img_swapright.svg"
                  className="h-4 w-4"
                  alt="swapright"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-normal font-roboto text-black_900_3f w-auto"
                  as="h5"
                  variant="h5"
                >
                  {props?.checkoutlabel}
                </Text>
              </div>
              <div className="flex flex-col h-6 md:h-auto items-center justify-start pl-1">
                <Img
                  src="images/img_calendar_black_900.svg"
                  className="h-3.5 w-3.5"
                  alt="calendar"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-[86%] md:w-full">
            <SelectBox
              className="font-normal font-roboto mb-2 text-black_900_3f text-left text-sm w-[46%] sm:w-full"
              placeholderClassName="text-black_900_3f"
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-6 w-4"
                  alt="arrow_down"
                />
              }
              size="sm"
              isSearchable={false}
              placeholder="酒店星级"
              shape="RoundedBorder2"
              isMulti={false}
              options={selectOptionsList}
              name="select"
              variant="OutlineBluegray100"
            />
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[86px]"
              leftIcon={
                <Img
                  src="images/img_search.svg"
                  className="mt-[3px] mb-px mr-2"
                  alt="search"
                />
              }
              shape="CustomBorderLR2"
              size="sm"
              variant="OutlineBlue500"
            >
              <div className="font-normal font-roboto text-base text-center text-white_A700">
                {props?.searchbutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Column.defaultProps = {
  checkinlabel: "入住时间",
  checkoutlabel: "退房时间",
  searchbutton: "搜索",
};

export default Column;
