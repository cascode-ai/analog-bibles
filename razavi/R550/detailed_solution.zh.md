# 详细步骤 - R550

**思路。** 运放迫使 $V_X = V_Y$。每一侧都是两个基极-发射极结的堆叠，因此 $R_1$ 上的压降等于**两个** $\Delta V_{BE}$，由此确定面积比 $n$。于是 $V_{out}$ 等于两个 $V_{EB}$ 加上按比例放大的 PTAT 电压，零 TC 条件确定 $R_2$。各 PMOS 器件共用同一个栅极电压，因此它们的 $W/L$ 必须符合 2:1 的电流比，并且过驱动电压要能放进 $V_{out}$ 上方很小的电压余度之内。最后由运放的输入、输出电平选择其结构。

### 第 1 步 — PTAT 关系与 $n$ 的值

把 PMOS 的公共栅极节点称为 G。忽略基极电流时，每个双极型晶体管流过的电流就是与之相连的 PMOS 的电流：$I_{C1} = I_{D3} = 100\ \mu\mathrm{A}$，$I_{C2} = I_{D1} = 100\ \mu\mathrm{A}$，$I_{C3} = I_{D4} = 50\ \mu\mathrm{A}$，$I_{C4} = I_{D2} = 50\ \mu\mathrm{A}$。$Q_1$ 驱动 $Q_2$ 的基极，$Q_3$ 驱动 $Q_4$ 的基极，因此

$$V_X = |V_{EB1}| + |V_{EB2}|, \qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1 .$$

令 $V_X = V_Y$：

$$I_{D2}R_1 = \left(|V_{EB1}| - |V_{EB3}|\right) + \left(|V_{EB2}| - |V_{EB4}|\right).$$

每个差值比较的都是一个面积为 $A$、电流为 100 μA 的晶体管与一个面积为 $nA$、电流为 50 μA 的晶体管，二者的电流密度之比为 $2n$：

$$|V_{EB1}| - |V_{EB3}| = V_T\ln\frac{100\ \mu\mathrm{A}/A}{50\ \mu\mathrm{A}/(nA)} = V_T\ln(2n),$$

$Q_2$–$Q_4$ 这一对给出相同的结果。因此

$$I_{D2}R_1 = 2V_T\ln(2n).$$

由 $I_{D2}R_1 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50$ mV，以及 300 K 时 $V_T = kT/q = 25.85$ mV：

$$
\begin{aligned}
\ln(2n) &= \frac{50\ \mathrm{mV}}{2\times25.85\ \mathrm{mV}} = 0.967,\\
2n &= e^{0.967} = 2.63,\\
n &= 1.32 \approx 1.3 .
\end{aligned}
$$

$n$ 不能自由选择：它由 $R_1$ 和偏置电流决定。由于堆叠了两个结，每一对只需要 25 mV 的 $\Delta V_{EB}$。

### 第 2 步 — 输出电压与零 TC：求 $R_2$

沿右侧的堆叠向上到 $V_{out}$，并利用 $I_{D2} = 2V_T\ln(2n)/R_1$：

$$V_{out} = |V_{EB3}| + |V_{EB4}| + I_{D2}(R_1 + R_2) = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)\cdot2V_T\ln(2n).$$

两个串联的结贡献 $2\times(-1.5\ \mathrm{mV/K}) = -3.0$ mV/K。PTAT 电压 $2V_T\ln(2n) = 50$ mV 的 TC 为 $50\ \mathrm{mV}/300\ \mathrm{K} = 0.1667$ mV/K，再乘以 $(1 + R_2/R_1)$。零 TC 条件：

$$
\begin{aligned}
-3.0\ \mathrm{mV/K} + \left(1 + \frac{R_2}{R_1}\right)(0.1667\ \mathrm{mV/K}) &= 0\\
1 + \frac{R_2}{R_1} &= \frac{3.0}{0.1667} = 18\\
R_2 &= 17R_1 = 17\ \mathrm{k}\Omega .
\end{aligned}
$$

（若采用教材中的规则“每个结对应的 PTAT 电压 $= 17.2V_T$”，条件为 $(1 + R_2/R_1)\cdot2\ln(2n) = 2\times17.2$，所以 $1 + R_2/R_1 = 34.4/1.934 = 17.8$，$R_2 = 16.8$ kΩ，在舍入误差范围内相同。）

输出电平为

$$V_{out} \approx 2(0.8\ \mathrm{V}) + 18\times50\ \mathrm{mV} = 1.6 + 0.9 = 2.5\ \mathrm{V},$$

由于堆叠了两个结，它是通常带隙电压的两倍（约 $2\times1.25$ V）。

### 第 3 步 — 同样成立的另一种做法（$R_2 = 18$ kΩ）

改为从 X 出发，由于 $V_Y = V_X$：

$$V_{out} = V_Y + I_{D2}R_2 = |V_{EB1}| + |V_{EB2}| + \frac{R_2}{R_1}\cdot2V_T\ln(2n).$$

把 −1.5 mV/K 用于 $Q_1$ 和 $Q_2$，零 TC 条件给出 $R_2/R_1 = 18$，即 $R_2 = 18$ kΩ。两个结果不同，是因为 $Q_{1,2}$ 与 $Q_{3,4}$ 工作在不同的电流密度下，它们的 TC 不可能都恰好是 −1.5 mV/K：对 $|V_{EB1}| - |V_{EB3}| = V_T\ln(2n) = 25$ mV 求导，可知每个晶体管的 TC 相差 $25\ \mathrm{mV}/300\ \mathrm{K} = 0.083$ mV/K。17 kΩ 与 18 kΩ 的差别只反映了给定斜率赋给了哪一对晶体管。下面采用 $R_2 = 17$ kΩ；无论哪种取法，$V_{out}$ 都约为 2.5 V。

### 第 4 步 — 确定 PMOS 晶体管的尺寸

**比例。** 四个 PMOS 的 $V_{GS}$ 相同（源极和栅极都共用），因此在饱和区它们的电流与 $W/L$ 成正比：

$$\left(\frac WL\right)_1 = \left(\frac WL\right)_3 = 2\left(\frac WL\right)_2 = 2\left(\frac WL\right)_4 .$$

**电压余度。** $M_2$ 的条件最为苛刻，其漏极位于 $V_{out} \approx 2.5$ V：

$$|V_{DS2}| = V_{DD} - V_{out} = 3 - 2.5 = 0.5\ \mathrm{V},$$

因此饱和要求 $|V_{ov}| < 0.5$ V。选取 $|V_{ov}| = 0.3$ V，留出 0.2 V 的裕量。由 $W/L = 2|I_D|/(\mu_pC_{ox}V_{ov}^2)$：

$$
\begin{aligned}
\left(\frac WL\right)_{2,4} &= \frac{2(50\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{100}{3.456} \approx 29,\\
\left(\frac WL\right)_{1,3} &= \frac{2(100\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} \approx 58 ,
\end{aligned}
$$

例如 $29\ \mu\mathrm{m}/1\ \mu\mathrm{m}$ 和 $58\ \mu\mathrm{m}/1\ \mu\mathrm{m}$。只要过驱动电压远低于 0.5 V，它就可以自由选择；原则上任何 $(W/L)_{2,4} \gtrsim 10$ 都可行。长沟道可以减小沟道长度调制和失配，二者都会扰乱电流比。

**栅极电压：**

$$|V_{GS}| = |V_{TH}| + |V_{ov}| = 0.8 + 0.3 = 1.1\ \mathrm{V}, \qquad V_G = 3 - 1.1 = 1.9\ \mathrm{V}.$$

**饱和检查**（每个器件都需要 $|V_{DS}| \ge 0.3$ V）：$M_1$（漏极在 $V_X \approx 1.6$ V）的 $|V_{DS}| = 1.4$ V；$M_3$ 和 $M_4$（漏极在 $|V_{EB1}| \approx |V_{EB3}| \approx 0.8$ V）为 2.2 V；$M_2$（漏极在 $V_{out} \approx 2.5$ V）为 0.5 V，裕量为 0.2 V。四个器件都处于饱和区。

### 第 5 步 — 反馈极性

若 G 略微升高，四个 PMOS 的电流都按相同的比例 $\delta$ 减小。X 的下降量等于两个结电压的变化，$\Delta V_X = -\delta\cdot2V_T \approx -\delta\times52$ mV（每个 $V_{EB}$ 改变 $V_T\,\Delta I/I$）。Y 的下降量是这一数值**再加上** $R_1$ 上压降的变化：$\Delta V_Y = -\delta(2V_T + 50\ \mathrm{mV}) \approx -\delta\times102$ mV。

因此 G 升高时 $V_Y - V_X$ 下降，为构成负反馈，运放的输出必须跟随 $V_Y - V_X$ 变化：**同相输入端接 Y，反相输入端接 X**，与图中画法一致。

### 第 6 步 — 运放结构的选择

运放的输入共模电平（common-mode level）为 $V_X = V_Y \approx 1.6$ V，输出必须处于 $V_G \approx 1.9$ V，只驱动 PMOS 的栅极（容性负载，没有直流电流，因此不需要输出缓冲级），并且只需要适中的增益和容易实现的补偿。**采用 NMOS 输入对和 PMOS 电流镜负载的单级五管 OTA** 很合适：

<!-- diagram: diagram-01.cir -->

输入对 $M_5$、$M_6$ 的公共源极位于节点 P，由尾电流管 $M_9$ 偏置；二极管连接（diode-connected）的 PMOS $M_7$ 和镜像管 $M_8$ 构成负载，输出 G 是 $M_8$/$M_6$ 的漏极。Y 驱动 $M_5$（二极管一侧），因此 Y 是同相输入端；X 驱动 $M_6$。

- **输入范围。** 最低输入为 $V_{GS,N} + V_{DS,tail} \approx (0.7 + 0.2) + 0.2 = 1.1$ V。最高输入为 $V_{DD} - |V_{GS,P}| + V_{TH,N} \approx 3 - 1.1 + 0.7 = 2.6$ V（高于此值时输入管将退出饱和区）。1.6 V 完全处在这一范围之内。
- **输出电平。** 平衡时输出位于负载二极管的电压，即 $V_{DD} - |V_{GS7}|$。把 $M_7$、$M_8$ 的尺寸设计为 $|V_{GS}| \approx 1.1$ V，静态输出就恰好处于所需的 1.9 V，这也使系统失调（systematic offset）最小。
- **稳定性。** 电路中只有一个高阻节点（G，其负载为四个 PMOS 的栅极），因此环路很容易补偿。

PMOS 输入的 OTA 则处于临界状态：其最高输入电平约为 $V_{DD} - |V_{GS,P}| - V_{DS,tail} \approx 3 - 1.0 - 0.2 = 1.8$ V，仅略高于 1.6 V；而且它的 NMOS 电流镜输出会静止在 $V_{GS,N} \approx 0.9$ V 附近，与所需的 1.9 V 相差很远。若需要更高的增益，可以采用两级运算放大器（two-stage op amp），但其第一级仍应采用 NMOS 输入。

### 结果

- **PTAT 条件：** $I_{D2}R_1 = 2V_T\ln(2n) = 50$ mV，所以 $2n \approx 2.63$，$n \approx 1.3$。
- **电阻：** 由 $(1 + R_2/R_1)(50\ \mathrm{mV}/300\ \mathrm{K}) = 2\times1.5$ mV/K 得 $R_2 \approx 17$ kΩ（按 $17.2V_T$ 规则为 16.8 kΩ；若把 −1.5 mV/K 的斜率赋给 $Q_{1,2}$，则为 18 kΩ）。$V_{out} \approx 2.5$ V。
- **PMOS 尺寸：** $(W/L)_1 = (W/L)_3 = 2(W/L)_2 = 2(W/L)_4$，例如过驱动电压为 0.3 V 时 $(W/L)_{2,4} \approx 29$，$(W/L)_{1,3} \approx 58$。这样 $M_2$ 在 0.5 V 的 $|V_{DS}|$ 下仍保持饱和；栅极连线约处于 1.9 V。
- **运放：** 采用 NMOS 输入对和 PMOS 电流镜负载的单级五管 OTA。约 1.6 V 的输入电平和约 1.9 V 的输出电平都在它的允许范围之内。反相输入端接 X，同相输入端接 Y。

**常见错误。** 按每侧只有一个结来设计，即 $I_{D2}R_1 = V_T\ln n$（或 $V_T\ln(2n)$），且 $\partial V_{out}/\partial T = -1.5\ \mathrm{mV/K} + \ldots$。这会得到错误的 $n$ 和 $R_2 \approx 8$ kΩ；实际上两个堆叠的结使 PTAT 电压和负 TC 都加倍了。

**常见错误。** 忽略 2:1 的电流比：要么在 $\Delta V_{EB}$ 中忽略（写成 $V_T\ln n$ 而不是 $V_T\ln(2n)$），要么在晶体管尺寸中忽略（把四个 PMOS 做成一样大）。栅极电压相同时，电流为两倍的 PMOS 必须宽两倍。

**常见错误。** 为 PMOS 器件选择过大的过驱动电压（即过小的 $W/L$）。$M_2$ 两端只有 $3 - 2.5 = 0.5$ V，因此高于 0.5 V 的过驱动电压（例如 $W/L = 5$ 时 $|V_{ov}| = 0.72$ V）会把 $M_2$ 推入线性区（triode region），破坏电流比。
