export function orderByAscendingOrder(commitments) {
  return commitments.sort((next, current) =>
    next.start < current.start ? -1 : 1,
  );
}
