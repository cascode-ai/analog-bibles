$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$
$M_2$ 和 $R_F$ 没有任何贡献。

- 由于 λ = 0，$M_1$ 是理想电流源（current source）：其漏极电流 $g_{m1}V_{in} + I_{n1}$ 与其漏极电压无关。
- 流入 $M_1$ 与 $M_2$ 之间节点的全部电流（经并联的 $M_2$ 和 $R_F$）都必须经 $M_1$ 流出；而流过 $M_2$ 和 $R_F$ 的全部电流都来自 $R_D$。因此无论 $M_2$ 和 $R_F$ 如何，$R_D$ 中的电流都恰好是 $g_{m1}V_{in} + I_{n1}$：$V_{out} = -R_D(g_{m1}V_{in} + I_{n1}) + R_DI_{n,RD}$。
- $M_2$ 和 $R_F$ 的噪声电流只在 $M_2$–$R_F$ 回路内部环流，只改变中间节点的电压。增益为 $-g_{m1}R_D$；结果与简单共源级（common-source stage）相同。
