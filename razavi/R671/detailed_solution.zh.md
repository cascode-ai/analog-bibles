# 详细步骤 - R671

**思路。** 在 $\lambda = \gamma = 0$ 时，共栅（CG）级的输入阻抗恰好为 $1/g_m$，与负载无关，因此问题归结为 $g_m$ 如何缩放。把理想按比例缩小的规则应用于 $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$，并用 $g_m$ 的另外两种形式验证结果。

### 第 1 步 — 共栅级的输入阻抗

栅极交流接地，在源极加测试电压 $v_x$，则 $v_{gs} = -v_x$；由于没有 $r_O$（$\lambda = 0$）和 $g_{mb}$（$\gamma = 0$），源极节点唯一的通路就是受控源，它把 $g_mv_x$ 抽向漏极：

<!-- diagram: diagram-01.cir -->

$$i_x = g_mv_x \quad\Rightarrow\quad R_{in} = \frac{v_x}{i_x} = \frac{1}{g_m}.$$

在 $\lambda = 0$ 时，漏极电压无法影响漏极电流，因此 $R_D$（或任何负载）都无关紧要。设计值 $R_{in} = 50\ \Omega$ 意味着

$$g_m = \frac{1}{50\ \Omega} = 20\ \mathrm{mS}.$$

### 第 2 步 — $g_m$ 如何缩放

在理想按比例缩小下，$W/L$ 不变，$C_{ox} = \epsilon_{ox}/t_{ox}$ 增大到 $\alpha$ 倍，过驱动电压（overdrive voltage）$V_{ov} = V_{GS} - V_{TH}$ 除以 $\alpha$，迁移率 $\mu$ 视为不变：

$$
\begin{aligned}
g_m' &= \mu\,(\alpha C_{ox})\,\frac{W/\alpha}{L/\alpha}\,\frac{V_{ov}}{\alpha}\\
&= \frac{\alpha}{\alpha}\,\mu C_{ox}\,\frac{W}{L}\,V_{ov} = g_m .
\end{aligned}
$$

$C_{ox}$ 的增大恰好抵消了过驱动电压的减小。用漏极电流验证：

$$I_D = \frac12\mu C_{ox}\frac{W}{L}V_{ov}^2 \;\to\; \frac12\mu\,(\alpha C_{ox})\,\frac{W}{L}\left(\frac{V_{ov}}{\alpha}\right)^2 = \frac{I_D}{\alpha}:$$

- 由 $g_m = 2I_D/V_{ov}$：$g_m' = 2(I_D/\alpha)/(V_{ov}/\alpha) = 2I_D/V_{ov} = g_m$；✓
- 由 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$：$g_m' = \sqrt{2\mu(\alpha C_{ox})(W/L)(I_D/\alpha)} = g_m$。✓

三种形式的结果一致：**$g_m$ 在理想按比例缩小下保持不变**。

### 第 3 步 — 缩放后的输入阻抗

$$R_{in}' = \frac{1}{g_m'} = \frac{1}{g_m} = 50\ \Omega .$$

**数值示例。** 若原设计采用 $V_{ov} = 0.2$ V，则

$$I_D = \frac{g_mV_{ov}}{2} = \frac{(20\ \mathrm{mS})(0.2\ \mathrm{V})}{2} = 2\ \mathrm{mA}.$$

按 $\alpha = 2$ 缩放后：$V_{ov} = 0.1$ V，$I_D = 1$ mA，因此

$$g_m = \frac{2I_D}{V_{ov}} = \frac{2(1\ \mathrm{mA})}{0.1\ \mathrm{V}} = 20\ \mathrm{mS}, \qquad R_{in} = 50\ \Omega .$$

偏置电流和电源电压都减半了，因此功耗（$V_{DD}I_D$）降低了 $\alpha^2 = 4$ 倍，但输入仍与 50 Ω 匹配。

### 结果

$$R_{in} = \frac{1}{g_m} = 50\ \Omega\quad\text{(unchanged)}.$$

在理想按比例缩小下，$g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ 保持不变，因为 $C_{ox}$ 增大到 $\alpha$ 倍，而过驱动电压减小 $\alpha$ 倍（等价地，在 $g_m = 2I_D/V_{ov}$ 中，$I_D$ 减小 $\alpha$ 倍，$V_{ov}$ 也减小 $\alpha$ 倍）。输入阻抗仍为 50 Ω，而偏置电流和功耗都下降了。

**常见错误。** 让阻抗随器件尺寸缩放（例如 $50\alpha$ 或 $50/\alpha$ Ω）。输入阻抗是 $1/g_m$，更薄的氧化层恰好补偿了更低的过驱动电压。

**常见错误。** 使用 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$，却忘记 $C_{ox}$ 也会缩放，从而得到 $g_m \to g_m/\sqrt\alpha$ 和 $R_{in} = 50\sqrt\alpha$ Ω。必须同时计入 $C_{ox}$（$\times\alpha$）和 $I_D$（$\div\alpha$）。
