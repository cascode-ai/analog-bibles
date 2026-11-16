# 详细步骤 - R672

**思路。** 推导具有有限 $r_O$、体效应和电流源负载的共栅（CG）级的输入阻抗；它只取决于 $g_{m1}$、$g_{mb1}$、$r_{O1}$ 和 $r_{O2}$。然后证明在理想按比例缩小下，$g_m$ 和 $r_O$ 严格保持不变，$g_{mb}$ 在理想理论中也保持不变（实际上略小），因此输入阻抗保持在约 50 Ω。

### 第 1 步 — 小信号模型

$M_1$ 是共栅晶体管（输入在其源极，栅极和衬底交流接地），电流源负载 $M_2$ 在 $M_1$ 的漏极（节点 `out`）与地之间呈现电阻 $r_{O2}$。在源极与漏极之间，$M_1$ 有 $g_{m1}v_{gs}$ 和 $g_{mb1}v_{bs}$（其中 $v_{gs} = v_{bs} = -v_{in}$）以及 $r_{O1}$。在源极加测试电压 $v_x$，它提供电流 $i_x$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 推导输入阻抗

$i_x$ 全部流过 $M_1$，然后向下流过 $r_{O2}$：

$$v_{out} = i_xr_{O2}.$$

$M_1$ 内部从漏极流向源极的电流为

$$i_{DS} = g_{m1}(-v_x) + g_{mb1}(-v_x) + \frac{v_{out} - v_x}{r_{O1}},$$

在源极节点应用基尔霍夫电流定律（KCL）得 $i_x = -i_{DS}$：

$$i_x = (g_{m1} + g_{mb1})\,v_x + \frac{v_x - v_{out}}{r_{O1}}.$$

代入 $v_{out} = i_xr_{O2}$：

$$
\begin{aligned}
i_x &= (g_{m1} + g_{mb1})\,v_x + \frac{v_x}{r_{O1}} - \frac{i_xr_{O2}}{r_{O1}}\\
i_x\left(1 + \frac{r_{O2}}{r_{O1}}\right) &= v_x\left(g_{m1} + g_{mb1} + \frac{1}{r_{O1}}\right),
\end{aligned}
$$

两边同乘 $r_{O1}$，得

$$R_{in} = \frac{v_x}{i_x} = \frac{r_{O1} + r_{O2}}{1 + (g_{m1} + g_{mb1})\,r_{O1}} .$$

当 $(g_{m1} + g_{mb1})r_{O1} \gg 1$ 时，上式近似为 $\dfrac{1}{g_{m1} + g_{mb1}}\left(1 + \dfrac{r_{O2}}{r_{O1}}\right)$：流过 $r_{O2}$ 的电流抬高了漏极电压，而漏极电压又通过 $r_{O1}$ 把电流推回源极。

**50 Ω 设计示例。** 取 $r_{O1} = r_{O2} = 5\ \mathrm{k}\Omega$，$g_{mb1} = 0.2g_{m1}$，选择 $g_{m1} = 33.2$ mS（$g_{mb1} = 6.63$ mS），得

$$R_{in} = \frac{10\ \mathrm{k}\Omega}{1 + (39.8\ \mathrm{mS})(5\ \mathrm{k}\Omega)} = \frac{10\,000}{200}\ \Omega = 50\ \Omega .$$

### 第 3 步 — $g_m$ 的缩放

$W/L$ 不变，$C_{ox}$ 乘以 $\alpha$，过驱动电压（overdrive voltage）$V_{ov} = V_{GS} - V_{TH}$ 除以 $\alpha$，迁移率不变：

$$g_m' = \mu\,(\alpha C_{ox})\,\frac{W}{L}\,\frac{V_{ov}}{\alpha} = \mu C_{ox}\frac{W}{L}V_{ov} = g_m .$$

$g_{m1}$ **不变**，而漏极电流按 $I_D' = \frac12\mu(\alpha C_{ox})(W/L)(V_{ov}/\alpha)^2 = I_D/\alpha$ 缩放。

### 第 4 步 — $r_O$ 的缩放

$r_O = 1/(\lambda I_D)$，其中 $\lambda \approx (\Delta L/L)/V_{DS}$，$\Delta L$ 是漏极附近被夹断的长度。$\Delta L$ 是一种耗尽型宽度，$\propto\sqrt{V/N}$，理想按比例缩小会使它像 $L$ 一样除以 $\alpha$（电压 ÷ α，掺杂 × α）；因此 $\Delta L/L$ 不变，而 $V_{DS}$ 除以 $\alpha$：

$$\lambda' = \frac{\Delta L/L}{V_{DS}/\alpha} = \alpha\lambda, \qquad r_O' = \frac{1}{(\alpha\lambda)(I_D/\alpha)} = \frac{1}{\lambda I_D} = r_O .$$

$r_{O1}$ 和 $r_{O2}$ 都**不变**：厄利电压（Early voltage）$V_A = 1/\lambda$ 和电流都除以 $\alpha$。一般而言，理想按比例缩小把 I–V 特性映射为自身，只是所有电压和电流都除以 $\alpha$，因此每个增量电阻或电导都保持不变。

### 第 5 步 — $g_{mb}$ 的缩放

记 $g_{mb} = \eta g_m$，其中

$$\eta = \frac{C_d}{C_{ox}} = \frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}}, \qquad \gamma = \frac{\sqrt{2q\epsilon_{si}N_{sub}}}{C_{ox}},$$

$C_d$ 是沟道下方单位面积的耗尽层电容。

**理想理论。** 所有耗尽宽度都按 $1/\alpha$ 缩放，因此 $C_d = \epsilon_{si}/W_{dep}$ 像 $C_{ox}$ 一样增大到 $\alpha$ 倍：$\eta$ 和 $g_{mb}$ 不变。由于 $g_m$、$g_{mb}$、$r_{O1}$ 和 $r_{O2}$ 都不变，

$$R_{in}' = R_{in} = 50\ \Omega .$$

**修正。** 实际上 $2\phi_F$ 不按比例缩小（它随掺杂只按对数变化）：

- $\gamma \to \sqrt{\alpha}/\alpha = \gamma/\sqrt\alpha$；
- $V_{SB} \to V_{SB}/\alpha$，但 $2\phi_F$ 保持不变；
- 因此 $\eta$ 减小的倍数介于 1（若 $V_{SB} \gg 2\phi_F$）与 $\sqrt\alpha$（若 $V_{SB} \ll 2\phi_F$）之间。

因此 $g_{mb}$ 略有下降，$R_{in}$ 略有上升。对于上面的例子，最坏情况为（$\alpha = 2$，$V_{SB} \approx 0$，$\eta$：$0.2 \to 0.2/\sqrt2 = 0.141$）：

$$R_{in}' = \frac{10\ \mathrm{k}\Omega}{1 + (33.2\ \mathrm{mS})(1.141)(5\ \mathrm{k}\Omega)} = \frac{10\,000}{190.4}\ \Omega \approx 52.5\ \Omega ,$$

只上升了百分之几，而不是按 $\alpha$ 的某次幂变化。

### 结果

$$R_{in} = \frac{r_{O1} + r_{O2}}{1 + (g_{m1} + g_{mb1})\,r_{O1}}$$

在理想按比例缩小下，$g_m$ 不变（$C_{ox} \times\alpha$，$V_{ov} \div\alpha$），$r_{O1}$ 和 $r_{O2}$ 不变（$\lambda \times\alpha$，$I_D \div\alpha$），$g_{mb}$ 在理想理论中也不变。因此输入阻抗仍为 **≈ 50 Ω**。由于 $2\phi_F$ 不按比例缩小，$g_{mb}$ 实际上会略有减小，使 $R_{in}$ 上升百分之几（$\alpha = 2$、$g_{mb} \approx 0.2g_m$ 时约为 52–53 Ω）。

**常见错误。** 把 $\lambda$ 当作固定的工艺常数，从而得出 $r_O = 1/(\lambda I_D)$ 增大到 $\alpha$ 倍（或者认为沟道变短使 $r_O$ 减小）。$\Delta L$ 和 $L$ 都缩小 $\alpha$ 倍，而 $V_{DS}$ 也缩小 $\alpha$ 倍，因此 $\lambda$ 恰好增大到 $\alpha$ 倍，抵消了电流的下降。

**常见错误。** 断定输入阻抗按 $\alpha$ 的某次幂变化。$R_{in}$ 中的每个量都是小信号电阻或电导，而理想按比例缩小把电压和电流除以同一个因子。

**常见错误。** 夸大体效应引起的偏差。只有不按比例缩小的 $2\phi_F$ 破坏了不变性，它使 $g_{mb}$（本来就只是 $g_m$ 的一部分）最多变化 $\sqrt\alpha$ 倍，因此 $R_{in}$ 只变化百分之几。
