function combineUsers(...args) {
  const combinedObject = {
    users: []
  }
  args.forEach(array => {
    const isolatedArray = [...array];
    combinedObject.users = [...combinedObject.users, ...isolatedArray];
  });
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};