const toUniformCreators = (...addresses) => {
  const shareFloor = Math.floor(100 / addresses.length);
  const shareModulo = 100 % addresses.length;
  return addresses.map((address, index) => ({
    address,
    verified: false,
    share: index < shareModulo ? shareFloor + 1 : shareFloor
  }));
};
const toUniformVerifiedCreators = (...addresses) => {
  return toUniformCreators(...addresses).map(creator => ({ ...creator,
    verified: true
  }));
};

export { toUniformCreators, toUniformVerifiedCreators };
//# sourceMappingURL=Creator.mjs.map
