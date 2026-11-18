$A_{dm} \approx -9.80$，$A_{cm} \approx -5.0\times10^{-3}$，$A_{cm-dm} \approx -3.9\times10^{-4}$，$A_{dm-cm} \approx -4.9\times10^{-7}$（≈ 0）。当 $r_{\text{tail}} \to \infty$ 时：$A_{cm} \to 0$，$A_{dm-cm} \to 0$，$A_{dm}$ 不变，但 $A_{cm-dm}$ 不会消失；它趋于 $\approx -R\,\Delta r_o/[(r_o + R)(r_o + 1/g_m)] \approx -R\,\Delta r_o/r_o^2 \approx -3.9\times10^{-4}$。

取 $\bar r_o = 500$ kΩ，$\Delta r_o = r_{o1} - r_{o2} = 10$ kΩ，$R = 10$ kΩ：
- $A_{dm}$：差模半边电路（尾节点为交流地）是负载为 $R\|r_o$ 的 CS 级：$A_{dm} \approx -g_m(R\|\bar r_o) = -1\ \mathrm{m} \times 9.80\ \mathrm{k} = -9.80$。
- $A_{cm}$：带 $2r_{\text{tail}}$ 源极负反馈（source degeneration）的共模半边电路：$\approx -g_m R/(1 + 2g_m r_{\text{tail}}) \approx -10/2001 = -5.0\times10^{-3}$（精确值 −4.99×10⁻³）。
- $A_{cm-dm}$：$r_o$ 的失配把共模输入转换为差模输出：在 $r_{\text{tail}} = 1$ MΩ 时精确值为 −3.93×10⁻⁴。机理：共模输入使尾节点随之移动，因此每个 $v_{ds}$ 约变化 $-v_{ic}$，而不相等的 $r_{o1}$、$r_{o2}$ 引起不相等的电流变化，两者之差 $\approx v_{ic}(1/r_{o2} - 1/r_{o1})$。
- $A_{dm-cm}$：对差模输入而言电路几乎对称；剩余部分来自 $\Delta r_o$，约为 $\approx -4.9\times10^{-7}$，可以忽略。
- $r_{\text{tail}} \to \infty$：尾电流固定，因此共模输出消失（$A_{cm} \to 0$，$A_{dm-cm} \to 0$）；但由于源极精确跟随 $v_{ic}$，$v_{ds}$ 的变化仍在 $r_{o1}$ 和 $r_{o2}$ 中引起不相等的电流，而固定的总电流迫使它们表现为差模电流：$A_{cm-dm} \to -3.91\times10^{-4}$。理想尾电流源不能消除由 $r_o$ 失配引起的共模到差模的转换（这与负载失配的情况不同）。
