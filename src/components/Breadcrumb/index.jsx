import React from "react";

import { Text } from "components";

const Breadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto">
          {!!props?.p2ndtolastitemla ? (
            <Text
              className="font-normal font-roboto text-black_900_72 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.p2ndtolastitemla}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-start px-2 w-[22px]">
          {!!props?.separator ? (
            <Text
              className="font-normal font-roboto text-black_900_72 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.separator}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="font-normal font-roboto text-black_900_d8 w-auto"
            as="h5"
            variant="h5"
          >
            {props?.orderformtext}
          </Text>
        </div>
      </div>
    </>
  );
};

Breadcrumb.defaultProps = { orderformtext: "订单填写" };

export default Breadcrumb;
