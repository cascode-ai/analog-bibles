基准分压器：$\Delta R/R \le 1/8 = \pm 12.5\,\%$。内插电阻：$\Delta R/R \le 1/4 = \pm 25\,\%$（每组四个电阻位于两个被驱动的节点之间；最坏情况出现在中间抽头 $V_{2b}$ 和 $V_{1b}$ 处）。

基准分压器（$V_{REF}$–$R$–$V_{REF}/2$–$R$–地）：
- 最坏情况：一个电阻为 $R(1+\delta)$，另一个为 $R(1-\delta)$，因此抽头电压为 $\tfrac{V_{REF}}{2}(1 \pm \delta)$，误差为 $\delta V_{REF}/2$。
- 该抽头是 $A_1$ 的基准，因此 $A_1$ 的过零点（比较器 4）以及与 $V_1$ 相关的各跳变点都移动 $\delta V_{REF}/2 = 4\delta$ LSB。（按书中电阻串的结论，最坏情况 INL $= 2^{N-1}\Delta R/R$ 个电阻串 LSB；这里 $N = 1$，即 $\Delta R/R \times V_{REF}/2$。）
- $4\delta \le 0.5$ → $\delta \le 1/8$ = ±12.5 %。

内插电阻（$V_2$–4R–$V_1$–4R–地，$V_1$ 由 $A_1$ 驱动）：
- 在一组四个电阻内，各跳变点按抽头分压比 $\alpha$ 成比例分布在 4 LSB 的范围内：$\Delta\alpha$ 的变化使跳变点移动 $4\Delta\alpha$ LSB。
- 中间抽头：$\alpha = (R_a + R_b)/(R_a + R_b + R_c + R_d)$；最坏情况 $R_a, R_b = R(1+\delta)$，$R_c, R_d = R(1-\delta)$，得 $\alpha = (1+\delta)/2$，$\Delta\alpha = \delta/2$，移动 $2\delta$ LSB（即 4 电阻串的结论 $2^{2-1}\Delta R/R$）。
- 四分之一抽头：$\Delta\alpha \approx 3\delta/8$，移动 $1.5\delta$ LSB。
- $2\delta \le 0.5$ → $\delta \le 1/4$ = ±25 %。
- 若把这八个电阻当作一个不受驱动的 3 位电阻串（忽略 $A_1$ 固定了 $V_1$），同一公式给出 $4\delta \le 0.5$ → ±12.5 %，这是一个保守的界限。
