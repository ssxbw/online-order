import React from "react";

import { Button, Img, Input } from "components";

const Column1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-7 items-start justify-start w-[94%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <Input
              wrapClassName="sm:flex-1 sm:w-full"
              className="font-normal font-roboto p-0 placeholder:text-black_900_3f text-black_900_3f text-left text-sm w-full"
              name="input"
              placeholder="出发地"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
            <Input
              wrapClassName="sm:flex-1 sm:w-full"
              className="font-normal font-roboto p-0 placeholder:text-black_900_3f text-black_900_3f text-left text-sm w-full"
              name="input_One"
              placeholder="目的地"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
          </div>
          <div className="flex flex-row items-end justify-between w-[91%] md:w-full">
            <Input
              wrapClassName="flex md:h-auto mt-2 w-[196px]"
              className="font-normal font-roboto p-0 placeholder:text-black_900_71 text-black_900_71 text-left text-sm w-full"
              name="inputiconright"
              placeholder="出发日"
              suffix={
                <div className="h-3 mt-0.5 mb-px ml-[35px] w-3 bg-black_900_3f">
                  <Img
                    src="images/img_calendar.svg"
                    className="my-auto"
                    alt="calendar"
                  />
                </div>
              }
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineBluegray100"
            ></Input>
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
                {props?.usersearchbutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Column1.defaultProps = { usersearchbutton: "搜索" };

export default Column1;
