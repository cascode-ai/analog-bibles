$A_v = \dfrac{g_m}{g_m + g_{mb} + 1/r_O + 1/R_L} = g_m\left(\dfrac{1}{g_m} \,\Big\|\, \dfrac{1}{g_{mb}} \,\Big\|\, r_O \,\Big\|\, R_L\right)$。

- $G_m$：源极交流短路到地时，$v_{gs} = v_{in}$，$v_{bs} = 0$，$v_{ds} = 0$，因此器件从其源极向短路线送出 $g_mv_{in}$。按照该引理的符号约定，电流是从输出节点被吸入电路的，对于共源级（common-source stage）这一约定给出 $G_m = g_m$；因此这里 $G_m = -g_m$。
- $R_{out}$（输入交流置零）：从源极看进去为 $1/g_m \| 1/g_{mb} \| r_O$，再与 $R_L$ 并联（理想电流源不起作用）。
- $A_v = -G_mR_{out} = g_mR_{out}$，为正且小于 1（当 $R_L, r_O \to \infty$ 时 → $g_m/(g_m + g_{mb}) = 1/(1+\eta)$）。
