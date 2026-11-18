$V_{GS}$ = 1、1.5 和 2 V 时，$f_T \approx 3.5$ GHz、7.9 GHz 和 12.3 GHz（若 $g_m$ 中不计 $1+\lambda V_{DS}$ 因子，则为 3.3、7.4 和 11.5 GHz）。

- $f_T = \dfrac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}$（漏极短路，源极和衬底接交流地）。
- $C_{ox} = 4.31$ fF/µm²；$C_{gs} = \tfrac23WLC_{ox} + 2 = 28.75 + 2 = 30.75$ fF；$C_{gd} = 2$ fF（有源区只有交叠电容）；加上 $C_{gb}$ 后总计 37.75 fF。
- $g_m = k'(W/L)(V_{GS}-V_t)(1+\lambda V_{DS}) = 1.94\ \mathrm{mA/V^2}\times V_{ov}\times1.072$：$V_{ov}$ = 0.4、0.9、1.4 V 时分别为 0.832、1.87、2.91 mA/V（由于 $V_{DS} = 3$ V > $V_{ov}$，均处于有源区）。
- $f_T$ = 0.832 mA/V / (2π·37.75 fF) = 3.51 GHz；7.89 GHz；12.3 GHz。$f_T$ 与过驱动电压（overdrive voltage）成正比增长。
