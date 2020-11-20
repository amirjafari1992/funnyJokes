import Lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return Lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
