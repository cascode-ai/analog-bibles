忽略 λ（与图中所画的模型一致）：极点位于 $\omega_{p1} \approx 2.46\times10^9$ rad/s（$f \approx 392$ MHz）和 $\omega_{p2} \approx 3.33\times10^{10}$ rad/s（$f \approx 5.3$ GHz），都在左半平面；零点位于 $s = +g_m/C_{GD} \approx +2.59\times10^{11}$ rad/s（$f \approx 41$ GHz），在右半平面。低频增益为 $-g_mR_D = -10.4$。
计入 $r_O = 1/(\lambda I_D) = 10\ \mathrm{k\Omega}$（$R_D\|r_O = 1.67\ \mathrm{k\Omega}$）时：极点 ≈ $2.84\times10^9$ rad/s（453 MHz）和 $3.47\times10^{10}$ rad/s（5.5 GHz）；零点相同；增益为 −8.6。

推导：
- $g_m = \sqrt{2(134\ \mu)(100)(1\ \mathrm{mA})} = 5.18$ mS（$V_{GS} - V_{TH} = 0.386$ V）。
- $WLC_{ox} = 96$ fF；$C_{GS} = \tfrac23(96) + 50(0.4) = 84.0$ fF；$C_{GD} = 50(0.4) = 20.0$ fF；$C_{DB} = 50(1.5)(0.56) + 2(51.5)(0.0035) = 42.4$ fF。
- 精确传递函数（λ = 0）：$\dfrac{V_{out}}{V_{in}} = \dfrac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + [R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})]s + 1}$，$\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB} = 6.08\times10^{-27}\ \mathrm{F^2}$。
- 系数：$s^2$ 项：$R_SR_D\xi = 1.22\times10^{-20}\ \mathrm{s^2}$；$s$ 项：$2.27\times10^{-10} + 0.84\times10^{-10} + 1.25\times10^{-10} = 4.36\times10^{-10}$ s。根：$2.46\times10^9$ 和 $3.33\times10^{10}$ rad/s。
- 主极点（dominant pole）近似给出 $\omega_{p1} \approx 1/(4.36\times10^{-10}) = 2.29\times10^9$ rad/s 和 $\omega_{p2} \approx 3.6\times10^{10}$ rad/s，与精确根相近。（单纯用密勒节点估算，输入极点为 0.51 GHz，输出极点为 1.28 GHz；后者与真实的第二个极点相差很远。）
