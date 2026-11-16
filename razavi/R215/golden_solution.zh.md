$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\dfrac{2(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V}$；当 $|I_{D5}| = 0.8I_{D1}$（$I_{D1} = I_{SS}/2$）时，它变为 $\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\dfrac{|V_{GS5} - V_{TH5}|}{4\Delta V}$。
- 失配使 $M_5$、$M_6$ 的直流电流改变 $\pm\Delta I/2$，其中 $\Delta I = g_{m5}\Delta V$。由于 $I_{D1} = I_{D2}$（栅极电压相等，λ = 0），二极管负载分别流过 $I_3 = I_0 - \Delta I/2$ 和 $I_4 = I_0 + \Delta I/2$，其中 $I_0 = I_{D1} - |I_{D5}|$。
- 因此两个二极管的小信号电阻 $1/g_{m3}$、$1/g_{m4}$（$g_m \propto \sqrt{I}$）不相等：$\Delta(1/g_m)/(1/g_m) \approx \Delta I/(2I_0)$。（λ = 0 时，$M_5$、$M_6$ 本身不流过信号电流。）
- 共模（common-mode）输入使每个输入器件的电流改变 $g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$，因此 $A_{CM-DM} = \dfrac{g_{m1}}{1 + 2g_{m1}R_{SS}}\left(\dfrac{1}{g_{m3}} - \dfrac{1}{g_{m4}}\right)$，而 $A_{DM} \approx g_{m1}/g_{m3}$。
- 比值：CMRR $= (1 + 2g_{m1}R_{SS})\cdot 2I_0/\Delta I$。当 $|I_{D5}| = 0.8I_{D1}$ 时，$g_{m5} = 2|I_{D5}|/|V_{GS5} - V_{TH5}|$，$I_0 = |I_{D5}|/4$，由此得到第二种形式。失配的影响被放大，是因为二极管只流过 20% 的电流。
