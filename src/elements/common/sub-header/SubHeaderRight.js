/**
 * @flow
 * @file Content sub header component
 * @author Box
 */

import React from 'react';
import Sort from './Sort';
import Add from './Add';
import GridViewSlider from '../../../components/grid-view/GridViewSlider';
import ViewModeChangeButton from './ViewModeChangeButton';
import { VIEW_FOLDER, VIEW_MODE_GRID } from '../../../constants';
import type { ViewMode } from '../flowTypes';
import './SubHeaderRight.scss';
import Checkbox from '../../../components/checkbox/Checkbox';
import includes from 'lodash/includes';
import keys from 'lodash/keys';
import { injectIntl } from 'react-intl';
import messages from '../../common/messages';

type Props = {
    canCreateNewFolder: boolean,
    canUpload: boolean,
    currentCollection: Collection,
    gridColumnCount: number,
    gridMaxColumns: number,
    gridMinColumns: number,
    maxGridColumnCountForWidth: number,
    onCreate: Function,
    onGridViewSliderChange: (newSliderValue: number) => void,
    onSortChange: Function,
    onUpload: Function,
    onViewModeChange?: (viewMode: ViewMode) => void,
    view: View,
    viewMode: ViewMode,
    checked: Collection,
    checkAll: Function,
    uncheckAll: Function
} & InjectIntlProvidedProps;

const SubHeaderRight = ({
    canCreateNewFolder,
    canUpload,
    currentCollection,
    gridColumnCount,
    gridMaxColumns,
    gridMinColumns,
    maxGridColumnCountForWidth,
    onCreate,
    onGridViewSliderChange,
    onSortChange,
    onUpload,
    onViewModeChange,
    view,
    viewMode,
    checked,
    checkAll,
    uncheckAll,
    intl
}: Props) => {
    const { sortBy, sortDirection, items = [] }: Collection = currentCollection;
    const hasGridView: boolean = !!gridColumnCount;
    const hasItems: boolean = items.length > 0;
    const isFolder: boolean = view === VIEW_FOLDER;
    const showSort: boolean = isFolder && hasItems;
    const showAdd: boolean = (!!canUpload || !!canCreateNewFolder) && isFolder;
    const areAllChecked = () => {
      const checkedKeys = keys(checked);
      const fileItems = items.filter(itm => itm.type === 'file');
      return fileItems.length && fileItems.every(itm => includes(checkedKeys, itm.id));
    }
    return (
        <div className="be-sub-header-right">
            {hasItems && viewMode === VIEW_MODE_GRID && (
              <React.Fragment>
                <Checkbox isChecked={areAllChecked()} label={intl.formatMessage(messages.selectAllNone)} name="is-selected"
                  onChange={e => {
                    areAllChecked() ? uncheckAll() : checkAll()
                }} />
                <GridViewSlider
                    columnCount={gridColumnCount}
                    gridMaxColumns={gridMaxColumns}
                    gridMinColumns={gridMinColumns}
                    maxColumnCount={maxGridColumnCountForWidth}
                    onChange={onGridViewSliderChange}
                />
              </React.Fragment>
            )}
            {hasItems && hasGridView && (
                <ViewModeChangeButton viewMode={viewMode} onViewModeChange={onViewModeChange} />
            )}
            {showSort && !!sortBy && !!sortDirection && (
                <Sort onSortChange={onSortChange} sortBy={sortBy} sortDirection={sortDirection} />
            )}
            {showAdd && (
                <Add
                    isDisabled={!isFolder}
                    onCreate={onCreate}
                    onUpload={onUpload}
                    showCreate={canCreateNewFolder}
                    showUpload={canUpload}
                />
            )}
        </div>
    );
};

export default injectIntl(SubHeaderRight);
