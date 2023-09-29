import React from "react";

const Search = ({ id, snippet }) => {
  return id?.kind === "youtube#video" ? (
    <div className="flex  flex-col md:flex-row gap-3 m-4 ">
      <div className="w-[21rem]">
        <img
          src={snippet?.thumbnails?.medium?.url}
          className="h rounded-lg min-w-[250px] md:min-w-[350px]"
        />
      </div>
      <div className="ml-3 mr-14">
        <h1 className="font-normal text-xl tracking-wider">{snippet?.title}</h1>
        <div className="flex my-2 ">
          <img
            className="h-8 mr-1"
            alt="channel logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADV1dWLi4v4+PgbGxv8/PzDw8Pe3t6xsbFnZ2dFRUXj4+Pq6urn5+d9fX2qqqpOTk4jIyOTk5O7u7uioqJeXl4TExM8PDycnJxWVlZvb2/KysozMzN2dnbx8fErKyun6xAFAAAE3klEQVRoge1b2ZKqMBSUVXZRFEcE8f+/8so4jiE5STohjnWr7PfQkJy1c1itPvjgg/8G4Vgm/np/w9pPyjH8Q+okDbI88hhEeRakyR9Q+4fWk6I9+C+kjv0gknP/7EPgxy8hH+utjvuObT06Jy+CHUY+YRcUTsnLC859x6V0Rl5tTMknbCon5GFztGH3vGPjIBr4X3bkE76W+mF8siefcFrkhWW3jN3zugUmuF5KPmFty35wwe55ByvyOHDD7nmBhQHEZ1fsnnc2519sdCw60293yn7jN/p+lzt/h9H+O7O6JwKc3ZHHzQH7n5NoIwKMP+Vr2D0Pir+ujf4JyPwX5jgVTnp2/3XsnqfN/+GC6kKPL1390xg8LMrbG3Jt7c+gUbNXcF2XN331Xc+PVd/k6Kqjuv5Ea9qsn6/rM3DhRsUOunxLdBGFovdjoXJ+rJtI6cUptPgiZy+Q9Vep9/hXZL28/0IS3aDwXX8AHiBNfSPQRR6VIkICOM5O1v/WwLtr4hYSM2t6aQz075qwAYWtLZ15gDcftDkrBo6f3kHA8CQuxwJwP9r49LH7C0jYsT5nRdQ6YO+BfA3VC9TuA8sgxQaIXdRn6GP2FlIrQr0DtcQy/Usrs9UTQNYUFyX6RZJ4wQOIXmLoBBymJ7gI9PoniQ4MeD2oGQP7KHo+UK6AQl2lf1LGrwmBcs3d1+e8D41Averu7CM+6SJVHhDxJyBFF1/xATuGtuhIzcSfI1IntJBCESMlLx/1kZ5e0yP8AOpU+F5/D6zBBApIGtnb0OdIvocaLit6RB/BlBk7+lxPj3WbPD0oJ2lPHxTF+G1ERQ1N4EXCxwTe8dB1g9L5KqTLor4CVtO2ijvCEbxoFIMuknLuyKUdegmLHELKQRLuAxL3MxBDhYSLlBu/2BAbUJrcNQrlhpmIPTScBVYNanTfEHMnJo08cU5/36BKTeV/sXJAPY/Brr0EwaU1uNp+gIge5g+xB2G4oDDmAlSTBUbr6HqV1BPH6xUMHlTmgKL+pi/GMkmJ6Latk3Isesj9SHlD/+pPf084ms2vMQH+T8oLWs/PZu193J/OXT4MeXc+9bMqqNBFMLpiVu/+lajyw3AcQ6LpT9XyJi0tKYW1zmgWpVDdB0mENVVjbnoJrbr+lskEclEVbK9YSIO4VFSVGd/RagBhLQkP8lZNIkpZjj9I8r/CiMjrBL4ohkEW74rrBLLiszj3B6jzV96kiiFLq2GrIOrbanFOaE+p5GQAPo3qmmTufdVlvR584a/bS+4S1Xrm54G5+WsvUeeRX2WmIGbOBIyQMcr2zsHMX8mEUkSQZ8YHxG7AHEz/gk3PMM5/XswfMjU4uJeMuSw+fOboYTNmqk6zcSMe7ByIweAak/pUDbUObMNtMDY0G5qyH7hkxzzNhtZm0zOWSYdNOMZnyPJnNvN+bL1rOjDHDa1FxsF3zXYNFuOCXLWYGVmAPyv1bYYlV3zXR0kaNLhGx25UdCVUaw30AiWXsxckTX5MONM+a811WEvGhIkh6V3QS+PQ2AtD/MuGpFfUiPjQ1n7JPTYu/boV1KXFI+IryYD8rjsH9b73b+j3dXDuiAbJyYD86s2/B0x4688RE976a8iEt/4YM+GtvwXd4Z9UP0WdXvlT1ANv/CXsgTf+EPfBBx8sxD8SrEB2niv1BAAAAABJRU5ErkJggg=="
          />
          <p className="p-1 text-gray-500 text-sm">{snippet?.channelTitle}</p>
        </div>
        <p className="text-gray-500 text-sm hidden md:block">
          {(snippet?.description).substring(0, 100)}...
        </p>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Search;
