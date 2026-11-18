$r_{o2} \approx 3.0$ MΩ。

- 在有源区 $r_o \approx 1/(\lambda I_D) = L_{\text{eff}}/[I_D\,(dX_d/dV_{DS})]$。两个器件处于同一工艺、相同的 $V_{DS}$ 下，因此 $dX_d/dV_{DS}$（几乎）相同，$r_{o2} = r_{o1}\dfrac{I_{D1}}{I_{D2}}\dfrac{L_{\text{eff2}}}{L_{\text{eff1}}}$。
- $X_d$（向 2.1×10¹⁶ 层中延伸的单边突变结，电压为 $V_{DS} - V_{ov}$）：器件 1 $V_{ov} = \sqrt{2I_D/(k'W/L)} = 0.15$ V，$X_d \approx 0.54\ \mu$m；器件 2 $V_{ov} = 0.48$ V，$X_d \approx 0.53\ \mu$m。$L_{\text{eff1}} = 7 - 0.6 - 0.54 = 5.86\ \mu$m，$L_{\text{eff2}} = 12 - 0.6 - 0.53 = 10.87\ \mu$m。
- $r_{o2} = 5\ \mathrm{M\Omega}\times(10/30)\times(10.87/5.86) = 3.1$ MΩ；忽略 $X_d$ 时为 $5\times(1/3)\times(11.4/6.4) = 2.97$ MΩ。（由测得的 $r_{o1}$ 可推出 $dX_d/dV_{DS} = L_{\text{eff1}}/(I_Dr_{o1}) \approx 0.12\ \mu$m/V；器件 2 的 $V_{DS} - V_{ov}$ 略低，使其 $dX_d/dV_{DS}$ 增大约 4%，得到约 3.0 MΩ。）
