import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./style";

import db from "@services/server/db";
import { ScrollableTab } from "@components";

const Header = () => {
    const { fullName, profilePhoto, about, postCount, followerCount, followingCount, website } = db.user;

    return (
        <ScrollableTab.Header>
            <View style={styles.header} pointerEvents="box-none">
                <View style={styles.headerProfile}>
                    <ScrollableTab.Button style={styles.headerProfileImageOutside}>
                        <Image
                            style={styles.headerProfileImage}
                            source={{ uri: profilePhoto }}
                            resizeMethod="resize" />
                    </ScrollableTab.Button>
                    <View style={styles.headerFollowers}>
                        <View style={styles.headerFollowerItem}>
                            <Text style={styles.headerFollowerItemTopText}>
                                {postCount}
                            </Text>
                            <Text style={styles.headerFollowerItemBottomText}>
                                Posts
                            </Text>
                        </View>
                        <View style={styles.headerFollowerItem}>
                            <Text style={styles.headerFollowerItemTopText}>
                                {followerCount}
                            </Text>
                            <Text style={styles.headerFollowerItemBottomText}>
                                Followers
                            </Text>
                        </View>
                        <View style={styles.headerFollowerItem}>
                            <Text style={styles.headerFollowerItemTopText}>
                                {followingCount}
                            </Text>
                            <Text style={styles.headerFollowerItemBottomText}>
                                Following
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.headerNameText}>
                    {fullName}
                </Text>
                <Text style={styles.headerWebsiteText}>
                    {website}
                </Text>
                <Text style={styles.headerDescriptionText}>
                    {about}
                </Text>
                <View style={styles.optionBar}>
                    <ScrollableTab.Button style={[styles.optionBarButton, styles.optionBarBlueButton]}>
                        <Text style={[styles.optionBarButtonText, styles.optionBarButtonWhiteText]}>
                            Follow
                        </Text>
                    </ScrollableTab.Button>
                    <ScrollableTab.Button style={styles.optionBarButton}>
                        <Text style={styles.optionBarButtonText}>
                            Message
                        </Text>
                    </ScrollableTab.Button>
                    <ScrollableTab.Button style={styles.optionBarButton}>
                        <Text style={styles.optionBarButtonText}>
                            Text
                        </Text>
                    </ScrollableTab.Button >
                </View>
            </View>
        </ScrollableTab.Header>
    )
};

export default Header;