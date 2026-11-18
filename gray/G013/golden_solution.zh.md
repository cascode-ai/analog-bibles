提取出的器件参数：$\tau_F \approx 147$ ps，$C_{je} \approx 4.38$ pF，$V_A = 50$ V，$C_{\mu0} \approx 0.657$ pF，$C_{cs0} \approx 4.38$ pF。$V_{CB} = 2$ V 时 $C_\mu \approx 0.305$ pF；$V_{CS} = 15$ V 时 $C_{cs} \approx 0.824$ pF。

| $I_C$ | $g_m$ | $r_\pi$ | $r_o$ | $r_\mu$ | $C_\pi = \tau_Fg_m + C_{je}$ |
|---|---|---|---|---|---|
| 0.1 mA | 3.85 mA/V | 26 kΩ | 500 kΩ | 250 MΩ | 0.57 + 4.38 = 4.95 pF |
| 1 mA | 38.5 mA/V | 2.6 kΩ | 50 kΩ | 25 MΩ | 5.67 + 4.38 = 10.05 pF |
| 5 mA | 192 mA/V | 520 Ω | 10 kΩ | 5 MΩ | 28.3 + 4.38 = 32.7 pF |

三种电流下均有：$r_b = 100\ \Omega$，$r_c = 100\ \Omega$，$C_\mu = 0.305$ pF，$C_{cs} = 0.824$ pF（$r_{ex}$ 未给出，取为零）。拓扑：B – $r_b$ – B′；B′–E 之间接 $r_\pi \parallel C_\pi$；B′–C′ 之间接 $r_\mu \parallel C_\mu$；C′–E 之间接 $g_mv_1$ 和 $r_o$；C′–C 之间接 $r_c$；C′ 与衬底之间接 $C_{cs}$。

推导：
- $\tau_T = 1/(2\pi f_T)$ 在 1 mA 时为 265.3 ps，在 10 mA 时为 159.2 ps。由 $\tau_T = \tau_F + (C_{je}+C_\mu)/g_m$，且 $1/g_m$ 分别为 26 Ω 和 2.6 Ω：$(C_{je}+C_\mu)(26 - 2.6)\ \Omega = 106.1$ ps → $C_{je}+C_\mu = 4.53$ pF；由 $C_\mu(10\ \mathrm{V}) = 0.15$ pF 得 $C_{je} = 4.38$ pF；$\tau_F = 159.2 - 2.6\times4.53 = 147.4$ ps。
- $V_A = r_oI_C = 50$ V，因此 $r_o = 50\ \mathrm{V}/I_C$。
- $C_{\mu0} = 0.15\sqrt{1+10/0.55} = 0.657$ pF → $C_\mu(2\ \mathrm{V}) = 0.657/\sqrt{1+2/0.55} = 0.305$ pF；$C_{cs0} = 1\times\sqrt{19.18} = 4.38$ pF → $C_{cs}(15\ \mathrm{V}) = 4.38/\sqrt{1+15/0.55} = 0.824$ pF。
