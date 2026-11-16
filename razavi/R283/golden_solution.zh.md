$\omega_{corner} = \dfrac{1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}$，即 $f_{corner} = \dfrac{1 + A_0}{2\pi(R_F + r_{O1}\|r_{O2})C_{in}} \approx \dfrac{1+A_0}{2\pi R_FC_{in}}$（当 $R_F \gg r_{O1}\|r_{O2}$ 时），其中 $A_0 = (g_{m1}+g_{m2})(r_{O1}\|r_{O2})$。

- $C_1$ 短路时，$M_2$ 的源极处于交流地，因此从 X 到 $V_{out}$ 是一个互补共源（common-source）放大器，其跨导（transconductance）为 $g_{m1}+g_{m2}$，输出电阻（output resistance）为 $r_{O1}\|r_{O2}$，$R_F$ 从输出反馈到 X。
- $C_{in}$ 在 X 处看到的电阻：施加 $v_X$，经 $R_F$ 的电流为 $i_X$：$i_X = (v_X - v_{out})/R_F$，且 $i_X = (g_{m1}+g_{m2})v_X + v_{out}/(r_{O1}\|r_{O2})$ → $R_X = \dfrac{R_F + r_{O1}\|r_{O2}}{1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})}$，即 $R_F$ 因密勒效应（Miller effect）而减小。
- $C_{in}$ 与 $R_X$ 构成高通滤波器（high-pass filter）：转折频率为 $1/(R_XC_{in})$；$V_{out}/V_X$ 与频率无关，因此 $V_{out}/V_{in}$ 也具有相同的转折频率。
