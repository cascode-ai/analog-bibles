$V_X = V_Y \approx 1.54$ V。
- X 和 Y 驱动 $M_5$ 和 $M_6$ 的栅极，这两个管子的源极（以及衬底）接 $V_{DD}$，并且必须流过由 $M_7$、$M_8$ 设定的 1 mA 电流。
- $|V_{GS5}| = |V_{TH}| + \sqrt{\dfrac{2I_D}{\mu_pC_{ox}(W/L)_5}} = 0.8 + \sqrt{\dfrac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(120)}} = 0.8 + 0.659 = 1.459$ V；这里没有体效应（body effect），计算偏置时忽略 λ。
- $V_X = V_Y = V_{DD} - |V_{GS5}| \approx 3 - 1.46 = 1.54$ V。
