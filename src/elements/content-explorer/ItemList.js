/**
 * @flow
 * @file Item list component
 * @author Box
 */

import React from 'react';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import KeyBinder from '../common/KeyBinder';
import nameCellRenderer from '../common/item/nameCellRenderer';
import iconCellRenderer from '../common/item/iconCellRenderer';
import { focus } from '../../utils/dom';
import messages from '../common/messages';
import headerCellRenderer from './headerCellRenderer';
import sizeCellRenderer from './sizeCellRenderer';
import dateCellRenderer from './dateCellRenderer';
import moreOptionsCellRenderer from './moreOptionsCellRenderer';
import { FIELD_SELECTED, FIELD_DATE, FIELD_ID, FIELD_NAME, FIELD_SIZE, VIEW_FOLDER, VIEW_RECENTS } from '../../constants';
import './ItemList.scss';
import checkboxCellRenderer from './checkboxCellRenderer';
import includes from 'lodash/includes';
import keys from 'lodash/keys';
import Checkbox from '../../components/checkbox/Checkbox';

type Props = {
    canDelete: boolean,
    canDownload: boolean,
    canPreview: boolean,
    canRename: boolean,
    canShare: boolean,
    currentCollection: Collection,
    focusedRow: number,
    isMedium: boolean,
    isSmall: boolean,
    isTouch: boolean,
    onItemClick: Function,
    onItemCheck: Function,
    onItemDelete: Function,
    onItemDownload: Function,
    onItemPreview: Function,
    onItemRename: Function,
    onItemSelect: Function,
    onItemShare: Function,
    onSortChange: Function,
    rootElement: HTMLElement,
    rootId: string,
    tableRef: Function,
    view: View,
    checked: Collection,
    checkAll: Function,
    uncheckAll: Function
} & InjectIntlProvidedProps;

const ItemList = ({
    view,
    isSmall,
    isMedium,
    isTouch,
    rootId,
    rootElement,
    canShare,
    canDownload,
    canDelete,
    canPreview,
    canRename,
    onItemClick,
    onItemCheck,
    onItemSelect,
    onItemDelete,
    onItemDownload,
    onItemRename,
    onItemShare,
    onItemPreview,
    onSortChange,
    currentCollection,
    tableRef,
    focusedRow,
    intl,
    checked,
    checkAll,
    uncheckAll
}: Props) => {
    const nameCell = nameCellRenderer(
        rootId,
        view,
        onItemClick,
        onItemSelect,
        canPreview,
        isSmall, // shows details if false
        isTouch,
    );
    const iconCell = iconCellRenderer();
    const dateCell = dateCellRenderer();
    const sizeAccessCell = sizeCellRenderer();
    const moreOptionsCell = moreOptionsCellRenderer(
        canPreview,
        canShare,
        canDownload,
        canDelete,
        canRename,
        onItemSelect,
        onItemDelete,
        onItemDownload,
        onItemRename,
        onItemShare,
        onItemPreview,
        isSmall,
    );
    const isRecents: boolean = view === VIEW_RECENTS;
    const hasSort: boolean = view === VIEW_FOLDER;
    const { id, items = [], sortBy, sortDirection }: Collection = currentCollection;
    const rowCount: number = items.length;
    const rowClassName = ({ index }) => {
        if (index === -1) {
            return 'bce-item-header-row';
        }

        const { selected } = items[index];
        return classNames(`bce-item-row bce-item-row-${index}`, {
            'bce-item-row-selected': selected,
        });
    };

    const sort = ({ sortBy: by, sortDirection: direction }) => {
        onSortChange(by, direction);
    };

    const checkboxCell = checkboxCellRenderer(
      (idx: number, ...extra) =>
        onItemCheck(items[idx]),
      intl.formatMessage(messages.isSelected)
    );

    const areAllChecked = () => {
      const checkedKeys = keys(checked);
      const fileItems = items.filter(itm => itm.type === 'file');
      return fileItems.length && fileItems.every(itm => includes(checkedKeys, itm.id));
    }

    const headerCheckboxCell = () => {
      return (
        <Checkbox isChecked={areAllChecked()} label={intl.formatMessage(messages.isSelected)} name="is-selected" hideLabel={true}
          onChange={e => {
            areAllChecked() ? uncheckAll() : checkAll()
        }} />
      )
    }

    return (
        <KeyBinder
            id={id}
            items={items}
            columnCount={1}
            rowCount={rowCount}
            className="bce-item-grid"
            onRename={onItemRename}
            onShare={onItemShare}
            onDownload={onItemDownload}
            onOpen={onItemClick}
            onSelect={onItemSelect}
            onDelete={onItemDelete}
            scrollToRow={focusedRow}
            onScrollToChange={({ scrollToRow }) => focus(rootElement, `.bce-item-row-${scrollToRow}`)}
        >
            {({ onSectionRendered, scrollToRow, focusOnRender }) => (
                <AutoSizer>
                    {({ width, height }) => (
                        <Table
                            width={width}
                            height={height}
                            headerHeight={isSmall ? 0 : 40}
                            rowHeight={50}
                            rowCount={rowCount}
                            rowGetter={({ index }) => items[index]}
                            ref={tableRef}
                            rowClassName={rowClassName}
                            scrollToIndex={scrollToRow}
                            sort={sort}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                            onRowClick={({ rowData }) => onItemSelect(rowData)}
                            onRowsRendered={({ startIndex, stopIndex }) => {
                                onSectionRendered({
                                    rowStartIndex: startIndex,
                                    rowStopIndex: stopIndex,
                                });
                                if (focusOnRender) {
                                    focus(rootElement, `.bce-item-row-${scrollToRow}`);
                                }
                            }}
                        >
                            <Column dataKey={FIELD_SELECTED} cellRenderer={checkboxCell} headerRenderer={headerCheckboxCell}
                              width={30} flexShrink={0} className="tbl-row-select-cbx" disableSort={true}
                              cellDataGetter={({ rowData, dataKey }) => ({checked: checked[rowData[FIELD_ID]], visible: rowData.type === 'file' }) }
                            />
                            <Column
                                disableSort
                                dataKey={FIELD_ID}
                                cellRenderer={iconCell}
                                width={isSmall ? 30 : 50}
                                flexShrink={0}
                            />
                            <Column
                                disableSort={!hasSort}
                                label={intl.formatMessage(messages.name)}
                                dataKey={FIELD_NAME}
                                cellRenderer={nameCell}
                                headerRenderer={headerCellRenderer}
                                width={300}
                                flexGrow={1}
                            />
                            {isSmall ? null : (
                                <Column
                                    className="bce-item-coloumn"
                                    disableSort={!hasSort}
                                    label={
                                        isRecents
                                            ? intl.formatMessage(messages.interacted)
                                            : intl.formatMessage(messages.modified)
                                    }
                                    dataKey={FIELD_DATE}
                                    cellRenderer={dateCell}
                                    headerRenderer={headerCellRenderer}
                                    width={isRecents ? 120 : 300}
                                    flexGrow={1}
                                />
                            )}
                            {isSmall || isMedium ? null : (
                                <Column
                                    className="bce-item-coloumn"
                                    disableSort={!hasSort}
                                    label={intl.formatMessage(messages.size)}
                                    dataKey={FIELD_SIZE}
                                    cellRenderer={sizeAccessCell}
                                    headerRenderer={headerCellRenderer}
                                    width={80}
                                    flexShrink={0}
                                />
                            )}
                            <Column
                                disableSort
                                dataKey={FIELD_ID}
                                cellRenderer={moreOptionsCell}
                                width={isSmall || !canShare ? 58 : 140}
                                flexShrink={0}
                            />
                        </Table>
                    )}
                </AutoSizer>
            )}
        </KeyBinder>
    );
};

export default injectIntl(ItemList);
