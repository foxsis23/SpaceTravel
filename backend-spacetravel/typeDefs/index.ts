import {gql} from 'apollo-server'

const typeDefs = gql`
    type Query{
        getAllPlanets:[Planet]
        getPlanetByName(name:String):Planet
    }

    type Planet{
        name:String
        description:String
        sub_description:String
        price:String
        type:String
        image:String
        second_image:String
        id:ID
    }

    input PlanetInput{
        name:String
        description:String
        sub_description:String
        price:String
        type:String
        image:String
        second_image:String
    }

    type Mutation{
        createPlanet(planetInput:PlanetInput):Planet
    }
`

export default typeDefs