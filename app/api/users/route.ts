import cloudinary from 'cloudinary';
import cloudinaryConfig from "@src/cloudinary.config";
cloudinary.v2.config(cloudinaryConfig);

import ConnectToDB from "@src/services/Database";
import User from "@src/models/user.model";

// ? Create User Data
export async function POST(req: Request) {
    try {
        const data = await req.json();
        // ? Save Images To CDN
        const avatarSrcCloudRes = (await cloudinary.v2.uploader.upload(data.avatarSrc)).secure_url;
        const coverSrcCloudRes = (await cloudinary.v2.uploader.upload(data.coverSrc)).secure_url;
        const userData = {
            name: data.name,
            email: data.email,
            username: data.username,
            gender: data.gender,
            bio: data.bio,
            avatarUrl: avatarSrcCloudRes,
            coverUrl: coverSrcCloudRes,
            updatedAt: Date.now(),
            isOnboardingComplete: true
        }

        // ? Connect To DB
        await ConnectToDB();

        // ? Checking if User is authorised or not
        const isUserExists = await User.findOne({
            email: userData?.email
        })

        if (isUserExists === null) {
            return new Response('You are Not Authorized to do this action', { status: 401 });
        } else {
            // ? Checking is username is available or not
            const isUsernameTaken = await User.findOne({
                username: userData.username
            })

            if (isUsernameTaken === null) {
                await User.findByIdAndUpdate({ _id: isUserExists._id }, userData);
                return new Response('User data submitted successfully', { status: 201 });
            } else {
                return new Response('This Username is not available', { status: 400 });
            }
        }


    } catch (error: any) {
        console.error(error.message);
        return new Response('Error !!!', { statusText: `Some Error Occurd While Saving User Data : ${error.message}`, status: 500 });
    }
}

// ? Get User Data
export async function GET(req: Request) {
    try {
        const request = req.headers;
        
        // ? Connect To DB
        await ConnectToDB();

        // ? Checking if User is authorised or not
        const userData = await User.findOne({ email: request.get('email') }, '-_id name username avatarUrl isOnboardingComplete');

        if (userData === null) {
            return new Response('User Not Found', { status: 401 });
        } else {
            return new Response(JSON.stringify(userData), { status: 200 });
        }

    } catch (error) {
        console.error(error);
        return new Response('Error !!!', { statusText: `Some Error Occurd While Saving User Data : ${error}`, status: 500 });
    }
}