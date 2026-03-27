import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required']
    },
    title: {
        type: String,
        required: [true, 'The title field is required']
    },
    thumbnail: {
        type: String
    },
    content: {
        type: Array
    },
    comment: {
        type: [{
            name: {
                type: String,
            },
            text: {
                type: String,
            }
        }],
        default: []
    }
}, {
    versionKey: false
});

export default mongoose.model('Post', PostSchema);