import {defineStore} from 'pinia'



export const usePlanetStore = defineStore('planetStore',{
    state:() => ({
        planets:{},
        planetByName:{}
    }),
    getters:{
        allPlanets:(state) => state.planets.getAllPlanets,
        planetName:(state) => state.planetByName.getPlanetByName
    },
    actions:{
         async getPlanets(){
            const query = gql`
                query Planets {
                    getAllPlanets {
                        name
                        description
                        sub_description
                        price
                        type
                        image
                        second_image
                        id
                    }
                }
            `

            const {data} = await useAsyncQuery(query)

            this.planets = data
         },
         async getPlanetByName(name){
            const query = gql`
                query getPlanetByName($name: String) {
                    getPlanetByName(name: $name) {
                        name
                        description
                        sub_description
                        price
                        type
                        image
                        second_image
                        id
                    }
                }
            `

            const {data} = await useAsyncQuery(query,{name:name})

            this.planetByName = data
         }
    }
})