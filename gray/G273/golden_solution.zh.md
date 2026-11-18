$\mathcal{R} \approx 16.5$，$v_o/v_i \approx -9.42$，$R_{in} \approx 10.55$ kΩ，$R_{out} \approx 523$ Ω。

- $\mathcal{R}$（$v_i = 0$）：用测试电压 $v_t$ 代替受控源，它经 $R_o + 100\text{k}$ 驱动 $10\text{k}\|1\text{M} = 9.90$ kΩ：$v_- = v_t\cdot9.90/119.9$，$v_x = -v_-$，所以 $\mathcal{R} = 200\times0.0826 = 16.52$。
- $A_\infty = -100\text{k}/10\text{k} = -10$。
- $d$（$a_v = 0$）：$v_- = v_i\,\dfrac{R_i\|110\text{k}}{10\text{k} + R_i\|110\text{k}} = 0.908\,v_i$，$v_o = v_-\cdot10/110$，$d = 0.0826$。
- $A = -10\cdot\dfrac{16.52}{17.52} + \dfrac{0.0826}{17.52} = -9.429 + 0.005 = -9.424$。
- $R_{in}$：$R(a_v{=}0) = 10\text{k} + 1\text{M}\|110\text{k} = 109.1$ kΩ；$\mathcal{R}$（端口短路）= 16.52；$\mathcal{R}$（端口开路）$= a_v R_i/(R_i + 100\text{k} + R_o) = 180.2$；$R_{in} = 109.1\text{k}\times17.52/181.2 = 10.55$ kΩ（≈ 10 kΩ 加上反相输入节点处的 ≈ 547 Ω）。
- $R_{out}$：$R(a_v{=}0) = 10\text{k}\|(100\text{k} + 9.9\text{k}) = 9.17$ kΩ；$\mathcal{R}$（输出短路）= 0，$\mathcal{R}$（输出开路）= 16.52；$R_{out} = 9.17\text{k}/17.52 = 523$ Ω。
