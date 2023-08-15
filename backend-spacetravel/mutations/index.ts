import PlanetModel from '../models/planet'

const mutations = {
    createPlanet: async(parent,args) =>{
        const {name,description,sub_description,price,type,image,second_image} = args.planetInput

        const planet = new PlanetModel({name,description,second_image,sub_description,price,type,image})
        await planet.save()

        return planet
    }
}

export default mutations