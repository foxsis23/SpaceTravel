import planetQuery from './planetQuery'

import mutations from '../mutations/index'


const resolvers = {
    Query:{
        ...planetQuery
    },
    Mutation:{
        ...mutations
    }
}

export default resolvers
