该设计不可行：噪声要求迫使 $g_{m2} = 60\ \mu$S，即过驱动电压（overdrive voltage）$V_{ov2} = 2I_D/g_{m2} \approx 16.7$ V，因此不计体效应（body effect）时 $V_{b,min} = V_{ov2} + V_{GS1} \approx 17.6$ V（计入体效应时 ≈ 19.1 V，其中 $V_{TH1}$ ≈ 2.16 V，对应 $V_{SB}$ ≈ 16.7 V），远高于 $V_{DD}$。输出电压必须保持在 $V_b - V_{TH1} = V_{ov2} + V_{ov1} \approx 16.9$ V 以上，而这在 3 V 电源下是不可能的：不存在可用的输出摆幅。

- 噪声条件：$4kT\gamma g_{m2} = \tfrac{1}{25}\cdot 4kT/R_D$，因此 $g_{m2} = 1/(25\gamma R_D) = 60\ \mu$S，$(W/L)_2 \approx 0.027$。
- $M_2$ 处于饱和区边缘：其漏极（即输入节点）电压为 $V_{ov2} = 16.7$ V；$V_{ov1} = \sqrt{2I_D/(\mu_nC_{ox}(W/L)_1)} = 0.273$ V；$V_b = V_{ov2} + V_{TH1} + V_{ov1}$。
- 允许的输出范围：$V_b - V_{TH1} \le V_{out} \le V_{DD}$，即范围宽度为 $V_{DD} - V_{ov1} - V_{ov2} \approx -13.9$ V < 0。
- 要得到正的摆幅，需要 $V_{ov2} < V_{DD} - V_{ov1}$，即 $g_{m2} > 2I_D/(V_{DD} - V_{ov1}) \approx 0.37$ mS，这与噪声要求（60 μS）相矛盾。
