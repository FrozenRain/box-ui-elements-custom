// @flow
import * as React from 'react';
import ItemGridThumbnail from './ItemGridThumbnail';
import MoreOptions from './MoreOptions';
import Name from '../common/item/Name';
import type { ItemGridProps } from './flowTypes';
import './ItemGridCell.scss';
import { includes, keys } from 'lodash';

type Props = {
    item: BoxItem,
    ...$Exact<ItemGridProps>,
};

const ItemGridCell = ({
    canPreview,
    isSmall,
    isTouch,
    item,
    onItemClick,
    onItemSelect,
    rootId,
    view,
    checked,
    onItemCheck,
    ...rest
}: Props) => {
    const handleCheck = () => {
      onItemCheck(item);
    }

    return (
        <figure className="bce-ItemGridCell">
            <ItemGridThumbnail item={item} />
            <figcaption className="bce-ItemGridCell-figcaption">
                <Name
                    canPreview={canPreview}
                    isTouch={isTouch}
                    item={item}
                    onItemClick={onItemClick}
                    onItemSelect={onItemSelect}
                    rootId={rootId}
                    showDetails
                    view={view}
                />
                <div class="v-stack">
                  <MoreOptions canPreview={canPreview} isSmall item={item} onItemSelect={onItemSelect} {...rest} />
                  <Checkbox isChecked={includes(keys(checked), item.id)} name="is-selected" hideLabel={true} onChange={e => handleCheck()} />
                </div>
            </figcaption>
        </figure>
    );
};
export default ItemGridCell;
