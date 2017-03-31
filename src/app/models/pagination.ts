import { PaginationInfos } from './paginationInfos';

export class Pagination<T> extends PaginationInfos {
    content: T[];
}