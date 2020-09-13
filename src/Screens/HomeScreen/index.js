import React,{Component} from 'react';
import {View, Text, FlatList, Image, ToastAndroid, TouchableOpacity, TouchableHighlight, Dimensions, SectionList} from 'react-native';
import axios from 'axios';
import { myConfig } from '../../../config';
import styles from './style'
import { connect } from 'react-redux';


const API = myConfig.URL;
const {width,height} = Dimensions.get("window");

class Home extends Component {

    state={
        posts:[],
        refreshing:true
    }

   
    componentDidMount(){
        this.loadUsers();
        this.loadPosts();
    }

    loadUsers = async () => {



        await axios({
            method: 'get',
            url: API + 'users',
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             console.log(JSON.stringify(res.data))
             
             this.props.addUsersData(res.data)
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })

    }

    loadPosts = async () => {



        await axios({
            method: 'get',
            url: API + 'posts',
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data))
             
             this.setState({ posts: res.data });       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })

    }


    render(){
        return (
                  <View>
                        <FlatList
                            data={this.state.posts}
                            keyExtractor={(item, index) => index}
                            ItemSeparatorComponent={()=><View style={{borderTopColor: "gray",borderTopWidth: 1,width:width-50,alignSelf:"flex-end"}}></View>}
                            contentContainerStyle={styles.container}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                const userName = this.props.users.find(user=>user.id===item.userId).username
                            return (
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate("PostScreen",{post:item})}
                                                    underlayColor="black" activeOpacity={0.8}>
                                <View style={styles.itemContainer} >
                                    <Image style={{width:30,height:30,alignSelf:"center"}} source={require('../../../assets/images/post.png')}/>
                                    <View>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("UserScreen",{userId:item.userId,username:userName})}>
                                        <Text style={styles.userNameStyle}>{userName}</Text>
                                    </TouchableOpacity>

                                    <Text numberOfLines={1} style={styles.titleStyle}>{item.title}</Text>
                                    </View>
                                </View>
                                </TouchableHighlight>
  
                            )}                          
                            }
                            />
                        <TouchableOpacity style={styles.searchStyle} onPress={()=>this.props.navigation.navigate("SearchScreen")}>
                          <Image style={{width:20, height:20}} source={require('../../../assets/images/search.png')} />
                        </TouchableOpacity>    
                  </View>
        )
    }
}  

const mapStateToProps2 = (state) =>{
  
    return {
  
        users:state.users,
  
    }
  
  }
  
  const mapDispatchToProps = (dispatch) => ({
  
    addUsersData: (product) => dispatch({ 
      type:'ADD_USERS_DATA',payload: product
    }),
  
  }); 
  
  export default connect(mapStateToProps2,mapDispatchToProps)(Home)
  
  
  
  
  