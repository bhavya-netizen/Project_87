import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";

import firebase from "firebase";

export default class StoryCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        light_theme: true
      };
    }

    componentDidMount() {
      this.fetchUser();l
    }

    fetchUser = () => {
      let theme;
      firebase
        .database()
        .ref("/users/" + firebase.auth().currentUser.uid)
        .on("value", snapshot => {
          theme = snapshot.val().current_theme;
          this.setState({ light_theme: theme === "light" });
        });
  };

    render() {
        return (
            <TouchableOpacity style = {styles.container}>
                <View style = {
                  this.state.light_theme ? styles.cardContainerLight: styles.cardContainer
                }>
                    <View style = {styles.authorContainer}>
                        <View style = {styles.authorImageContainer}>
                            <Image  
                                source = {require("../assets/profile_img.png")}
                                style = {styles.profileImage}
                            ></Image>
                        </View>
                        <View style = {styles.authorNameContainer}>
                          <Text
                            style={
                              this.state.light_theme
                                ? styles.authorNameTextLight
                                : styles.authorNameText
                            }
                          >     
                            {this.props.post.author}
                          </Text>                           
                        </View>
                    </View>
                    <Image source = {require("../assets/image_1.jpg")} style = {styles.postImage} />
                    <View style = {styles.captionContainer}>
                      <Text
                        style={
                          this.state.light_theme
                            ? styles.captionTextLight
                            : styles.captionText
                        }
                      >
                        {this.props.post.caption}
                      </Text>
                    </View>            
                    <View style = {styles.actionContainer}>
                        <View style = {styles.likeButton}>
                            <Ionicons name = {"heart"} size = {RFValue(30)} color = {"white"} />
                            <Text style = {styles.likeText}>12K</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2A2A2A",
    padding: RFValue(20),
    borderRadius: RFValue(20)
  },
  cardContainerLight: {
    margin: RFValue(13),

    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
    padding: RFValue(20),
  },
  authorContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  authorImageContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: RFValue(100),
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  authorNameText: {
    color: 'white',
    fontSize: RFValue(20)
  },
  authorNameLightText: {
    color: 'black',
    fontSize: RFValue(20)
  },
  postImage: {
    marginTop: RFValue(20),
    resizeMode: 'contain',
    height: RFValue(275),
    width: '100%',
    alignSelf: 'center'
  },
  captionContainer: {},
  captionText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10)
  },
  captionTextLight: {
    fontSize: 13,
    color: 'black',
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
});
