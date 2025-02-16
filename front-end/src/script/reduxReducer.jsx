const initialBackground={
    Background:{bacgroundColor:"white",colorText:"black"},
    lg:{lg:"fr"}
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
         case "translate":
            if (state.lg.lg==="fr") {
                return(
                    {
                     ...state,
                     lg:{lg:"en"}
                    }
                   )
            } else {
                return(
                    {
                     ...state,
                     lg:{lg:"fr"}
                    }
                   )
            }
        default:
            return state
    }
}