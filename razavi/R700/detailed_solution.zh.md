# 详细步骤 - R700

**思路。** 所有晶体管共用 $V_b$，但它们的源极位于有电阻的地线上的不同位置。地线上的压降只有几毫伏，因此先假设每个器件都流过标称电流 $I$ 来计算各源极电压，再用 $g_m + g_{mb}$ 把每个源极电压的升高换算成电流的变化。最坏的失配出现在 $M_1$（离地最近）与 $M_N$（离地最远）之间；令其等于 1 % 即可求出 $r_{max}$。

### 第 1 步 — 标称电流与跨导

在理想地的情况下，每个源极都处于 0 V，$V_{TH} = V_{TH0} = 0.7$ V，因此在 $W/L = 20/0.5 = 40$ 时：

$$V_{ov} = V_b - V_{TH0} = 1.2 - 0.7 = 0.5\ \mathrm{V},$$

$$I = \tfrac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2 = \tfrac12(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{V})^2 = \tfrac12(5.36\ \mathrm{mA/V^2})(0.25\ \mathrm{V^2}) = 0.67\ \mathrm{mA},$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (5.36\ \mathrm{mA/V^2})(0.5\ \mathrm{V}) = 2.68\ \mathrm{mS}.$$

源极电压只有几毫伏，因此在 $V_{SB} \approx 0$ 处计算体效应系数（body-effect coefficient）：

$$\eta = \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} \approx \frac{0.45}{2\sqrt{0.9}} = \frac{0.45}{1.897} = 0.237,$$

$$g_{mb} = \eta g_m = 0.237\times2.68\ \mathrm{mS} = 0.636\ \mathrm{mS}, \qquad g_m + g_{mb} = 3.32\ \mathrm{mS}.$$

源极升高 $\Delta V_S$（衬底接地，栅极电压固定）会使 $V_{GS}$ 降低 $\Delta V_S$，并使 $V_{TH}$ 升高 $\eta\,\Delta V_S$，因此电流减小

$$\Delta I = (g_m + g_{mb})\Delta V_S .$$

### 第 2 步 — 地线上各源极的电压

节点 0 为地，节点 $k$ 为 $M_k$ 的源极；第 $k$ 段（电阻为 $r$）连接节点 $k-1$ 与节点 $k$。它流过 $M_k, \dots, M_N$ 的电流，每个电流都 $\approx I$：

$$i_{\text{seg }k} = (N - k + 1)\,I .$$

从地开始向外把各段压降相加：

$$V_k = \sum_{j=1}^{k} r\,(N - j + 1)\,I = rI\sum_{j=1}^{k}(N + 1 - j) = rI\left[k(N + 1) - \frac{k(k+1)}{2}\right].$$

两个极端：

$$
\begin{aligned}
V_1 &= rI\left[(N + 1) - 1\right] = NrI \quad\text{(smallest: the whole current } NI \text{ flows only through the first segment)},\\
V_N &= rI\left[N(N + 1) - \frac{N(N+1)}{2}\right] = \frac{N(N+1)}{2}\,rI \quad\text{(largest)},
\end{aligned}
$$

$$V_N - V_1 = rI\left[\frac{N(N+1)}{2} - N\right] = rI\,\frac{N(N - 1)}{2}.$$

取 $N = 32$：$N(N-1)/2 = 32\times31/2 = 496$。这一差值按 $N^2$ 增长：晶体管越多，地线的段数越多，每段流过的电流也越大。

### 第 3 步 — 最大失配与 $r_{max}$

源极电压随 $k$ 单调升高，因此 $M_1$ 的电流最大，$M_N$ 的电流最小：

$$\frac{I_1 - I_N}{I} = \frac{(g_m + g_{mb})(V_N - V_1)}{I} = (g_m + g_{mb})\,r\,\frac{N(N - 1)}{2}.$$

令其等于 1 %，即 $(g_m + g_{mb})\,r\,(496) \le 0.01$：

$$r_{max} = \frac{0.01}{496\,(g_m + g_{mb})} = \frac{0.01}{496\times3.32\times10^{-3}\ \mathrm{S}} = \frac{0.01}{1.645\ \mathrm{S}} = 6.1\times10^{-3}\ \Omega = 6.1\ \mathrm{m}\Omega .$$

**不计体效应时：**

$$r_{max} = \frac{0.01}{496\times2.68\times10^{-3}\ \mathrm{S}} = \frac{0.01}{1.329\ \mathrm{S}} = 7.5\ \mathrm{m}\Omega .$$

由于源极升高时阈值也随之升高，体效应使这一要求严格了约 24 %。

### 第 4 步 — 检验近似条件

- **小信号近似的有效性。** 当 $r = 6.1$ mΩ 时，最大的源极电压为
$$V_N = \frac{N(N+1)}{2}rI = 528\times(6.1\times10^{-3}\ \Omega)(0.67\ \mathrm{mA}) = 2.2\ \mathrm{mV},$$
与 $V_{ov} = 0.5$ V 相比非常小，因此线性化以及在 $V_{SB} = 0$ 处取 $\eta$ 都是准确的。对该梯形网络进行完整的非线性求解，即采用计入体效应的平方律（square law）并使用实际的各段电流，在此 $r$ 下得到的失配为 0.99 %。
- **等电流假设。** 各电流之差至多为 1 %，因此地线压降的误差也只有 ~1 %。
- **饱和**是题目给定的条件；几毫伏的源极升高不会改变这一点。

**物理意义。** 对于方块电阻（sheet resistance）为 50 mΩ/□ 的金属层，6.1 mΩ 的一段只相当于 $6.1/50 = 0.12$ 个方块，即地线的每一段宽度必须约为其长度的 8 倍。这就是大型电流源阵列需要很宽的地线（或星形连接 / 独立的源极回线）的原因。

### 结果

$$r_{max} = \frac{0.01}{(g_m + g_{mb})\,N(N-1)/2} \approx 6.1\ \mathrm{m}\Omega$$

其中 $I = 0.67$ mA，$g_m = 2.68$ mS，$g_{mb} = 0.237g_m = 0.64$ mS，$N(N-1)/2 = 496$。忽略体效应时 $r_{max} \approx 7.5$ mΩ。（如果把“失配”理解为最差电流 $I_N$ 相对于理想值的偏差，即 $(I - I_N)/I = (g_m + g_{mb})rN(N+1)/2$，则限值变为 5.7 mΩ。）

**常见错误。** 假设每一段流过的电流都相同，或者只用第一段的压降 $NrI$（或 $NrI/2$）。地线电流朝地的方向逐段累积，因此源极电压按平方规律增长，最坏情况下的差值为 $rI\,N(N-1)/2$。

**常见错误。** 把 $g_m$ 算成 $I/(V_b - V_{TH})$（只有真实值的一半），或者漏掉 $W/L$。对于平方律，$g_m = 2I/V_{ov} = \mu_nC_{ox}(W/L)V_{ov} = 2.68$ mS。

**常见错误。** 忘记体效应。衬底保持在真正的地电位，而源极电位升高，因此阈值也会升高，使限值从 7.5 mΩ 收紧到 6.1 mΩ。
