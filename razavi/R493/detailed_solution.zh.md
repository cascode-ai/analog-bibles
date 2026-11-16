# 详细步骤 - R493

**思路。** 先求出使零点落在次极点上的电阻 $R_z = (1/g_{m9})(1 + C_L/C_C)$。$M_{15}$ 中没有直流电流，因此它是一个工作在深线性区（deep triode region）、阻值由其过驱动电压决定的电阻。设计 $M_{13}$ 的尺寸，使 $M_{14}$ 的源极处于 $M_9$ 栅极的直流电平，这样 $M_{15}$ 的过驱动电压就等于 $M_{14}$ 的过驱动电压，其导通电阻（on-resistance）也就能跟踪 $1/g_{m9}$；然后选取有足够电压余度的 $M_{14}$，并确定 $M_{15}$ 的尺寸。

### 第 1 步 — 零极点对消所需的电阻

$M_9$（即运放中的 $M_5$）的 $I_{D9} = 1$ mA，$(W/L)_9 = 120$，$M_{11}$（即 $M_7$）是它的电流源负载：

$$g_{m9} = \sqrt{2\mu_pC_{ox}(W/L)_9I_{D9}} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = 3.036\ \mathrm{mS}, \qquad \frac{1}{g_{m9}} = 329.4\ \Omega .$$

把 $M_9$ 的栅极记为节点 E（即运放的节点 X）。在零点处输出电压为零，因此输出端的基尔霍夫电流定律（KCL）方程只涉及补偿支路和 $M_9$：$V_E/(R_z + 1/sC_C) = g_{m9}V_E$，由此得

$$s_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$

当 $R_z > 1/g_{m9}$ 时，这是一个位于 $\omega_z = 1/[C_C(R_z - g_{m9}^{-1})]$ 的左半平面（LHP）零点。忽略 $C_E$ 时，极点分裂（pole splitting）使输出极点位于 $\omega_{p2} \approx g_{m9}/C_L$（在高频时，$C_C$ 使 $M_9$ 看起来像一个阻抗为 $1/g_{m9}$ 的二极管，负载为 $C_L$）。令 $\omega_z = \omega_{p2}$：

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m9}^{-1}\right)} &= \frac{g_{m9}}{C_L}\\
R_z &= \frac{1}{g_{m9}} + \frac{C_L}{g_{m9}C_C} = \frac{1}{g_{m9}}\left(1 + \frac{C_L}{C_C}\right)\\
&= 329.4\ \Omega\times\left(1 + \frac{1\ \mathrm{pF}}{0.9\ \mathrm{pF}}\right) = 329.4\ \Omega\times2.111 = 695\ \Omega .
\end{aligned}
$$

$R_z$ 是 $1/g_{m9}$ 的固定倍数；偏置电路正是为了精确再现这种依赖关系而设计的。

### 第 2 步 — 偏置电路如何设定 $M_{15}$

把 $M_{13}$ 与 $M_{14}$ 之间的节点（$M_{13}$ 的漏极、$M_{14}$ 的源极）记为 N。$C_C$ 隔断直流，因此 $M_{15}$ 中没有直流电流，$V_{DS15} = 0$：它的两端都处于 E 的直流电平；其栅极被过驱动，因此它是一个深线性区电阻：

$$R_{on15} = \frac{1}{\mu_pC_{ox}(W/L)_{15}\left(V_{SG15} - |V_{TH15}|\right)} .$$

若 N 与 E 的直流电压相同，则 $M_{14}$ 和 $M_{15}$ 的源极电压相同、栅极电压（$V_b$）相同、衬底也相同（$V_{DD}$）。因此 $V_{SG15} = V_{SG14}$，$|V_{TH15}| = |V_{TH14}|$（源-衬底电压相同），$M_{15}$ 的过驱动电压等于 $M_{14}$ 的过驱动电压。

### 第 3 步 — 确定 $M_{13}$ 的尺寸：使节点 N 跟踪 $M_9$ 的栅极

E 位于 $V_{DD} - V_{SG9}$，N 位于 $V_{DD} - V_{SG13}$。$M_9$ 和 $M_{13}$ 的源极和衬底都接 $V_{DD}$，因此 $V_{SG13} = V_{SG9}$ 要求相同的过驱动电压，即单位 $W/L$ 的电流相同：

$$\frac{I_1}{(W/L)_{13}} = \frac{I_{D9}}{(W/L)_9} \quad\Longrightarrow\quad \left(\frac WL\right)_{13} = \left(\frac WL\right)_9\frac{I_1}{I_{D9}} = 120\times\frac{100\ \mu\mathrm{A}}{1\ \mathrm{mA}} = 12 .$$

因此 $(W/L)_{13} = 6\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$，两者共同的电平为

$$V_N = V_E = V_{DD} - \left(|V_{TH0}| + \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\right) = 3 - (0.8 + 0.659) = 1.541\ \mathrm{V}.$$

### 第 4 步 — 选取 $M_{14}$（可自由选择，但受电压余度限制）

**考虑体效应时 $M_{14}$ 的阈值。** 其源极位于 $V_N = 1.541$ V，衬底接 $V_{DD} = 3$ V，因此 $V_{BS} = 3 - 1.541 = 1.459$ V：

$$
\begin{aligned}
|V_{TH14}| &= |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right)\\
&= 0.8 + 0.4\left(\sqrt{0.8 + 1.459} - \sqrt{0.8}\right) = 0.8 + 0.4(1.503 - 0.894) = 1.043\ \mathrm{V}.
\end{aligned}
$$

**电压余度。** $V_b = V_N - V_{SG14} = 1.541 - 1.043 - V_{ov14}$，而 $I_1$ 需要 $V_b > 0$（实际中需要几百 mV），因此

$$V_{ov14} < 0.498\ \mathrm{V} \quad\Longrightarrow\quad \left(\frac WL\right)_{14} > \frac{2I_1}{\mu_pC_{ox}(0.498\ \mathrm{V})^2} = \frac{200\ \mu\mathrm{A}}{(38.4\ \mu\mathrm{A/V^2})(0.248\ \mathrm{V^2})} \approx 21 .$$

例如，令 $M_{14}$ 与 $M_{13}$ 相同（$W/L = 12$），得 $V_{ov14} = 0.659$ V，$V_b = 1.541 - 1.043 - 0.659 = -0.16$ V：这是不可能的。

**选取：** $(W/L)_{14} = 60$，即 $30\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$。于是

$$
\begin{aligned}
V_{ov14} &= \sqrt{\frac{2I_1}{\mu_pC_{ox}(W/L)_{14}}} = \sqrt{\frac{200\ \mu\mathrm{A}}{(38.4\ \mu\mathrm{A/V^2})(60)}} = \sqrt{0.0868\ \mathrm{V^2}} = 0.295\ \mathrm{V},\\
V_b &= 1.541 - 1.043 - 0.295 = 0.20\ \mathrm{V},\\
g_{m14} &= \mu_pC_{ox}(W/L)_{14}V_{ov14} = (38.4\ \mu\mathrm{A/V^2})(60)(0.295\ \mathrm{V}) = 0.679\ \mathrm{mS}.
\end{aligned}
$$

（更宽的 $M_{14}$ 可提供更大的余度，例如 $W/L = 100$ 时 $V_b \approx 0.27$ V，代价是 $M_{15}$ 也要更宽。）

### 第 5 步 — 确定 $M_{15}$ 的尺寸

由于 $V_{ov15} = V_{ov14}$（第 2 步），

$$R_{on15} = \frac{1}{\mu_pC_{ox}(W/L)_{15}V_{ov14}} = \frac{(W/L)_{14}}{(W/L)_{15}}\cdot\frac{1}{\mu_pC_{ox}(W/L)_{14}V_{ov14}} = \frac{(W/L)_{14}}{(W/L)_{15}}\cdot\frac{1}{g_{m14}} .$$

令 $R_{on15} = R_z$：

$$\left(\frac WL\right)_{15} = \frac{(W/L)_{14}}{g_{m14}R_z} = \frac{60}{(0.679\ \mathrm{mS})(695\ \Omega)} = \frac{60}{0.472} = 127 ,$$

即约 $64\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$。**验证：** $R_{on15} = 1/[(38.4\ \mu\mathrm{A/V^2})(127)(0.295\ \mathrm{V})] = 1/(1.44\ \mathrm{mS}) = 695\ \Omega$。✓

**一般公式。** 由 $R_z = (1/g_{m9})(C_C + C_L)/C_C$ 和 $g_{m9}/g_{m14} = \sqrt{(W/L)_9I_{D9}/[(W/L)_{14}I_1]}$：

$$\left(\frac WL\right)_{15} = \left(\frac WL\right)_{14}\frac{g_{m9}}{g_{m14}}\frac{C_C}{C_C + C_L} = 60\times4.47\times0.474 = 127 .$$

### 第 6 步 — 为什么采用这种电路

乘积 $R_{on15}\,g_{m9}$ 只取决于比值：

$$R_{on15}\,g_{m9} = \frac{(W/L)_{14}}{(W/L)_{15}}\sqrt{\frac{(W/L)_9I_{D9}}{(W/L)_{14}I_1}} .$$

迁移率（mobility）、栅氧电容（gate oxide capacitance）和阈值都被消去，因此在工艺、温度和电源电压变化时零点都能保持在次极点上，而固定的多晶硅（poly）电阻做不到这一点。由于 X 和 Y 的直流电平相同，一条偏置支路 $M_{13}$–$M_{14}$ 就能同时为两个 $M_{15}$ 器件提供偏置。

### 结果

- $R_z = (1/g_{m9})(1 + C_L/C_C) \approx 695\ \Omega$。
- $(W/L)_{13} = (W/L)_9\,I_1/I_{D9} = 12$，即 **6 µm/0.5 µm**（使 $V_{SG13} = V_{SG9}$）。
- $(W/L)_{14}$ 可自由选取，但为使 $V_b > 0$ 必须大于约 21（体效应使 $|V_{TH14}|$ 升高到 1.04 V）。选取 **30 µm/0.5 µm**（$V_{ov14} = 0.295$ V，$V_b \approx 0.2$ V，$g_{m14} = 0.68$ mS）。
- $(W/L)_{15} = (W/L)_{14}\,(g_{m9}/g_{m14})\,C_C/(C_C + C_L) \approx 127$，即 **≈ 64 µm/0.5 µm**，此时 $R_{on15} \approx 695\ \Omega$。（若采用更精确的 $\omega_{p2} = (g_{m9} + 1/R_L)/C_L$，则 $R_z \approx 663\ \Omega$，$(W/L)_{15} \approx 133$。）

**常见错误。** 按相等的**电流**而不是相等的 $V_{GS}$ 来确定 $M_{13}$ 的尺寸，即把它做得和 $M_9$ 一样大。只有相等的电流密度（单位 $W/L$ 的 $I_D$）才能给出 $V_{SG13} = V_{SG9}$，从而把 $M_{15}$ 的源极置于正确的电平。

**常见错误。** 把 $M_{15}$ 当作饱和区（saturation region）中的晶体管，并使用 $1/g_{m15}$。由于没有直流电流，$V_{DS15} = 0$，它是一个线性区（triode region）电阻，$R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$。

**常见错误。** 把电容比放进平方根中，这样在 $(W/L)_{14} = 12$ 时得到 $(W/L)_{15} \approx 83$（$R_{on} \approx 480\ \Omega$）；因子 $C_C/(C_C + C_L)$ 来自 $R_z$，应线性相乘。此外，若直接照搬 $M_{13}$ 作为 $M_{14}$，一旦计入 $M_{14}$ 的体效应，就会得到 $V_b < 0$。
