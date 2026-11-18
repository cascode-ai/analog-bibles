$g_m \approx 0.50$ mA/V，$r_o \approx 64$ kΩ，$C_{gs} \approx 1.2$ fF，$C_{gd} \approx 0.32$ fF。

- $L_{\text{eff}} = 0.2 - 0.02 = 0.18\ \mu$m，$W/L = 5$。
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(247\ \mu)(5)(100\ \mu)} = 497\ \mu$A/V（$V_{ov} = 0.40$ V < $V_{DS}$，因此处于饱和区）。若在平方律中保留 $(1+\lambda V_{DS}) = 1.156$，则 $V_{ov} = 0.375$ V，$g_m = 2I_D/V_{ov} = 534\ \mu$A/V。
- $\lambda = 0.028/0.18 = 0.156\ \mathrm{V^{-1}}$；$r_o = 1/(\lambda I_D) = L_{\text{eff}}/(I_D\,dX_d/dV_{DS}) = 64$ kΩ（用 $(1+\lambda V_{DS})/(\lambda I_D)$ 则为 74 kΩ）。
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(0.9)(0.18)(8.22) + 0.9(0.36) = 0.89 + 0.32 = 1.21$ fF。
- $C_{gd} = WC_{ol} = 0.32$ fF。
