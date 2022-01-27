let defaulState={
    loader:false,
    feedData:[],
    error:false
}

let feedReducer = (state=defaulState,action)=>{
    switch(action.type){
        case 'FETCHING_DATA':{
            let newState = {...state,loader:true}
            return newState

        }

        case 'FETCH_DATA_SUCCESS':{
            let newState = {...state,loader:false,feedData:action.payload}
            return newState
        }

        case 'FETCH_DATA_FAILURE':{
            let newState = {...state,loader:false,eesponse:action.payload}
            return newState
        }

        default:
            return state
    }
    
}

export default feedReducer