import MoneyStatusBlock from "@/components/MoneyStatusBlock";
import { moneyStatus } from "@/constraints/constraints";

import React from "react";

const MoneyStatus = () => {
  return (
    <div className="flex gap-2 justify-evenly pb-2">
      {moneyStatus.map((data,i) => {
        return (
          <MoneyStatusBlock
          key={i}
            name={data.name}
            icon={data.icon}
            alt={data.alt}
            ballance={data.ballance}
          />
        );
      })}
    </div>
  );
};

export default MoneyStatus;
