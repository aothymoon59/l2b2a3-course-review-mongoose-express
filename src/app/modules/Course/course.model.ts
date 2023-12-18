import { Schema, model } from 'mongoose';
import { TCourse, TDetails, TTags } from './course.interface';

const tagsSchema = new Schema<TTags>({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, required: true },
});

const detailsSchema = new Schema<TDetails>({
  level: { type: String, required: true },
  description: { type: String, required: true },
});

const courseSchema = new Schema<TCourse>({
  title: { type: String, required: [true, 'title is required'], unique: true },
  instructor: { type: String, required: [true, 'instructor is required'] },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: [true, 'categoryId is required'],
    ref: 'Category',
  },
  price: { type: Number, required: [true, 'price is required'] },
  tags: [{ type: tagsSchema, required: true }],
  startDate: { type: String, required: [true, 'startDate is required'] },
  endDate: { type: String, required: [true, 'endDate is required'] },
  language: { type: String, required: [true, 'language is required'] },
  provider: { type: String, required: [true, 'provider is required'] },
  durationInWeeks: { type: Number },
  details: { type: detailsSchema, required: [true, 'details is required'] },
});

export const Course = model<TCourse>('Course', courseSchema);
