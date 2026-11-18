$I_{\text{TAIL}} \approx 206\ \mu$A；$k'(W/L_{\text{eff}}) \approx 4.86$ mA/V²，即 $W/L_{\text{eff}} \approx 25$；由 $L_{\text{eff}} = 0.82\ \mu$m 得 $W \approx 20.5\ \mu$m（版图 L = 1 µm）。

- 大信号：$\Delta I_d = I_{d1} - I_{d2} = \dfrac{k'}{2}\dfrac{W}{L}V_{id}\sqrt{\dfrac{4I_{\text{TAIL}}}{k'(W/L)} - V_{id}^2}$，其最大值为 $I_{\text{TAIL}}$。令 $u = k'(W/L)V_{id}^2/(4I_{\text{TAIL}})$，则 $\Delta I_d/I_{\text{TAIL}} = 2\sqrt{u(1-u)}$（适用于 $u \le 1/2$）。
- $2\sqrt{u(1-u)} = 0.85$ → $u = (1 - \sqrt{1 - 0.7225})/2 = 0.2366$ → $k'(W/L)/I_{\text{TAIL}} = 4u/(0.2\ \mathrm{V})^2 = 23.66\ \mathrm{V^{-2}}$。
- 平衡点的跨导：$d\Delta I_d/dV_{id} = \sqrt{k'(W/L)I_{\text{TAIL}}} = 1$ mA/V → $k'(W/L)I_{\text{TAIL}} = 10^{-6}\ \mathrm{A^2/V^2}$。
- 联立求解：$k'(W/L) = \sqrt{23.66 \times 10^{-6}} = 4.86$ mA/V²，$I_{\text{TAIL}} = 4.86\ \mathrm{m}/23.66 = 205.6\ \mu$A。
- $W/L_{\text{eff}} = 4.86\ \mathrm{mA/V^2}/194\ \mu\mathrm{A/V^2} = 25.0$；$L_{\text{eff}} = 1 - 2(0.09) = 0.82\ \mu$m → $W = 20.5\ \mu$m。
- 验证：平衡时 $V_{ov} = \sqrt{I_{\text{TAIL}}/(k'W/L)} = 0.206$ V，$g_m = 2(I_{\text{TAIL}}/2)/V_{ov} = 1.0$ mA/V；完全切换发生在 $\sqrt{2}V_{ov} = 0.29$ V > 0.2 V 处，且 $\Delta I_d(0.2\ \mathrm{V}) = 0.85 I_{\text{TAIL}}$。
