热噪声：
$$\overline{V_{n,in}^2} = 2\left[\frac{4kT\gamma}{g_{m1}} + 4kT\gamma g_{m5}\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2 + 4kT\gamma g_{m7}\frac{R_S^2}{4}\right] + 4kTR_S$$
闪烁噪声：
$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + g_{m5}^2\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2\frac{K_P}{(WL)_5} + g_{m7}^2\frac{R_S^2}{4}\cdot\frac{K_N}{(WL)_7}\right]$$
$M_3$、$M_4$ 没有贡献（它们的噪声被局部环路吸收）。

- 上方电流源的噪声 $I_{n5}$ 全部流过 $M_1$（其漏极节点没有其他通路）：$V_{S1} = V_{G1} + (I_{n1} - I_{n5})/g_{m1}$，并且它也出现在源极节点的基尔霍夫电流定律（KCL）方程中：$I_{D3} = I_{n7} - I_{n5} + (V_{S1} - V_{S2})/R_S + I_{n,RS}$（+ 直流分量）。
- 因此 $I_{D3} - I_{D4} = \dfrac{2}{R_S}\left[V_{in} + \dfrac{I_{n1} - I_{n2}}{g_{m1}}\right] - (I_{n5} - I_{n6})\left(1 + \dfrac{2}{g_{m1}R_S}\right) + (I_{n7} - I_{n8}) + 2I_{n,RS}$。
- 除以 $2/R_S$：$I_{n5}$ 折算为 $(1/g_{m1} + R_S/2)I_{n5}$，$I_{n7}$ 折算为 $(R_S/2)I_{n7}$，$R_S$ 折算为 $R_SI_{n,RS}$，$M_1$ 折算为 $I_{n1}/g_{m1}$。
- 电流源晶体管应具有较小的 $g_m$，即较大的过驱动电压（overdrive voltage）；上方电流源的危害更大（其噪声还会调制 $V_{GS1}$）。
