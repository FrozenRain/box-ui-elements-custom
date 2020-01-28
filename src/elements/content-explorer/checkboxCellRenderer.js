import React from 'react';
import Checkbox from '../../components/checkbox/Checkbox';

export default (handleChange: (idx: number, e: SyntheticInputEvent<HTMLInputElement>) => void, label: string) =>
  ({ cellData, rowIndex }: { cellData: boolean, rowIndex: number }) =>
    <Checkbox isChecked={cellData} label={label} name="is-selected" hideLabel={true} onChange={e => handleChange(rowIndex, e)} />;
