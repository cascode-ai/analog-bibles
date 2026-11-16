增益误差 ≈ 17%：闭环增益（closed-loop gain）≈ 3.32，而不是标称值 $C_1/C_3 = 4$。一阶公式 $(C_1 + C_3)/(C_3A_v)$ 给出 20.5%。

- 开环增益（open-loop gain）：对差分半边电路（half circuit），$g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66$ mS；$r_{O1} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ；$r_{O3} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ。因此 $A_v = g_{m1}(r_{O1} \parallel r_{O3}) = 3.66\ \mathrm{mS} \times 6.67\ \mathrm{k\Omega} = 24.4$。
- 反馈系数（feedback factor）$\beta = C_3/(C_1 + C_3) = 0.2$，因此 $\beta A_v = 4.88$。
- 闭环增益 $= (C_1/C_3)/(1 + 1/(\beta A_v)) = 4/1.205 = 3.32$，增益误差 $= 1/(1 + \beta A_v) = 17.0\%$。误差之所以大，是因为采用这种负载的单级差分对（differential pair）增益只有 ≈ 24。
