小信号：每管 $I_C = 50$ µA，$g_m = 1.92$ mS，$r_{o2} = 2.6$ MΩ，$r_{o4} = 1$ MΩ。$R_o = r_{o2}\|r_{o4} \approx 0.72$ MΩ；$v_o/v_i = g_{m1}R_o \approx +1.39\times10^3$（计入 pnp 电流镜基极电流误差时 ≈ $1.37\times10^3$）。

传输特性（$V_{SUP}$ = 2.5 V）：转变非常陡峭（输入仅变化约 2 mV，输出摆动约 2.5 V），中心位于系统失调（systematic offset）$V_I \approx V_T\ln(1 + 2/\beta_{F,pnp}) \approx +1$ mV 附近，此处 $V_O \approx V_{SUP} - |V_{BE}| \approx 1.8$ V；$V_I$ 正向增大时输出上升，直到 $Q_4$ 饱和（≈ $V_{SUP} - V_{CE(\text{sat})}$ ≈ 2.3 V）；$V_I$ 为负时输出下降，直到 $Q_2$ 饱和（≈ −0.5 V，比约 −0.7 V 的公共发射极节点高一个 $V_{CE(\text{sat})}$）。

$r_{tail}$ = 1 MΩ 时的 CMRR：$\mathrm{CMRR} \approx \dfrac{1 + 2g_mr_{tail}}{\dfrac{1}{1 + g_{m(mir)}r_{o(dp)}} + \dfrac{1}{1 + g_{m(mir)}r_{\pi(mir)}/2}} = \dfrac{3847}{0.0002 + 0.0385} \approx 1.0\times10^5$（≈ 100 dB；完整小信号求解给出 9.7×10⁴），主要由 pnp 基极电流误差决定。
