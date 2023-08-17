import * as React from "react";

interface TableHeaderProps {
  length: number;
}

const TableHeader = (props: TableHeaderProps) => {
  const { length } = props;
  return (
    <tr className="headerContainer">
      <td className="titleCell">{`Event Count: ${length}`}</td>
      <td className="commentsCell">{`Yorumlar`}</td>
      <td className="optionsCells">{``}</td>
      <td className="optionsCells">{`1`}</td>
      <td className="optionsCells">{`x`}</td>
      <td className="optionsCells">{`2`}</td>
      <td className="optionsCells">{`Alt`}</td>
      <td className="optionsCells">{`Üst`}</td>
      <td className="optionsCells">{`H1`}</td>
      <td className="optionsCells">{`1`}</td>
      <td className="optionsCells">{`x`}</td>
      <td className="optionsCells">{`2`}</td>
      <td className="optionsCells">{`H2`}</td>
      <td className="optionsCells">{`1-X`}</td>
      <td className="optionsCells">{`1-2`}</td>
      <td className="optionsCells">{`X-2`}</td>
      <td className="optionsCells">{`Var`}</td>
      <td className="optionsCells">{`Yok`}</td>
      <td className="optionsCells">{`+99`}</td>
    </tr>
  );
};

export default TableHeader;
