$I_{C,\text{opt}} = 520\ \mu$A；$R_C$ 上的直流压降为 26 V；$v_o/v_i \approx -139$。

- 增益：$v_o/v_i = -\beta_0 (R_C\|r_o)/(R_S + r_\pi)$，其中 $r_\pi = \beta_0 V_T/I_C$，$r_o = V_A/I_C$。对 $I_C$ 求最大值得 $I_{C,\text{opt}} = \sqrt{\beta_0 V_T V_A/(R_S R_C)} = \sqrt{200 \times 0.026 \times 130/(5\times10^4)^2} = 520\ \mu$A。
- $R_C$ 上的压降：$520\ \mu\mathrm{A} \times 50\ \mathrm{k\Omega} = 26$ V（因此 $V_{CC}$ 需超过约 27 V；在低压电路中这一最优值并不实用）。
- 在该电流下：$g_m = 20$ mA/V，$r_\pi = 10\ \mathrm{k\Omega}$，$r_o = 250\ \mathrm{k\Omega}$，$R_C\|r_o = 41.7\ \mathrm{k\Omega}$；$v_o/v_i = -200 \times 41.7\ \mathrm{k\Omega}/(50 + 10)\ \mathrm{k\Omega} = -138.9$。
