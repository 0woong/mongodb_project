const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  writeTime: { type: Date, default: new Date(), required: true },
  boardPw: { type: String, required: true },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

// this => model or schema
boardSchema.statics.checkAuth = async function (params) {
  const { boardId, writerId } = params;
  try {
    const ownResult = await this.findOne({ _id: boardId });
    const ownId = ownResult.writer;
    if (!ownId.equals(writerId)) {
      return -1;
    }
    return 1;
  } catch (error) {
    return -2;
  }
};

// this => document or data instance
boardSchema.methods.checkMe = function () {};

module.exports = mongoose.model("board", boardSchema);
