import mongoose , {Schema} from "mongoose";

const blogSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    image: String
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog