import * as mongoose from 'mongoose'
export const CurrencySchema = mongoose.Schema({
  baseCurrency: String,
  currency: String,
  worth: Number,
})
