const sleep = function (time: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export default sleep;
