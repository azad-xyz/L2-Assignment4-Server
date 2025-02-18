import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const search = this.query.search as string;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field) => ({
          [field]: { $regex: search, $options: 'i' },
        })) as FilterQuery<T>[],
      });
    }
    return this;
  }

  filter() {
    const { filter, ...queryObj } = this.query;
    const excludeFields = ['search', 'sortBy', 'sortOrder', 'limit', 'page', 'fields', 'author'];
    excludeFields.forEach((el) => delete queryObj[el]);

    if (filter) {
      queryObj['author'] = filter;
    }

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  sort() {
    const sortBy = this.query.sortBy as string;
    const sortOrder = (this.query.sortOrder as string) === 'desc' ? -1 : 1;

    if (sortBy) {
      this.modelQuery = this.modelQuery.sort({ [sortBy]: sortOrder });
    } else {
      this.modelQuery = this.modelQuery.sort({ createdAt: -1 });
    }

    return this;
  }

  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  fields() {
    const fields = (this.query.fields as string)?.split(',').join(' ') || '-__v';
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
