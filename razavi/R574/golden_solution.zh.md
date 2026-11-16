$g_{m1}(t) = \beta(V_{DD} - V_{out} - V_{TH}) = \dfrac{g_{m0}}{1 + t/\tau_0}$，其中 $g_{m0} = \beta(V_{DD} - V_{TH}) = 12.3$ mS（$1/g_{m0}$ = 81 Ω），$\tau_0 = 2C_H/g_{m0} = 162$ ps。

- CK 上升之前 $g_m = 0$。在 $t = 0$ 时它跳变到 12.3 mS（理想时钟边沿），然后按双曲线规律（而不是指数规律）衰减：0.16 ns 时为 6.2 mS，0.5 ns 时为 3.0 mS，1 ns 时为 1.7 mS，1.7 ns 时为 1.07 mS（$V_{out}$ = 2.1 V），5 ns 时为 0.39 mS。
- 当 $t \gg \tau_0$ 时，随着 $V_{out} \to V_{DD} - V_{TH}$，$g_m \approx 2C_H/t \to 0$。
- 等价地，$1/g_m = 81\ \Omega + t/(2\ \mathrm{pF})$ 随时间线性增大，这就是充电过程无法用单一时间常数描述的原因。
- 推导：饱和区充电的解给出过驱动电压（overdrive voltage）$V_{ov}(t) = 1/[\beta t/(2C_H) + 1/(V_{DD} - V_{TH})]$，而 $g_m = \beta V_{ov}$。
