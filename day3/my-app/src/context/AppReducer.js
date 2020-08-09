export default (state,action)=>{
    switch(action.type){
        case "ADD":
            console.log("=====>",action.payload)
            return {
                ...state,data:[action.payload,...state.data]
            }

        case "ASSIGN":
            return {
                ...state,data:[action.payload]
            }

        default:
            return state;
    }

}