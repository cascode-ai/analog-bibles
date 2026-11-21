# 详细步骤 - A463

只有 LSB 子 DAC 的贡献经过分压器，所以缩放因子误差 $\Delta x$ 引起的输出误差与这一贡献成正比。找出误差最大的码字，并要求它不超过 6 位 DAC 的 ½ LSB。

### 第 1 步 — 输出及其误差

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}\right)V_{REF}+x\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)V_{REF},\qquad x_{ideal}=\frac18 .
$$

令 $x=\tfrac18+\Delta x$，MSB 部分没有误差，误差为

$$
\Delta v_{OUT}=\Delta x\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)V_{REF}.
$$

### 第 2 步 — 最坏情况码字

当 $b_3=b_4=b_5=1$ 时（MSB 各位取任意值），括号取最大值 $7/8$。由 $\tfrac12\,\mathrm{LSB}=\tfrac12\cdot V_{REF}/64=V_{REF}/128$，条件为

$$
|\Delta x|\cdot\frac78V_{REF}\le\frac{V_{REF}}{128}
\quad\Longrightarrow\quad
|\Delta x|\le\frac{8}{7\cdot128}=\frac1{112}=8.93\times10^{-3}.
$$

### 第 3 步 — 容差

相对于理想值 $x=1/8$：

$$
\frac{|\Delta x|}{x}\le\frac{1/112}{1/8}=\frac1{14}=7.14\% ,
$$

即 $x$ 必须在 $13/112$ 与 $15/112$ 之间。若用除数 $1/x$ 表示，则为 $112/15=7.47$ 到 $112/13=8.62$，即相对 8 为 $-6.7\%$ 到 $+7.7\%$。

因此分压器的最坏情况容差为 $\pm7.14\%$。它比只考虑 LSB 子 DAC 单独一位时允许的 $\pm12.5\%$（$=100\%/2^K$）更严格，因为 LSB 子 DAC 的三位都乘以同一个因子，误差相加。
