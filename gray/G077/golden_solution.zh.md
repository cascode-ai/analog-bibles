$|V_{OS}| \approx \dfrac{V_{ov}}{2}\dfrac{\Delta(W/L)}{W/L} = \dfrac{0.145\ \mathrm{V}}{2}(0.02) \approx 1.45$ mV。

- $L_{\text{eff}} = 1 - 0.18 = 0.82\ \mu$m，$W/L = 12.2$；每个器件流过 $I_D = 25\ \mu$A。
- $V_{ov} = \sqrt{2I_D/(k'W/L)} = \sqrt{50\ \mu/(194\ \mu \times 12.2)} = 0.145$ V。
- 负载相等时，差模输出为零需要两漏极电流相等，故在 $I_D$ 相等时取 $V_{OS} = V_{GS1} - V_{GS2}$：一阶近似下 $V_{OS} = \Delta V_t + \frac{V_{ov}}{2}\left(-\frac{\Delta (W/L)}{W/L}\right)$；$\Delta V_t = 0$，$|\Delta(W/L)/(W/L)| = 0.02$ → 1.45 mV。
