import {Schema,model} from 'mongoose'


const schema = new Schema({
    name:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    sub_description:{
        type:String,
        default:''
    },
    price:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    },
    second_image:{
        type:String,
        default:''
    }
})

export default model('Planet',schema)