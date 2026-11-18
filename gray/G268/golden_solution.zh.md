$i_o/v_s \approx 4.37$ mA/V（= 1/229 Ω），环路传输 $T \approx 6.98$，$R_{in} \approx 34.3$ kΩ，$R_{out} \approx 0.64$ MΩ。

- $g_m = 38.46$ mS，$r_\pi = \beta/g_m = 3.9$ kΩ，$r_o = 80$ kΩ。
- 反馈观点：误差电压加在 $r_\pi$ 上；$a = \dfrac{g_m}{1 + (r_b+R_E)/r_\pi} = \dfrac{38.46\text{m}}{1.1026} = 34.9$ mA/V，$f = R_E = 200$ Ω，$T = af = 6.98$。
- $A = a/(1+T) = 34.9\text{m}/7.98 = 4.37$ mA/V；等价地，$1/A = R_E + 1/g_m + (r_b+R_E)/\beta = 200 + 26 + 2.67 = 228.7$ Ω。
- $R_{in} = (1+T)(r_b + r_\pi + R_E) = 7.98\times4.3\text{k} = 34.3$ kΩ $= r_b + r_\pi + (\beta+1)R_E$。
- $R_{out} \approx r_o\left(1 + \dfrac{g_mR_E}{1 + (r_b+R_E)/r_\pi}\right) = 80\text{k}\times7.98 = 638$ kΩ（再计入 $R_E\|(r_\pi+r_b)$ 带来的变化可以忽略）。
