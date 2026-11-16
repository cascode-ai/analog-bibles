$A_0 \approx 36.6$，增益交点（gain crossover）约在 311 MHz 处。
- β = 1 时的环路增益（loop gain）为 $A_0/[(1 + jf/10\,\mathrm{MHz})(1 + jf/500\,\mathrm{MHz})]$。PM = 60° 意味着在增益交点 $f_u$ 处相位为 −120°：$\tan^{-1}(f_u/10) + \tan^{-1}(f_u/500) = 120°$（$f_u$ 以 MHz 为单位），因此 $f_u \approx 310.5$ MHz（88.2° + 31.8°）。
- 由 $|H(f_u)| = 1$ 得 $A_0 = \sqrt{1 + 31.05^2}\,\sqrt{1 + 0.621^2} = 31.07 \times 1.177 \approx 36.6$。
- 更粗略的算法把第一个极点的相移取为恰好 90°：此时 $f_u = 500\tan 30° = 289$ MHz，$A_0 \approx (289/10)\sqrt{1 + 1/3} \approx 33$。
