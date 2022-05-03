import React, { memo, FC } from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./style";
import { IItemProps } from "./types";

const Item: FC<IItemProps> = memo(({ image: uri }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Image
                style={styles.itemImage}
                source={{ uri }}
                resizeMethod="resize" />
        </TouchableOpacity>
    )
}, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));

export default Item;