import * as React from 'react';

interface TableHeaderProps {
    length: number
}

const TableHeader = (props: TableHeaderProps) => {
    const {length} = props
  return (
    <div className='headerContainer'>
        <div className='titleCell'>
            {`Event Count: ${length}`}
        </div>
        <div className='commentsCell'>
            {`Yorumlar`}
        </div>
        <div className='optionsCells'>
            {``}
        </div>
        <div className='optionsCells'>
            {`1`}
        </div>
        <div className='optionsCells'>
            {`x`}
        </div>
        <div className='optionsCells'>
            {`2`}
        </div>
        <div className='optionsCells'>
            {`Alt`}
        </div>
        <div className='optionsCells'>
            {`Üst`}
        </div>
        <div className='optionsCells'>
            {`H1`}
        </div>
        <div className='optionsCells'>
            {`1`}
        </div>
        <div className='optionsCells'>
            {`x`}
        </div>
        <div className='optionsCells'>
            {`2`}
        </div>
        <div className='optionsCells'>
            {`H2`}
        </div>
        <div className='optionsCells'>
            {`1-X`}
        </div>
        <div className='optionsCells'>
            {`1-2`}
        </div>
        <div className='optionsCells'>
            {`X-2`}
        </div>
        <div className='optionsCells'>
            {`Var`}
        </div>
        <div className='optionsCells'>
            {`Yok`}
        </div>
        <div className='optionsCells'>
            {`+99`}
        </div>
    </div>
  );
};

export default TableHeader;