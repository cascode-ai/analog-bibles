将主极点降低 2 倍（即减半），这会使环路的单位增益频率（unity-gain frequency）减半。于是 $|\beta H|$ 重新在新的输出极点 $\omega_{p2}/2$ 处达到单位增益。采用密勒补偿（Miller compensation）时，这意味着把 $C_C$ 加倍。

- $C_L$ 加倍使输出极点减半：$\omega'_{p2} \approx \omega_{p2}/2$。
- 补偿后的主极点必须满足 $\omega'_{p1} \approx \omega'_{p2}/(\beta A_0)$，因此它必须减半。
- 采用密勒补偿时，$\omega_{p1} \propto 1/C_C$，$\omega_T = \beta g_{m1}/C_C$，因此把 $C_C$ 加倍即可做到这一点。一旦 $C_C$ 远大于第一级节点电容，$\omega_{p2} \approx g_{m2}/C_L$ 几乎不受 $C_C$ 影响。
- 如果使用了串联的调零电阻（nulling resistor），$C_C$ 加倍也会使其零点频率减半，因此在一阶近似下零点仍跟踪减半后的输出极点（可能只需微调）。
- 代价是闭环带宽（closed-loop bandwidth）减半。通过把输出级的 $g_m$（以及功耗）加倍来恢复 $\omega_{p2}$ 可以避免这一点，但这改变的是运放本身，而不是它的补偿。
