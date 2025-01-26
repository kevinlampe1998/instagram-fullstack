import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import Image from '@/models/Image';
import connectMongo from '@/lib/connectMongo';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req, res) {
    try {
      connectMongo();

      const body = await req.json();

      const fileStr = body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        folder: 'amazon'
      });
      const url = uploadResponse.secure_url;
      const public_id = uploadResponse.public_id;

      const newImage = new Image({ public_id, url });

      const savedImage = await newImage.save();

      return NextResponse.json({
        message: 'Image successful saved!',
        success: true,
        image: savedImage
      });

    } catch (error) {
      console.log('Image Upload Error: ', error);
      return NextResponse.json({ message: 'Upload failed', error: 1 });
    }
}