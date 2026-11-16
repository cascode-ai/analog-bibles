$V_{OS} \le 0.36\sqrt{\dfrac{I_{SS}}{\mu_nC_{ox}W/L}}$，即约为平衡时过驱动电压（overdrive voltage）的 36%，或 ≈ $0.26\sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$（输入范围 $\Delta V_{in1}$ 的 26%）。
- 小信号增益为 $R_DG_m$，其中 $G_m$ 是 $I_{D1} - I_{D2}$ 在该直流不平衡处的斜率：$G_m = \tfrac12\mu_nC_{ox}\frac{W}{L}\dfrac{4I_{SS}/(\mu_nC_{ox}W/L) - 2V_{OS}^2}{\sqrt{4I_{SS}/(\mu_nC_{ox}W/L) - V_{OS}^2}}$。
- 以 $x = V_{OS}/\sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$ 归一化：$G_m/G_m(0) = (2 - x^2)/\sqrt{4 - x^2}$。
- 令其等于 0.95：$(2 - u)^2 = 0.9025(4 - u)$，$u = x^2 = 0.1315$，$x = 0.363$。
- 验证：当 $V_{OS} = \Delta V_{in1}/2$（$x = 0.707$）时，公式给出 0.80，即下降 20%。
