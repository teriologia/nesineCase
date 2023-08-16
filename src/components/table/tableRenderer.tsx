import * as React from "react";
import { betDataType } from "../../types";
import { Virtuoso } from "react-virtuoso";

import "./tablestyles.css";
import TableHeader from "./tableHeader";

interface TableProps {
  data: [betDataType] | [];
}

const Table = (props: TableProps) => {
  const { data } = props;
  console.log(data);
  return (
    <div id="tableContainer">
      <Virtuoso
        className="list"
        totalCount={data.length}
        itemContent={(index) => <p>item {index}</p>}
        overscan={3}
        components={{ Header: () => <TableHeader length={data.length} /> }}
      />
    </div>
  );
};

export default Table;
