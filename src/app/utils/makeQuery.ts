/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose';
import { TQuery } from './../interface/query.interface';
const makeQuery = async <T extends Document>(
  query: TQuery,
  model: Model<T>,
) => {
  const filter: any = {};

  if (query.minPrice !== undefined) {
    filter.price = { $gte: parseFloat(query.minPrice) };
  }
  if (query.maxPrice !== undefined) {
    filter.price = { ...filter.price, $lte: parseFloat(query.maxPrice) };
  }
  if (query.tags !== undefined) {
    filter['tags.name'] = query.tags;
  }
  if (query.startDate !== undefined) {
    filter.startDate = { $gte: query.startDate };
  }
  if (query.endDate !== undefined) {
    filter.endDate = { $lte: query.endDate };
  }
  if (query.language !== undefined) {
    filter.language = query.language;
  }
  if (query.provider !== undefined) {
    filter.provider = query.provider;
  }
  if (query.durationInWeeks !== undefined) {
    filter.durationInWeeks = parseInt(query.durationInWeeks, 10);
  }
  if (query.level !== undefined) {
    filter['details.level'] = query.level;
  }

  //   create sort object
  const sort: any = {};
  sort[query.sortBy] = query.sortOrder === 'asc' ? 1 : -1;

  const skip =
    (parseInt(query?.page || '1', 10) - 1) * parseInt(query?.limit || '10', 10);
  const limit = parseInt(query?.limit || '10', 10);
  const totalCourse = await model.estimatedDocumentCount();

  const meta = {
    page: parseInt(query?.page || '1', 10),
    limit: parseInt(query?.limit || '10', 10),
    total: totalCourse,
  };

  return { filter, sort, skip, limit, meta };
};

export default makeQuery;
