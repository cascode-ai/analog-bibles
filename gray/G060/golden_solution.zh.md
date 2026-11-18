$R_i = \dfrac{r_o + R_D}{1 + g_m r_o}$：$R_D = 10$ kΩ 时约为 505 Ω，$R_D = 1$ MΩ 时约为 1.0 kΩ（999.5 Ω）。

- $g_m = \sqrt{2\mu_n C_{ox}(W/L) I_D} = \sqrt{2 (200\ \mu)(100)(100\ \mu)} = 2$ mA/V；$r_o = 1/(\lambda I_D) = 1/(0.01 \times 100\ \mu\mathrm{A}) = 1\ \mathrm{M\Omega}$；$g_m r_o = 2000$。
- 栅极接地时源极处的输入电阻（无体效应）：由 KCL 得 $i_i = g_m v_i + (v_i - v_o)/r_o$，且 $v_o = i_i R_D$，因此 $R_i = (r_o + R_D)/(1 + g_m r_o)$。
- $R_D = 10$ kΩ：$(1\ \mathrm{M} + 10\ \mathrm{k})/2001 = 504.7\ \Omega$（接近 $1/g_m = 500\ \Omega$）。
- $R_D = 1$ MΩ（并联的理想电流源对小信号负载没有影响）：$(1\ \mathrm{M} + 1\ \mathrm{M})/2001 = 999.5\ \Omega$，约为 $1/g_m$ 的两倍，因为此时漏极负载已可与 $r_o$ 相比。
