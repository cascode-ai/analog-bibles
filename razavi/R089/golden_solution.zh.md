$V_{out}$ 先沿电阻分压直线上升，在 $M_1$ 刚导通后不久达到峰值，然后下降（反相），$M_1$ 则从饱和区（saturation region）进入线性区（triode region）。

- $V_{in} < 0.7$ V：$M_1$ 截止；$R_F$ 把输入源连到输出端：$V_{out} = \dfrac{R_FV_{DD} + R_DV_{in}}{R_D+R_F}$，起点为 $V_{DD}R_F/(R_D+R_F)$，斜率为 $R_D/(R_D+R_F) > 0$。
- $V_{in} > 0.7$ V，$M_1$ 饱和（$V_{out} > V_{in} - 0.7$）：$(V_{DD} - V_{out})/R_D + (V_{in} - V_{out})/R_F = \tfrac12\beta(V_{in} - 0.7)^2$；斜率 $= (1/R_F - g_m)(R_D\|R_F)$：在略高于 0.7 V 处仍为正，在 $g_m = 1/R_F$ 处，即 $V_{in} = 0.7 + 1/(\beta R_F)$ 处（$V_{out}$ 的最大值）为零，之后为负，当 $g_m \gg 1/R_F$ 时趋于 $-g_m(R_D\|R_F)$。
- $M_1$ 在 $V_{out} = V_{in} - 0.7$ 处进入线性区；之后继续下降，但斜率逐渐减小；在 $V_{in} = V_{DD}$ 时，$V_{out}$ 很低，由 $(3 - V_{out})(1/R_D + 1/R_F) = \beta[2.3V_{out} - V_{out}^2/2]$ 确定。
- 一旦 $V_{in} > V_{out}$，$R_F$ 中的电流就反向（从输入流向输出）。
- 转折点：$V_{in} = 0.7$ V 处导通（$V_{out} = (R_FV_{DD} + 0.7R_D)/(R_D+R_F)$），$g_m = 1/R_F$ 处达到峰值，$V_{out} = V_{in} - 0.7$ V 处进入线性区。
