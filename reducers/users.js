const initialState = { 
    users:[],
  }; 
  
  
  const users = (state = initialState,action) =>{
      
      switch (action.type) {
   
  
        case 'ADD_USERS_DATA':
  
              {
                  return { 
                      ...state,
                      users: [...action.payload],
                  }
              }
  
  
        default: {
          return state
        }      
  
        
          
      }
   
   
   
   }
   
   export default users;