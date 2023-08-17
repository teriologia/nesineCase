import * as React from "react";
import { betDataType } from "../../types";
import { TableVirtuoso } from "react-virtuoso";

import "./tablestyles.css";
import TableHeader from "./tableHeader";
import Cells from "./tableCells";

interface TableProps {
  data: [betDataType] | [];
}

const Table = (props: TableProps) => {
  const { data } = props;
  console.log(data);
  return (
    <div id="tableContainer">
      <TableVirtuoso
        className="list"
        totalCount={data.length}
        itemContent={(index) => <Cells index={index} data={data} />}
        overscan={3}
        fixedHeaderContent={() => <TableHeader length={data.length} />}
      />
    </div>
  );
};

export default Table;
