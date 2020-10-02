import React, { Component } from 'react';
import { ScrollView, View, Text, ToastAndroid } from 'react-native';
import axios from 'axios';
import styles from './style'
import { myConfig } from '../../../config';
import Accordion from 'react-native-collapsible/Accordion';

import { connect } from 'react-redux';
const API = myConfig.URL;

class PostScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Post",
        }
      };

      state={
        post:'',
        comments:[],
        activeSections: [],
      };


      async componentDidMount() {
        this.loadPost();
        this.loadComments();

    }

    loadPost = async () => {

      var postID = this.props.navigation.getParam("postId");

      await axios({
          method: 'get',
          url: API + 'posts/'+ postID,
          headers: {
            'content-type': 'application/json; charset=utf-8',
          },
        }).then(async res => {
      
           //console.log(JSON.stringify(res.data))
           
           this.setState({ post: res.data });       
     
         
      
        })
          .catch(err => {
      
            ToastAndroid.show(err.response,ToastAndroid.LONG)
            console.log("err"+err)
      
          })

  }

    loadComments = async () => {

        var postID = this.props.navigation.getParam("postId");

        await axios({
            method: 'get',
            url: API + 'posts/'+ postID +'/comments',
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             console.log(JSON.stringify(res.data))
             this.setState({ comments: res.data });       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
    }

    _renderHeader = (section) => {
      return (
        <View >
          <Text style={styles.textStyle}><Text style={{fontWeight:"bold"}}>{section.email}</Text> {section.name}</Text>
        </View>
      );
    };
    
    _renderContent = section => {
      return(
          <View>
            <Text style={styles.textStyle}>{section.body}</Text>
          </View>
        )
      
        
    };
    
    _updateSections = async (activeSections) => {
        
        await this.setState({ activeSections });
    
       
     
    };




    render(){
      var post = this.state.post;
      const user = this.props.users.find(user=>user.id===post.userId)
      //console.log("user"+user)

        return (
            
            <ScrollView style={styles.container}>

              <View style={styles.postContainer}>
                <Text style={[styles.textStyle,{fontSize: 15}]}><Text style={{fontWeight:"bold"}}>{user?user.username:""}</Text> {post.title}</Text>
                <Text style={[styles.textStyle,{fontSize: 15}]}>{post.body}</Text>

              </View>
              
              <Text style={styles.header}>Comments</Text>

              <Accordion
              sectionContainerStyle={styles.sectionContainer}
              containerStyle={styles.itemContainer}
              sections={this.state.comments}
              activeSections={this.state.activeSections}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
              underlayColor="transparent"
              />

            </ScrollView>
        );
    }
}

const mapStateToProps2 = (state) =>{
  
  return {

      users:state.users,

  }

}
 

export default connect(mapStateToProps2,null)(PostScreen)



