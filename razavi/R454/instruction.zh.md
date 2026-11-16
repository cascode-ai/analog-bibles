我们基于 [图 1] 所示的拓扑设计一个两级运算放大器（two-stage op amp）。假设功耗预算为 6 mW，$V_{DD} = 3$ V，要求的输出摆幅（output swing）为 2.5 V（$V_{out}$ 处的峰峰值），所有器件的 $L_{eff} = 0.5\ \mu$m。给输出级分配 1 mA 的电流，并给 $M_5$ 和 $M_6$ 分配大致相等的过驱动电压（overdrive voltage），确定 $(W/L)_5$ 和 $(W/L)_6$。注意 $M_5$ 的栅源电容（gate-source capacitance）位于信号通路中，而 $M_6$ 的则不在；因此 $M_6$ 可以比 $M_5$ 大很多。

器件参数：NMOS 管 $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，$V_{TH0} = 0.7$ V；PMOS 管 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，$V_{TH0} = -0.8$ V。
