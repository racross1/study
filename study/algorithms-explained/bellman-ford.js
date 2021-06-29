'https://leetcode.com/problems/network-delay-time/discuss/415157/Clean-JavaScript-Bellman-Ford-solution'

const networkDelayTime = (times, N, K) => {
    const time = Array(N + 1).fill(Infinity);
    time[K] = 0;
    for (let i = 0; i < N; i++) {
      for (const [u, v, t] of times) {
        if (time[u] === Infinity) continue;
        if (time[v] > time[u] + t) {
          time[v] = time[u] + t;
        }
      }
    }
  
    let res = 0;
    for (let i = 1; i <= N; i++) {
      res = Math.max(res, time[i]);
    }
    return res === Infinity ? -1 : res;
  };