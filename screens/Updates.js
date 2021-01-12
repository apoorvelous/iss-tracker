import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    FlatList,
    TouchableOpacity,
    Linking
} from "react-native";
import axios from "axios";

export default class UpdateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            reports: [],
            blogs: []
        };
    }

    componentDidMount() {
        this.getArticles()
    }

    getArticles = () => {
        axios
            .get("https://spaceflightnewsapi.net/api/v1/articles")
            .then(response => {
                this.setState({ articles: response.data.docs })
                this.getReports()
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    getReports = () => {
        axios
            .get("https://spaceflightnewsapi.net/api/v1/reports")
            .then(response => {
                this.setState({ reports: response.data.docs })
                this.getBlogs()
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    getBlogs = () => {
        axios
            .get("https://spaceflightnewsapi.net/api/v1/blogs")
            .then(response => {
                this.setState({ blogs: response.data.docs })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listContainer}
                onPress={() => Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err))}
            >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.publishedDate}>{item.published_date}</Text>
            </TouchableOpacity>
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        let events = this.state.articles.concat(this.state.reports).concat(this.state.blogs)
        events = events.sort(function (a, b) {
            return new Date(b.published_date) - new Date(a.published_date);
        });
        if (events.length == 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg_updates.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Updates</Text>
                        </View>
                        <View style={styles.eventContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={events}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </ImageBackground>
                </View >
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    eventContainer: {
        flex: 0.85
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        padding: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    publishedDate: {
        fontSize: 15,
        color: "white",
        alignSelf: "flex-end",
        padding: 10
    }
});