import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    public_id: { type: String, required: true },
    url: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);
