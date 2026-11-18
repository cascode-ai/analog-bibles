$|\Delta C_x/C_x| \le$ 约 5.25%（≈ ±5%）。

推导（1 LSB $= V_{REF}/64$；$A = 4b_0 + 2b_1 + b_2$，$B = 4b_3 + 2b_4 + b_5$，$\varepsilon = \Delta C_x/C_x$）：
- $v_{OUT}/\text{LSB} = (1 - 0.17\varepsilon)[8A + (1 + 0.8\varepsilon)B]$；理想值为 $8A + B$。
- 误差 $\approx \varepsilon(-1.36A + 0.63B)$ LSB（一阶近似；$\varepsilon^2$ 项可以忽略）。
- 最坏情况：$A = 7$，$B = 0$（码 111000）：$|{\rm error}| = 9.52|\varepsilon|$（B 项只会使其减小，单独作用时最多为 $4.41|\varepsilon|$）。
- $9.52|\varepsilon| \le 0.5$ → $|\varepsilon| \le 0.0525$，即 $C_x$ 的精度必须达到约 ±5.25%。（对全部 64 个码进行精确验算，得到相同的界限：无论正负均为 5.252%。）
