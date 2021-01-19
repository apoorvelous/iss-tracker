# ISS Tracker App (Steps)

**This app will be an ISS Tracker App which will show the live location of International Space Station. It will also display all the meteors that are going to visit or pass nearby our Planet Earth and it will also display the list of recent updates on ISS and space events. To summarise, the App will have the following functionalities -**

***1. Live Location for the International Space Station***
***2. List of meteors that are going to visit our planet or pass from nearby***
***3. List of articles, blogs and updates on ISS and other space events***

**Let's get started!**

## Getting Started

```bash
expo init iss-tracker
cd iss-tracker
```

Then, let's install React Native's Stack Navigator

```bash
expo install react-native-gesture-handler
expo install react-native-reanimated
expo install react-native-screens
expo install react-native-safe-area-context
expo install @react-native-community/masked-view
```

```bash
yarn add @react-navigation/native
yarn add @react-navigation/stack
```

Let's start coding now. The first thing we want to is to make changes to ***App.js***

```js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Here, we simply just create a Navigation Container for our routes. We have the following Routes -

**1. Home - The screen from where the user will be able to navigate to other screens for the 3 functionalities discussed above. This is our default screen**
**2. IssLocation - This screen will display the live location of the ISS**
**3. Meteors - This screen will display the list of meteors that may visit earth or pass from nearby**
**4. Updates - This screen will display the updates regarding ISS and other space events**

We have already imported these screens. Now let's create a new folder with name ***screens*** and create 4 files in that folder -

**1. Home.js**
**2. IssLocation.js**
**3. Meteors.js**
**4. Updates.js**

Now, if we try to run our code, it will throw an error as there's no code in these files.

Let's add the following code to these files. For now, it will act as placeholders -

***Home.js***
```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Hello, world!</Text>
            </View>
        )
    }
}
```
***IssLocation.js***
```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class IssLocationScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Hello, world!</Text>
            </View>
        )
    }
}
```
***Meteors.js***
```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Hello, world!</Text>
            </View>
        )
    }
}
```
***Updates.js***
```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class UpdateScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Hello, world!</Text>
            </View>
        )
    }
}
```

## Home.js

Our folder structure is created now. All the screens display a simple **Hello, world!**

Now, let's create our home screen with the following lines of code -

***Home.js***
```js
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("IssLocation")
                    }>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Image source={require("../assets/iss_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Meteors")
                    }>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Updates")
                    }>
                        <Text style={styles.routeText}>Updates</Text>
                        <Image source={require("../assets/rocket_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
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
    routeCard: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    titleBar: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});
```

We will also have to add the images in our ***asset*** folder. Add the following images -

**1. bg_image.png**
**2. iss_icon.png**
**3. meteor_icon.png**
**4. rocket_icon.png**

## Updates.js

Let's work on ***Updates.js*** now. We can find the data for the upcoming space events and about ISS here -

https://spaceflightnewsapi.net/api/v1/articles
https://spaceflightnewsapi.net/api/v1/reports
https://spaceflightnewsapi.net/api/v1/blogs

Before we start writing the code, let's install axios -

```bash
yarn add axios
```

Let's write the code now -

```js
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

export default class HomeScreen extends Component {
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

    // loadInBrowser = ({ url }) => {
    //     Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    // }

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
```

We will also have to add the images in our ***asset*** folder. Add the **bg_updates.jpg**

## Meteors.js

Let's start with ***Meteors.js***. For this, we'll use the NASA's API. Before we get started, let's generate an API key from here -

https://api.nasa.gov/

Once it's done, next up, we will be using the following URL with our API key that we generated in the last step -

https://api.nasa.gov/neo/rest/v1/feed?api_key=API_KEY

Let's write the code -

```js
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

export default class MeteorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meteors: {}
        };
    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listContainer}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardText}>Closest to Earth - {item.close_approach_data[0].close_approach_date_full}</Text>
                <Text style={styles.cardText}>Minimum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_min}</Text>
                <Text style={styles.cardText}>Maximum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_max}</Text>
                <Text style={styles.cardText}>Velocity (KM/H) - {item.close_approach_data[0].relative_velocity.kilometers_per_hour}</Text>
                <Text style={styles.cardText}>Missing Earth by (KM) - {item.close_approach_data[0].miss_distance.kilometers}</Text>
            </TouchableOpacity>
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        if (Object.keys(this.state.meteors).length === 0) {
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
            let meteor_arr = Object.keys(this.state.meteors).map(meteor_date => {
                return this.state.meteors[meteor_date]
            })
            let meteors = [].concat.apply([], meteor_arr);
            meteors = meteors.sort(function (a, b) {
                return new Date(b.close_approach_data[0].close_approach_date_full) - new Date(a.close_approach_data[0].close_approach_date_full);
            });
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/meteor_bg.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Meteors</Text>
                        </View>
                        <View style={styles.meteorContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={meteors}
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
    meteorContainer: {
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
        marginBottom: 10,
        fontWeight: "bold",
        color: "white"
    },
    cardText: {
        color: "white"
    },
});
```

We will also have to add the imges in our ***asset*** folder. Add the **meteor_bg.jpg**

## IssLocation.js

First off, we will be needing a map where we will add a marker for the ISS's current location.

Let's start by installing react-native-maps for our use with the following command -

```bash
expo install react-native-maps
```

Alright! Now, to fetch the ISS Location's data, we can refer to the following URL -

https://api.wheretheiss.at/v1/satellites/25544

Now let's start coding -

```js
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert
} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";
import IssInfo from "./IssInfo";

export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }

    componentDidMount() {
        this.getIssLocation()
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
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
                    <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>ISS Location</Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}
                            >
                                <Marker
                                    coordinate={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}
                                />
                            </MapView>
                        </View>
                        <IssInfo />
                    </ImageBackground>
                </View>
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
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    }
});
```

Here, please note that we do not want to keep updating the map as it would look bad, but we want to keep updating the information we are displaying in the information tab. For this, we have created a separate child component for this screen with the name ***IssInfo.js***.

The code for it looks something like -

```js
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import axios from "axios";

export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }

    componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
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
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                    <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                    <Text style={styles.infoText}>Altitude (KM): {this.state.location.altitude}</Text>
                    <Text style={styles.infoText}>Velocity (KM/H): {this.state.location.velocity}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    infoText: {
        fontSize: 15,
        color: "white"
    }
});
```