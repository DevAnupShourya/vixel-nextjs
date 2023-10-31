import mongoose from "mongoose";

let isDBConnected = false;

const ConnectToDB = async () => {
    if (isDBConnected === true) {
        console.log('MongoDB is already Alive.....');
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string);
            isDBConnected = true;
            console.log('MongoDB Connected Successfully and is Alive.....');
        } catch (error: any) {
            console.log('Some Error Occurd While Connecting to MongoDB!!!', error.message)
        }
    }
}

export default ConnectToDB;