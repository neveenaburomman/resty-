


const initialState = {
    history: []
  }


  function historyReducer(state = initialState, action){

    const {type , payload} = action;

    switch(type){
      case 'ADD_DATA' :
      const history = [...state.history , payload.history]
       return { history }
      default: return state;

    }
  }

  function addAction(history){
    return{
      type: 'ADD_DATA',
      payload: { history }
    }
  }

  function  removeAction(history){
    return {
      type: "REMOVE_HISTORY",
      payload:{ history}
    };
  };


  export {historyReducer,addAction,removeAction}


