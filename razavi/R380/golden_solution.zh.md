$$V_{out} = -\frac{g_{m1}r_{O1}r_{O3}}{r_{O1} + r_{O2} + r_{O3} + (g_{m1} + g_{mb1})r_{O1}r_{O2}}V_{n1}$$

- 输入端开路时，$V_{n1}$ 驱动一个共源级（common-source stage）：栅极输入为 $V_{n1}$，源极由 $r_{O2}$（输入节点上唯一的元件）构成源极负反馈（source degeneration），负载为 $r_{O3}$。利用带源极负反馈的共源级增益公式，取 $R_S = r_{O2}$、$R_D = r_{O3}$，即得结果。
- 当 $g_mr_O \gg 1$ 时：$V_{out} \approx -\dfrac{g_{m1}}{g_{m1}+g_{mb1}}\cdot\dfrac{r_{O3}}{r_{O2}}V_{n1}$（在 $r_{O3} \ll (g_{m1}+g_{mb1})r_{O1}r_{O2}$ 时成立），即增益为 1 的量级：$r_{O2}$ 的强源极负反馈抑制了 $M_1$ 的噪声。
