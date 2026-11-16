$(W/L)_2 \approx 0.027$（例如 W = 0.5 μm，L ≈ 18.6 μm），由 $g_{m2} = 60\ \mu$S 求得。注意，这需要过驱动电压（overdrive voltage）$V_{GS2} - V_{TH} = 2I_D/g_{m2} \approx 16.7$ V，远超任何 3 V 电源所能提供的电压，因此在 0.5 mA 下该要求无法实现。

- 输入端开路时，$M_1$ 中流过的恰好是 $M_2$ 的电流，因此 $\overline{I_{n,in}^2} = 4kT/R_D + 4kT\gamma g_{m2}$（$M_1$ 没有贡献）。
- 均方根（rms）条件：$\sqrt{4kT\gamma g_{m2}} = \tfrac15\sqrt{4kT/R_D}$ → $g_{m2} = \dfrac{1}{25\gamma R_D} = 60\ \mu$S。
- $(W/L)_2 = \dfrac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \dfrac{(60\ \mu)^2}{2(134\ \mu)(0.5\ \mathrm{m})} = 0.0269$。
- （若 γ = 1：$g_{m2} = 40\ \mu$S，$(W/L)_2 = 0.0119$，过驱动电压为 25 V。）
