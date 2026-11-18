$I_{D51} = I_{D52} = 100\ \mu$A。

- 差模单位增益频率：$g_{m1}/C_{Ld} = (2 \times 100\ \mu\text{A}/0.25\ \text{V})/4\ \text{pF} = 0.8\ \text{mA/V}/4\ \text{pF} = 2 \times 10^8$ rad/s。
- 拆分后只有 $M_{52}$ 响应 $v_{cmc}$：$\omega_{u,cm} = g_{m52h}/C_{Lc} = (g_{m52}/2)/C_{Lc}$。令其等于 $2 \times 10^8$ rad/s，得 $g_{m52} = 2(2 \times 10^8)(2\ \text{pF}) = 0.8$ mA/V。
- $g_{m52} = 2I_{D52}/V_{ov52}$ → $I_{D52} = (0.8\ \text{mA/V})(0.25\ \text{V})/2 = 100\ \mu$A；$I_{D51} = 200 - 100 = 100\ \mu$A。
- （两半都保持 $V_{ov} = 0.25$ V，因此共模输入范围不变；代价是低频 $|a_{cmc}|$ 减半。）
