$|\Delta V_{REF}| \le V_{REF}/12$（≈ 0.083 $V_{REF}$）。

- 在子区间 $m$ 内，DAC 输出偏大 $m\Delta V_{REF}/4$，因此该子区间的第二级跳变移动 $m\Delta V_{REF}/4$。第一级的跳变保持不动。
- 最坏情况 $m = 3$：移动量 $= 3\Delta V_{REF}/4 = 12\,\Delta V_{REF}/V_{REF}$ LSB。
- $12|\Delta V_{REF}|/V_{REF} \le 1$ → $|\Delta V_{REF}| \le V_{REF}/12$。
- 在此极限下，最高子区间开始丢失一个码（$+\Delta V_{REF}$ 时为码 1111，$-\Delta V_{REF}$ 时为 1100）。
