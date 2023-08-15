import PlanetModel from '../models/planet'

const planetQuery = {
    getAllPlanets:async(parent,args) => {
        const planets = await PlanetModel.find()

        return planets
    },
    getPlanetByName:async(parent,args) =>{
        const planetByName = await PlanetModel.findOne({name:args.name})

        return planetByName
    }
}

export default planetQuery