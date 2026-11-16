约 0.42 ns：其中 $M_2$ 截止、电路压摆（slewing）的时间 ≈ 0.36 ns，加上 $M_2$ 导通且其电流增长到 0.1 mA 的时间 ≈ 0.05 ns。

- 1 V 的差分输入远大于 $\sqrt2 V_{OD} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)} = \sqrt{2(1\ \mathrm{m})/(134\ \mu \cdot 200)} = 0.273$ V，因此 $M_1$ 获得全部 $I_{SS}$，$M_2$ 截止。$M_4$ 把 1 mA 镜像到输出端，给串联的 $C_1$–$C_2$（0.25 pF）充电：$dV_{out}/dt = 4$ V/ns，节点 X 以 $dV_X/dt = I_{SS}/C_2 = 2$ V/ns 的速率上升。
- 当 $V_{in} - V_X$ 降到 0.273 V 时，$M_2$ 开始导通：$t_1 = (1 - 0.273)\ \mathrm{V}/(2\ \mathrm{V/ns}) = 0.363$ ns。
- $I_{D2} = 0.1I_{SS}$ 意味着 $I_{D1} - I_{D2} = 0.8I_{SS}$；由 $I_{D1} - I_{D2} = \tfrac12\mu_nC_{ox}\frac{W}{L}\Delta V\sqrt{4I_{SS}/(\mu_nC_{ox}W/L) - \Delta V^2}$ 可知，这发生在 $\Delta V = V_{in} - V_X = 0.173$ V 时。
- 从 0.273 V 到 0.173 V，充电电流为 $I_{D1} - I_{D2}$（小于 $I_{SS}$）：$t_2 = C_2\int_{0.173}^{0.273} d\Delta V/(I_{D1} - I_{D2}) \approx 0.054$ ns（若假设始终为完整的 $I_{SS}$，则得到 0.050 ns）。
- 总时间 ≈ 0.42 ns。
