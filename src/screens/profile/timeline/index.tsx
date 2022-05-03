import React, { useEffect, FC } from "react";
import { useIsFocused } from "@react-navigation/native";

import { ScrollableTab, Loading, Notice } from "@components";
import { ON_END_REACHED_PADDING } from "@constants";
import { useList } from "@hooks";
import { ITimeLineItem } from "@services";

import styles from "./style";
import Item from "./Item";

const Timeline: FC = () => {
    const { isRefreshing, isLoaded, data, notice, noticeCanVisible, refresh, next } = useList<ITimeLineItem>("timeline");
    const { list, hasNextPage } = data;

    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused && !isLoaded && refresh();
    }, [isFocused]);

    return (
        <ScrollableTab.FlatList
            isFocused={isFocused}
            contentContainerStyle={styles.contentContainer}
            removeClippedSubviews={true}
            numColumns={3}
            data={list}
            ListHeaderComponent={isRefreshing ? <Loading isVisible relative /> : null}
            ListFooterComponent={hasNextPage ? <Loading isVisible relative /> : null}
            ListEmptyComponent={noticeCanVisible ? (
                <ScrollableTab.Notice>
                    <Notice isVisible={true} text={notice} />
                </ScrollableTab.Notice>
            ) : null}
            onEndReachedThreshold={ON_END_REACHED_PADDING}
            onEndReached={next}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <Item
                    {...item}
                    index={index} />
            )} />
    );
};

export { Timeline as default }