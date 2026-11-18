一种设计：每管 $I_C = 5.2\ \mu$A，$R_C = 2.5$ MΩ，$R_{\text{TAIL}} \approx 1.25$ MΩ；$V_{CC,\min} = 13$ V，$V_{EE,\min} \approx 13.7$ V。（指标确定了全部参数值，因此任何正确的设计基本上都是这一个。）

- $R_{id} = 2r_\pi = 2$ MΩ → $r_\pi = 1$ MΩ → $g_m = \beta_0/r_\pi = 0.2$ mA/V → $I_C = g_m V_T = 5.2\ \mu$A。
- $|A_{dm}| = g_m R_C = 500$ → $R_C = 2.5$ MΩ。
- CMRR $= 1 + 2g_m R_{\text{TAIL}} = 500$ → $R_{\text{TAIL}} = 499/(2 \times 0.2\ \mathrm{mA/V}) = 1.25$ MΩ（若保留因子 $1 + 1/\beta_0$，则为 1.24 MΩ）。
- $V_{CC}$：集电极电位为 $V_{CC} - I_C R_C = V_{CC} - 13$ V；基极处于 0 V，正向放大区要求 $V_{CB} \ge 0$，故 $V_{CC} \ge 13$ V。
- $V_{EE}$：尾节点电位为 $-V_{BE} \approx -0.7$ V，流过电流 $2I_E = 2 \times 5.2\ \mu\mathrm{A}/\alpha_0 = 10.45\ \mu$A：$V_{EE} = 0.7 + 10.45\ \mu\mathrm{A} \times 1.25\ \mathrm{M\Omega} \approx 13.7$ V（若采用由 $I_S = 5\times10^{-15}$ A 得到的 $V_{BE} \approx 0.54$ V，则为 13.6 V）。
