$C_{GS} \approx 84.0$ fF，$C_{GD} = 20$ fF，$C_{GB} \approx 0$，$C_{DB} \approx 21.2$ fF，$C_{SB} \approx 42.4$ fF；$f_T \approx 7.9$ GHz。
- $WLC_{ox} = 50 \times 0.5 \times 3.84 = 96.0$ fF；$WC_{ov} = 50 \times 0.4 = 20$ fF。
- 饱和区：$C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64.0 + 20 = 84.0$ fF；$C_{GD} = WC_{ov} = 20$ fF；忽略 $C_{GB}$，因为反型层（inversion layer）屏蔽了衬底（bulk）。
- $C_{jsw} = 0.35\times10^{-11}$ F/m = 0.0035 fF/µm（此处可以忽略）。
- 漏极（一个 $W/2 \times E$ 的区域）：$C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} = 25 \times 1.5 \times 0.56 + 2(26.5)(0.0035) = 21.0 + 0.19 = 21.2$ fF。
- 源极（两个 $W/2 \times E$ 的区域）：$C_{SB} = WEC_j + 2(W + 2E)C_{jsw} = 42.0 + 0.37 = 42.4$ fF。
- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS，对应的过驱动电压（overdrive voltage）为 0.39 V；$f_T = g_m/[2\pi(C_{GS} + C_{GD})] = 5.18\ \mathrm{mS}/(2\pi \times 104.0\ \mathrm{fF}) \approx 7.9$ GHz。

## 评分说明

分项检查 $C_{GS}$、$C_{GD}$、$C_{DB}$、$C_{SB}$（以及 $C_{GB}\approx 0$）和 $f_T$，数值容差为 ±5%。

- +2 分：各项正确。侧壁电容可因影响很小而忽略。
- +1 分：因疏漏算错一项电容，或各电容正确但计算 $f_T$ 时只用 $C_{GS}$，得到约 $9.8\ \mathrm{GHz}$。
- 0 分：约一半结果正确。例如把折叠结构错误地同时用于漏端和源端，将漏端电容算成 $42\ \mathrm{fF}$。
- −2 分（作为正确结论明确断言）：错误的电容模型导致大部分结果出错，例如完全忽略重叠电容（得到 $C_{GD}=0$、$f_T\approx 13\ \mathrm{GHz}$），或把结电容计入 $f_T$ 的计算。
