import React,{Component} from 'react';
import {Text, FlatList, Image, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import styles from './style'
import { connect } from 'react-redux';
import {Container, Content} from 'native-base';

class Search extends Component {

    state={
        isFocused: false,
        searchedText:''

    }

    handleFocus = () => this.setState({isFocused: true})
    handleBlur = () => this.setState({isFocused: false})
    onChangeText = (text) => {
        this.setState({ searchedText: text })
    }


    render(){
        return (
                  <Container style={styles.container}>
                      <TextInput keyboardAppearance='dark'
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        style={[ styles.input, {
                            borderBottomColor: this.state.isFocused
                                ? "#00afdd"
                                : '#ACACAC',
                            borderBottomWidth: 2,
                            
                        }]}
                            onChangeText={this.onChangeText}
                            value={this.state.searchedText}
                            placeholder="Enter User Name"
                        />
                        <Content>
                        <FlatList
                            data={this.props.users}
                            keyExtractor={(item, index) => index}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                if(item.username.toLocaleLowerCase().includes(this.state.searchedText.toLocaleLowerCase())){
                            return (
                                
                                <TouchableOpacity style={styles.itemContainer} onPress={()=>this.props.navigation.navigate("UserScreen",{userId:item.id,username:item.username})}>
                                    <Image style={{width:30,height:30,alignSelf:"center"}} source={require('../../../assets/images/user.png')}/>
                                    <Text style={styles.userNameStyle}>{item.username}</Text>
                                </TouchableOpacity>
  
                            )}}                          
                            }
                            />
                          </Content>
                  </Container>
        )
    }
}  

const mapStateToProps2 = (state) =>{
  
    return {
  
        users:state.users,
  
    }
  
  }
  
  export default connect(mapStateToProps2,null)(Search)
  
  
  
  
  