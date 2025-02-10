const initialBackground={
    Background:{bacgroundColor:"white",colorText:"black"}
}


export function ReduxReducer(state=initialBackground,action) {
    switch (action.type) {
        case "change background":
            if (state.Background.bacgroundColor==="white") {
                const changeColor={bacgroundColor:"black",colorText:"white"}
              return(
               {
                ...state,
                Background:changeColor
               }
              )
            }else{
                const changeColor={bacgroundColor:"white",colorText:"black"}
                return(
                 {
                  ...state,
                  Background:changeColor
                 }
                )
            }

        default:
            return state
    }
}