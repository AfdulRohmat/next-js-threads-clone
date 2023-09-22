import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: String,
    bio: String,
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread' // Reference to Thread Model / Thread Collection
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community' // Reference to Community Model / Community Collection
        }
    ]
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User