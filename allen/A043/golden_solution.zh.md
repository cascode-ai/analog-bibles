对给定面积 $A$：圆形 $P/A = 2\sqrt{\pi}/\sqrt{A} \approx 3.545/\sqrt{A}$；正方形 $P/A = 4/\sqrt{A}$；边长比为 $k$ 的矩形 $P/A = (2/\sqrt{A})(\sqrt{k} + 1/\sqrt{k}) \ge 4/\sqrt{A}$。圆形最小，周长比正方形少约 11.4%（$\sqrt{\pi}/2 = 0.886$），而正方形是最优的矩形。

- 圆形：$A = \pi r^2$，$P = 2\pi r = 2\sqrt{\pi A}$。
- 矩形 $a \times ka$：$A = ka^2$，$P = 2a(1 + k) = 2(1 + k)\sqrt{A/k}$，因此 $P/A = \frac{2}{\sqrt{A}}\left(\sqrt{k} + \frac{1}{\sqrt{k}}\right)$；由于 $\sqrt{k} + 1/\sqrt{k} \ge 2$（$k = 1$ 时取等号），正方形（$P/A = 4/\sqrt{A}$）是最优的矩形，而 4:1 的矩形比正方形差 25%。
- 圆形与正方形比较：$2\sqrt{\pi} = 3.545 < 4$。
- 一般形状：对正 n 边形 $P^2/A = 4n\tan(\pi/n)$，它随 n 单调减小，当 $n \to \infty$ 时趋于 $4\pi$（圆形）；更一般地，等周不等式 $P^2 \ge 4\pi A$ 对任何平面图形都成立，仅对圆形取等号。因此在给定面积下，圆形使 $P/A = \sqrt{P^2/A}/\sqrt{A}$ 最小。
