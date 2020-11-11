import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stories from './stories';

const { width } = Dimensions.get('window');
const height = width * 0.9; // 90 %

export default class FeedScreen extends Component {
    state = {
        active: 0,
    }
    change = ({ nativeEvent }) => {
        const slide = (nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.active) {
            this.setState({ active: slide });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*multiple feed scroll view start */}
                <ScrollView>
                    <View style={styles.storyWrapper}>
                        <Stories/>
                    </View>
                    {/* feed's header profie photo , profile name , settings button Icon */}
                    <View style={styles.headerWrapper}>
                        <View style={styles.headerLeftWrapper}>
                            <Image style={styles.profileThumb} source={require('../images/food.png')} />
                            <Text style={styles.profileTitle}>Profile_Name</Text>
                        </View>
                        <View>
                            <Icon name="ellipsis-v" size={24} style={styles.feedSetting} />
                        </View>
                    </View>
                    {/* feed's multiple image horizontal scroll */}
                    <View style={styles.feedImageContainer}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            onScroll={this.change}
                            showsHorizontalScrollIndicator={false}
                            style={styles.scrollView}>
                            {
                                images.map((item, index) => (
                                    <Image
                                        key={index}
                                        style={styles.feedImage}
                                        source={{ uri: item }} />
                                ))
                            }
                        </ScrollView>{/* feed's multiple image horizontal scroll ends here  */}
                        {/* multiple image pagination */}
                        <View style={styles.pagination}>
                            {
                                images.map((i, k) => (
                                    <Icon key={k} name="circle" size={8} style={k == this.state.active ? styles.pagingActive : styles.pagingIcon} />
                                ))
                            }
                        </View>
                    </View>
                    {/* footer Icons :- like , comment , send , bookmark   */}
                    <View style={styles.feedFooter}>
                        <View style={styles.footerLeftWrapper}>
                            <Icon name="heart" size={30} style={styles.feedFooterIcon} />
                            <Icon name="comments" size={30} style={styles.feedFooterIcon} />
                            <Icon name="paper-plane" size={25} style={styles.feedFooterIcon} />
                        </View>
                        <View>
                            <Icon name="bookmark" size={30} />
                        </View>
                    </View>
                    <View style={styles.underLine} />
                </ScrollView>{/* multiple feed scroll view ends   */}
            </View>
        )
    }
}

const images = [
    'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

const feeds = [


]


const styles = StyleSheet.create({
    container: { display: 'flex', paddingTop: 100, },
    storyWrapper:{},
    headerWrapper: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 5, alignItems: 'center' },
    headerLeftWrapper: { flexDirection: "row", },
    profileThumb: { width: 50, height: 50, borderRadius: 50, },
    profileTitle: { fontSize: 14, fontWeight: "700", paddingLeft: 8, alignSelf:'center'},
    feedSetting: { paddingRight: 10, opacity: 0.7, },
    feedImageContainer: {},
    feedImage: { width, height, resizeMode: 'cover' },
    feedFooter: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, },
    footerLeftWrapper: { flexDirection: "row", alignItems: "center", },
    scrollView: { width, height },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingIcon: { color: 'grey', paddingLeft: 3 },
    pagingActive: { color: 'white', paddingLeft: 3 },
    feedFooterIcon: { paddingLeft: 8, },
    underLine: { height: 2, backgroundColor: 'grey' },
    storyWrapper:{display:"flex",flexDirection:'row',justifyContent:"space-between"}
});