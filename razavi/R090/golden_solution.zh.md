反相特性：在 $V_{in} = 0.7$ V 之前平坦地保持在 $V_{DD}$；随后是一段下降区，由于源极负反馈（source degeneration），它逐渐接近斜率 ≈ $-R_D/R_S$ 的直线；然后在线性区（triode region）中趋于平缓，逼近下限 $V_{DD}R_S/(R_S+R_D)$。

- $V_{in} \le 0.7$ V：$M_1$ 截止，$V_{out} = V_{DD}$（恰好在 $V_{TH0}$ 处导通，因为 $I_D = 0$ 时源极电位为 0 V）。
- 饱和区（saturation region）：$V_{in} = V_{TH}(I_DR_S) + \sqrt{2I_D/\beta} + I_DR_S$，$V_{out} = V_{DD} - R_DI_D$；斜率为 $-g_mR_D/[1 + (g_m+g_{mb})R_S]$，从 0 开始增大，当 $g_mR_S \gg 1$ 时趋于 ≈ $-R_D/[(1+\eta)R_S]$。
- 一旦 $V_{out} < V_{in} - V_{TH}(V_S)$，即漏极电压低于栅极电压减去阈值电压（threshold voltage），就进入线性区：斜率幅值减小，$V_{out}$ 趋近 $V_{DD}R_S/(R_S + R_D)$（即 $M_1$ 相当于短路时的值），在 $V_{in} = V_{DD}$ 时仍略高于该值。
- 转折点：$V_{in} = 0.7$ V；$V_{out} = V_{in} - V_{TH}$；下限 $V_{DD}R_S/(R_D+R_S)$。
