两个结论都源于以下事实：伺服环路迫使 $v_{OUT} = v_{SET}$；电源也移动 $v_{SET}$，因此相对于其自身的电源，被测运放只看到 $-v_{SET}$ 的共模输入变化；为使输出相对于电源保持不变，它需要 $v_I = v_{SET}/\mathrm{CMRR}$，而 $v_{OS} \approx 1000\,v_I$。

- 辅助运放：其反相输入端为虚地且不取电流，因此 $v_{OUT}/100\,\mathrm{k} + (-v_{SET})/100\,\mathrm{k} = 0$ → $v_{OUT} = v_{SET}$。
- 电源：正电源轨为 $V_{DD} + v_{SET}$，负电源轨为 $-V_{SS} + v_{SET}$。把所有电压平移 $-v_{SET}$（运放没有接地端），其电源和输出不变，而两个输入端（≈ 0）都处于 $-v_{SET}$：即共模输入 $v_{ic} = -v_{SET}$，输出变化为零。
- 被测运放：$A_v v_{id} + A_c v_{ic} = 0$ → $v_{id} = A_c v_{SET}/A_v = v_{SET}/\mathrm{CMRR}$（取幅值；$v_{id}$ = $v_I$ 减去固定的输入失调）。
- 分压器：$v_I = v_{OS}\cdot10/10010$ → $v_{OS} = 1001(v_{SET}/\mathrm{CMRR} + V_{off}) \approx 1000\,v_{SET}/\mathrm{CMRR} + 1001V_{off}$。
- (a) $V_{OS1} - V_{OS2} = 1000(+1 - (-1))\ \mathrm{V}/\mathrm{CMRR}$；失调项相互抵消 → $\mathrm{CMRR} = 2000\ \mathrm{V}/|V_{OS1}-V_{OS2}|$。
- (b) 小信号：$v_{os} = 1000\,v_{icm}/\mathrm{CMRR}$ → $\mathrm{CMRR} = 1000\,v_{icm}/v_{os}$；扫描 $v_{icm}$ 的频率即可得到 CMRR(f)（只要伺服环路在该频率下仍能保持 $v_{OUT} = v_{SET}$）。
- 近似 1001 ≈ 1000 引入 0.1% 的误差。
