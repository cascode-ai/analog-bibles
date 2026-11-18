$|\Delta V_{REF}| \le V_{REF}/24$（≈ 0.0417 $V_{REF}$）。

- 在子区间 $m$（$m$ = 0…3，由理想的第一级 ADC 决定）内，DAC 输出为 $m(V_{REF} + \Delta V_{REF})/4$ 而不是 $mV_{REF}/4$，因此余量偏小 $m\Delta V_{REF}/4$。
- 于是该子区间的三个第二级跳变（到码 $4m+1$、$4m+2$、$4m+3$）移动 $+m\Delta V_{REF}/4$。第一级的跳变不受影响。
- 最坏情况 $m = 3$：移动量 $= 3\Delta V_{REF}/4 = 12\,\Delta V_{REF}/V_{REF}$ LSB。
- $12|\Delta V_{REF}|/V_{REF} \le 0.5$ → $|\Delta V_{REF}| \le V_{REF}/24$。
