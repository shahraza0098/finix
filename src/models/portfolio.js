import mongoose from 'mongoose';

const PortfolioSchema = new Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', required: true 
  },
  shares: [
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Share'
    }
],
  totalValue:
   { 
    type: Number, 
    default: 0
 },
}, { timestamps: true });

export default Portfolio= mongoose.model('Portfolio', PortfolioSchema);
