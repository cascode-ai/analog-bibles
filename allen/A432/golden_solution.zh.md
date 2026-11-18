$A_{vd}(0) \ge 56.2$ V/V。

- 反馈系数（feedback factor）$\beta = G_0/(G_0 + \sum b_i/R_{i+1}) = 1/(1 + D)$，其中 $D = \sum b_i/2^{i+1}$；$v_{out} = -D V_{REF}\,\dfrac{A\beta}{1 + A\beta}$，因此误差为 $D V_{REF}/(1 + A\beta)$。
- 最坏情况在 1111 处：$D = 15/16$，$\beta = 16/31$：$\dfrac{15/16}{1 + 16A/31} \le \dfrac{1}{32}$ → $1 + 16A/31 \ge 30$ → $A \ge 29\cdot31/16 = 56.2$。
