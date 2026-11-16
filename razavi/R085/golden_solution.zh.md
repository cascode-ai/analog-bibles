$(W/L)_2 \approx 5.16$（例如 2.6/0.5）；$A_v \approx -10.4$。

- $M_1$ 流过 1 mA：$V_{ov1} = \sqrt{2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 40)} = 0.611$ V；线性区边缘：$V_{out} = V_{ov1} = 0.611$ V（$V_{in}$ = 1.311 V）。
- $M_2$ 流过 $I_1 - I_S = 0.25$ mA，且 $|V_{GS2}| = 3 - 0.611 = 2.389$ V，$|V_{ov2}| = 1.589$ V：$(W/L)_2 = 2(0.25\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 1.589^2) \approx 5.16$。
- $g_{m1} = 2I_1/V_{ov1} = 3.27$ mS，$g_{m2} = 2(0.25\ \mathrm{mA})/1.589 = 0.315$ mS；在 λ = 0 时，理想电流源（current source）$I_S$ 不引入电导：$A_v = -g_{m1}/g_{m2} \approx -10.4$。不存在体效应（body effect）：PMOS 的源极与其衬底相连。
