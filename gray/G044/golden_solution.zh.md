$g_m \approx 308\ \mu$A/V，$g_{mb} \approx 11\ \mu$A/V，$r_o \approx 2.05$ MΩ，$C_{gs} \approx 27$ fF，$C_{gd} \approx 3.5$ fF，$C_{sb} \approx 11$ fF，$C_{db} \approx 8.3$ fF。

- $L_{\text{eff}} = 1 - 2(0.09) = 0.82\ \mu$m，$W/L = 12.2$。
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(194\ \mu)(12.2)(20\ \mu)} = 308\ \mu$A/V（$V_{ov} = 0.13$ V；若保留 $(1+\lambda V_{DS})$ 因子，约为 315 μA/V）。
- $g_{mb} = g_m\gamma/(2\sqrt{2\phi_f + V_{SB}}) = 308\times0.094/(2\times1.289) = 11.2\ \mu$A/V（$\chi = 0.036$）。
- $\lambda = 0.02/0.82 = 0.0244\ \mathrm{V^{-1}}$；$r_o = 1/(\lambda I_D) = 2.05$ MΩ（用 $(1+\lambda V_{DS})/(\lambda I_D)$ 则为 2.15 MΩ）。
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(10)(0.82)(4.32) + 3.5 = 23.6 + 3.5 = 27.1$ fF；$C_{gd} = WC_{ol} = 3.5$ fF。
- 结电容：底面积 10 μm² → 零偏时 2.0 fF；与场氧化层相邻的周长 $10 + 1 + 1 = 12$ μm → 14.4 fF（栅极边缘不计入）。$C_{sb}$（$V_{SB} = 1$ V）：$2.0/\sqrt{1+1/0.7} + 14.4/(1+1/0.7)^{0.4} = 1.28 + 10.1 = 11.4$ fF。$C_{db}$（$V_{DB} = 3$ V）：$2.0/\sqrt{1+3/0.7} + 14.4/(1+3/0.7)^{0.4} = 0.87 + 7.4 = 8.3$ fF。（若按 22 μm 的全周长计算：19.8 fF 和 14.4 fF。）沟道-衬底耗尽电容（约 1 fF）忽略不计。
