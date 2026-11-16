$L \approx 159$ nH（若 $C_{GS}$ 中不计交叠电容，则 ≈ 121 nH）。
- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS，$1/g_m = 193\ \Omega$。
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64 + 20 = 84$ fF。
- 输出阻抗：$Z_{out} = \dfrac{1 + R_SC_{GS}s}{g_m + C_{GS}s}$，低频时等于 $1/g_m$，高频时等于 $R_S$；由于 $R_S > 1/g_m$，它随频率升高而增大，即呈感性（inductive）。
- 等效网络：$R_2 = 1/g_m$ 与 $R_1 \| L$ 串联，其中 $R_1 = R_S - 1/g_m = 9.81\ \mathrm{k\Omega}$，$L = \dfrac{C_{GS}}{g_m}\left(R_S - \dfrac{1}{g_m}\right) = \dfrac{84\ \mathrm{fF}}{5.18\ \mathrm{mS}}(9807\ \Omega) \approx 1.59\times10^{-7}$ H。
- 其他等效形式给出的值几乎相同：精确的并联形式 $R_S \| (R_x + sL)$ 中，$R_x = R_S/(g_mR_S - 1) \approx 197\ \Omega$，$L = R_S^2C_{GS}/(g_mR_S - 1) \approx 165$ nH；在近似 $R_S \gg 1/g_m$ 下，$L \approx R_SC_{GS}/g_m \approx 162$ nH。
