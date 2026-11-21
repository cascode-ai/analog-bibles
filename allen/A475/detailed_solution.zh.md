# 详细步骤 - A475

把给定输出用 LSB 表示，减去理想值，得到误差关于 $\varepsilon=\Delta C_x/C_x$ 和两部分码值的函数，再找出使误差最大的码字。由该最坏情况误差不超过 ½ LSB 即可得到容差。

### 第 1 步 — 以 LSB 表示的输出与误差

令 $1\,\mathrm{LSB}=V_{REF}/64$，$A=4b_0+2b_1+b_2$，$B=4b_3+2b_4+b_5$（取值均为 0–7），给定表达式化为

$$
\frac{v_{OUT}}{\mathrm{LSB}}=8\left(1-0.17\varepsilon\right)\left[A+\left(1+0.8\varepsilon\right)\frac B8\right]=\left(1-0.17\varepsilon\right)\left[8A+\left(1+0.8\varepsilon\right)B\right],
$$

而理想输出为 $8A+B$。误差为

$$
\text{error}=\left(1-0.17\varepsilon\right)\left[8A+(1+0.8\varepsilon)B\right]-(8A+B)
=\varepsilon\left(-1.36A+0.63B\right)-0.136\,\varepsilon^2B\ \ \mathrm{LSB}.
$$

对于百分之几的容差，$\varepsilon^2$ 项可以忽略。

### 第 2 步 — 最坏情况码字

两个一阶项符号相反，当 $A$ 和 $B$ 都较大时会部分抵消。误差幅值在增益项最大而 LSB 权重项为零时最大：$A=7$、$B=0$（码字 111000），此时

$$
|\text{error}|=1.36\times7\,|\varepsilon|=9.52\,|\varepsilon|\ \ \mathrm{LSB}
$$

且是精确值（$B=0$，没有 $\varepsilon^2$ 项）。单独的 LSB 权重项最多只有 $0.63\times7|\varepsilon|=4.41|\varepsilon|$（码字 000111）；全 1 时一阶误差为 $(-9.52+4.41)\varepsilon=-5.11\varepsilon$，所以取所有位为 1 会低估最坏情况。

### 第 3 步 — 所需精度

$$
9.52\,|\varepsilon|\le0.5
\quad\Longrightarrow\quad
\left|\frac{\Delta C_x}{C_x}\right|\le\frac{0.5}{9.52}=0.0525 .
$$

用精确表达式对全部 64 个码字逐一检查，对 $\varepsilon$ 的两种符号都得到相同的限值 5.252%。因此耦合电容的精度须约为 $\pm5.25\%$（大约 ±5%）。
