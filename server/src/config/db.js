import mongoose from "mongoose"

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://sandip:sandip123@ac-gauqzqz-shard-00-00.e26yi8a.mongodb.net:27017,ac-gauqzqz-shard-00-01.e26yi8a.mongodb.net:27017,ac-gauqzqz-shard-00-02.e26yi8a.mongodb.net:27017/URL?ssl=true&replicaSet=atlas-r0a1ru-shard-0&authSource=admin&appName=Cluster0")
        console.log("mongooose  coonnected")
    } catch (error) {
        console.log("mongooose not coonnected")
    }
}
export default connectDB;