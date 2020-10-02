import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './style'
import { connect } from 'react-redux';

class UserScreen extends Component {

    static navigationOptions = ({ navigation,screenProps }) => {
        return {
          title:navigation.getParam("username")
        }
      };
      state={user:''};

      componentDidMount(){
        const userId = parseInt(this.props.navigation.getParam("userId"));
        const user = this.props.users.find(user=>user.id===userId)
        this.props.navigation.setParams({"username":user.username});
        //console.log("user"+user)
        this.setState({user})
        
      }


    render(){
      let user = this.state.user;
        if(user!=='')return (
            
            <View style={styles.container}>
                <Text style={styles.header}>User Info</Text>
                <Text style={styles.textStyle}><Text style={{color:"grey"}}>User Name: </Text>{user.username}</Text>
                <Text style={styles.textStyle}><Text style={{color:"grey"}}>Full Name: </Text>{user.name}</Text>
                <Text style={styles.textStyle}><Text style={{color:"grey"}}>Email ID: </Text>{user.email}</Text>
                <Text style={styles.textStyle}><Text style={{color:"grey"}}>Website: </Text>{user.website}</Text>
                <Text style={styles.textStyle}><Text style={{color:"grey"}}>Company Name: </Text>{user.company.name}</Text>
            </View>
        );
        else return <View><Text>Loading...</Text></View>
    }
}

const mapStateToProps2 = (state) =>{
  
  return {

      users:state.users,

  }

}
 

export default connect(mapStateToProps2,null)(UserScreen)

