export const data = [
    {
      title : "Site vitrine de présentation de vetements",
      category : "vitrine"
    },
    {
      title : "Vitrine de chocolats",
      category : "vitrine"
    },
    {
      title : "web app HP",
      category : "web app"
    },
    {
      title : "web app RE4",
      category : "web app"
    },
  ]

  export const reducer = (state=initialState,action) =>{
    const {type} = action
    switch (type) {
      case "FILTRE_VITRINE":
        return {...state,films : data.filter(el=> el.category == "vitrine")}
        case "WEB":
          return {...state,films : data.filter(el=> el.category == "web app")}
        case "reset":
          return {...state,films:data}
    }
  }


