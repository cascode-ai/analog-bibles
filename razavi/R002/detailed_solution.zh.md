# 详细步骤 - R002

**思路。** 题中已给出电流，因此对每个器件直接使用平方律（square law）结果 $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ 和 $r_O \approx 1/(\lambda|I_D|)$，二者相乘即得本征增益。两个器件的 $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$，$|I_D| = 0.5$ mA。

### 第 1 步 — NMOS 器件

$g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ 由 $g_m = \mu C_{ox}(W/L)V_{ov}$ 利用平方律消去 $V_{ov}$ 得到；$r_O \approx 1/(\lambda|I_D|)$ 则在 $I_D$ 中忽略了 $\lambda|V_{DS}|$ 相对于 1 的影响（这样做是必然的，因为题中没有给出 $V_{DS}$）。

$$
\begin{aligned}
g_{m,n} &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{1.34\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 3.66\times10^{-3}\ \mathrm{A/V} = 3.66\ \mathrm{mS},
\end{aligned}
$$

因此 $1/g_{m,n} = 1/(3.66\ \mathrm{mS}) = 273\ \Omega$。过驱动电压为

$$V_{ov,n} = \frac{2I_D}{g_{m,n}} = \frac{2\times0.5\ \mathrm{mA}}{3.66\ \mathrm{mS}} = 0.273\ \mathrm{V}$$

（等价地，$\sqrt{2I_D/(\mu_nC_{ox}W/L)} = \sqrt{1\ \mathrm{mA}/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273$ V）。于是

$$
\begin{aligned}
r_{O,n} &= \frac{1}{\lambda_n I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}\ \mathrm{A/V}} = 20\ \mathrm{k\Omega},\\
g_{m,n}r_{O,n} &= (3.66\times10^{-3}\ \mathrm{S})(20\times10^{3}\ \Omega) = 73.2 .
\end{aligned}
$$

### 第 2 步 — PMOS 器件

用 PMOS 的参数代入同样的公式：

$$
\begin{aligned}
g_{m,p} &= \sqrt{2\mu_pC_{ox}\frac{W}{L}|I_D|}\\
&= \sqrt{2\,(38.4\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})}\\
&= \sqrt{3.84\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.96\times10^{-3}\ \mathrm{A/V} = 1.96\ \mathrm{mS},
\end{aligned}
$$

因此 $1/g_{m,p} = 1/(1.96\ \mathrm{mS}) = 510\ \Omega$，且

$$V_{ov,p} = \frac{2|I_D|}{g_{m,p}} = \frac{1\ \mathrm{mA}}{1.96\ \mathrm{mS}} = 0.510\ \mathrm{V},$$

几乎是 NMOS 过驱动电压的两倍，因为 NMOS 的 $\mu C_{ox}$ 是 PMOS 的 3.5 倍。于是

$$
\begin{aligned}
r_{O,p} &= \frac{1}{\lambda_p |I_D|} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{10^{-4}\ \mathrm{A/V}} = 10\ \mathrm{k\Omega},\\
g_{m,p}r_{O,p} &= (1.96\times10^{-3}\ \mathrm{S})(10\times10^{3}\ \Omega) = 19.6 .
\end{aligned}
$$

### 第 3 步 — 用过驱动电压形式验算并比较

将 $g_m = \mu C_{ox}(W/L)V_{ov}$ 与 $r_O = 1/(\lambda|I_D|)$ 相乘：

$$g_m r_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\tfrac12\mu C_{ox}(W/L)V_{ov}^2} = \frac{2}{\lambda V_{ov}} ,$$

$$
\begin{aligned}
\text{NMOS:}\quad \frac{2}{(0.1\ \mathrm{V^{-1}})(0.273\ \mathrm{V})} &= 73.2, \\
\text{PMOS:}\quad \frac{2}{(0.2\ \mathrm{V^{-1}})(0.510\ \mathrm{V})} &= 19.6 ,
\end{aligned}
$$

与第 1 步和第 2 步的结果一致。NMOS 的本征增益高出的倍数为

$$\frac{(g_mr_O)_n}{(g_mr_O)_p} = \frac{73.2}{19.6} = 3.74 = \underbrace{\sqrt{\frac{134}{38.4}}}_{1.87\ (\text{from } g_m)}\times\underbrace{\frac{0.2}{0.1}}_{2\ (\text{from } r_O)} .$$

较高的电子迁移率使 NMOS 在相同电流下的 $g_m$ 是 PMOS 的 $\sqrt{3.49} = 1.87$ 倍，而较小的 $\lambda$ 使它的输出电阻（output resistance）是 PMOS 的两倍。

### 第 4 步 — 为什么 $g_mr_O$ 称为“本征增益”

在采用理想电流源负载（对信号相当于开路）的共源级（common-source stage）中，输出节点只看到晶体管自身的 $g_mv_{in}$ 和 $r_O$：

<!-- diagram: diagram-01.cir -->

在输出节点列基尔霍夫电流定律（KCL）方程，其中 $v_{gs} = v_{in}$：

$$
\begin{aligned}
g_mv_{in} + \frac{v_{out}}{r_O} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_mr_O .
\end{aligned}
$$

所以 $g_mr_O$ 是单个晶体管所能提供的最大电压增益：对本题尺寸的器件，NMOS 约为 73，PMOS 约为 19.6。任何实际负载 $R_L$ 都与 $r_O$ 并联，只会使增益减小：$|A_v| = g_m(r_O\parallel R_L) < g_mr_O$。

### 结果

| 器件 | $g_m$ | $1/g_m$ | $r_O$ | $g_m r_O$ |
|---|---|---|---|---|
| NMOS | 3.66 mS | 273 Ω | 20 kΩ | ≈ 73 |
| PMOS | 1.96 mS | 510 Ω | 10 kΩ | ≈ 19.6 |

其中 $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$，$r_O \approx 1/(\lambda|I_D|)$，$g_m r_O = 2/(\lambda V_{ov})$（过驱动电压分别为 0.27 V 和 0.51 V）。NMOS 的本征增益约为同尺寸 PMOS 的 3.7 倍。

**常见错误。** 写成 $r_O = \lambda/I_D$ 或 $r_O = \lambda I_D$。输出电阻是 $\partial I_D/\partial V_{DS} = \lambda I_D$ 的**倒数**，做一下量纲检查就能发现这个错误：只有 $1/(\lambda I_D)$ 具有电阻的量纲。

**常见错误。** 使用 $g_m = \mu C_{ox}(W/L)I_D$（量纲不对），或者凭猜测的过驱动电压使用 $g_m = 2I_D/V_{ov}$。电流已知时，$g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 既不需要 $V_{GS}$，也不需要 $V_{TH}$。

**常见错误。** 把两个 $\lambda$ 值弄反，或者对 PMOS 使用 $\mu_nC_{ox}$。PMOS 的迁移率更低、$\lambda$ 更大，因此它的本征增益必然明显更小。
