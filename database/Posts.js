const {Schema, model} = require('mongoose');

const {models_name} = require('../constants');

const PostsSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    updateAt: {
        type: String,
        timestamps: true,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: models_name.USER
    }
}, {timestamps: true,});

PostsSchema.pre('findOne', function() {
    this.populate('user_id');
});

module.exports = PostsSchema.statics = {
    updateData(postId, postDataObject) {
        return this.findByIdAndUpdate(
            postId,
            postDataObject,
            {new: true, runValidators: true}
        ).lean();
    },
}

module.exports = model(models_name.POSTS, PostsSchema);
