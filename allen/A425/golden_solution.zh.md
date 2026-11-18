最坏情况下，所有电流沉的误差在满量程处相加：$\sum_i \varepsilon_i I/2^{i+1} \le I/2^{N+1}$。让 N 个电流沉平均分配误差预算（每个 0.5 LSB/N）：

对 $b_i$ 的电流沉，$\varepsilon_i \le \dfrac{2^{i-N}}{N}\times100\%$，即单个电流沉的容差除以 N（MSB：$\pm100/(N\cdot2^N)$ %，LSB：$\pm50/N$ %）。

另一种同样有效的分配方式是让所有电流沉采用同一个相对容差 ε：由 $\varepsilon\,I(1 - 2^{-N}) \le I/2^{N+1}$ 得 $\varepsilon \le 1/(2^{N+1} - 2) \approx 2^{-(N+1)}$，约为 MSB 单独容差的一半，并对所有电流沉适用。两种选择都能保证 |INL| ≤ 0.5 LSB。
