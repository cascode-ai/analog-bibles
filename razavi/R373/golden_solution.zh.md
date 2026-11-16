[图 1] 电路：
$$\overline{V_{n,in}^2} = 8kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1+g_{m1}R_S)^2}{g_{m1}^2R_1}\right] + \frac{2K_N}{C_{ox}(WL)_1f}$$
[图 2] 电路：
$$\overline{V_{n,in}^2} = 8kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{(1+g_{m1}R_S)^2}{g_{m1}^2R_1}\right] + 8kT\gamma g_{m3}R_S^2 + \frac{2K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m3}^2R_S^2}{(WL)_3}\right]$$
[图 2] 多出了电流源噪声项，因而噪声更大；[图 1] 噪声更低，而 [图 2] 避免了负反馈电阻上的直流压降，因而有更大的电压余度（headroom）。

- 两者的差分跨导相同，均为 $g_{m1}/(1+g_{m1}R_S)$，因为对差分信号而言，$2R_S$ 的中点是虚地（virtual ground）；因此输入对管、$R_S$（两个 $R_S$ 或一个 $2R_S$：同为 $8kTR_S$）和 $R_1$ 的贡献完全相同，都等于半边电路（half circuit）结果的两倍，而半边电路就是带源极负反馈的共源级（common-source stage）。
- [图 1]：尾电流噪声在两个半边之间平均分配，属于共模（common-mode）量，在差分输出中相互抵消。
- [图 2]：对电流源噪声应用基尔霍夫电流定律（KCL）得 $I_{D1} - I_{D2} = (I_{n3} - I_{n4})\dfrac{g_{m1}R_S}{1+g_{m1}R_S}$，折算到输入端为 $(I_{n3} - I_{n4})R_S$：热噪声为 $2\times4kT\gamma g_{m3}R_S^2$，闪烁噪声为 $2g_{m3}^2R_S^2K_N/(C_{ox}(WL)_3f)$。
- 折中：[图 1] 中每个 $R_S$ 上有 $I_{D1}R_S$ 的直流压降；[图 2] 没有这一压降，但增加了与 $g_{m3}R_S^2$ 成正比的噪声；为减小这部分噪声，应使 $g_{m3}$ 较小，即采用较大的过驱动电压（overdrive voltage）。
