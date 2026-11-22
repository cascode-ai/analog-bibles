# 详细步骤 - G043

在饱和区，输出电阻来自沟道长度调制：夹断点以外的漏端耗尽区随 $V_{DS}$ 展宽，使有效沟道变短。由 $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$，$r_o=L_{\text{eff}}/[I_D\,(dX_d/dV_{DS})]$。两个器件采用同一工艺、处于相同的 $V_{DS}$，因此 $dX_d/dV_{DS}$ 近似相同，可由第一个器件标定；只需按 $L_{\text{eff}}$ 和 $I_D$ 换算。

### 第 1 步 — 用 $L_{\text{eff}}$ 表示输出电阻

由 $I_D=\tfrac12k'(W/L_{\text{eff}})V_{ov}^2$，且 $L_{\text{eff}}$ 随 $X_d$ 增大而缩短，

$$
\frac1{r_o}=\frac{\partial I_D}{\partial V_{DS}}=\frac{I_D}{L_{\text{eff}}}\frac{dX_d}{dV_{DS}}=\lambda I_D
\quad\Rightarrow\quad
r_o=\frac{L_{\text{eff}}}{I_D\,(dX_d/dV_{DS})},\qquad
\frac{r_{o2}}{r_{o1}}=\frac{I_{D1}}{I_{D2}}\cdot\frac{L_{\text{eff2}}}{L_{\text{eff1}}}\cdot\frac{(dX_d/dV_{DS})_1}{(dX_d/dV_{DS})_2}.
$$

### 第 2 步 — 有效沟道长度

把 $X_d$ 估计为向 $2.1\times10^{16}\ \mathrm{cm^{-3}}$ 表面层内延伸的单边阶跃结耗尽宽度，夹断点以外的电压为 $V_{DS}-V_{ov}$：$X_d=\sqrt{2\epsilon(V_{DS}-V_{ov})/(qN)}$。器件 1 的 $L_{\text{drwn}}-2L_d=6.4\ \mu$m：

$$
V_{ov}=\sqrt{\frac{2I_D}{k'W/L}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(60.5\ \mu\mathrm{A/V^2})(100/6.4)}}=0.15\ \mathrm V,\qquad
X_d=\sqrt{\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(4.85\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(2.1\times10^{16}\ \mathrm{cm^{-3}})}}=0.55\ \mu\mathrm m .
$$

| 器件 | $W/L_{\text{drwn}}$ | $I_D$ (µA) | $V_{ov}$ (V) | $X_d$ (µm) | $L_{\text{eff}}$ (µm) |
|---|---|---|---|---|---|
| 1 | 100/7 | 10 | 0.15 | 0.55 | 5.85 |
| 2 | 50/12 | 30 | 0.48 | 0.53 | 10.87 |

### 第 3 步 — 换算测得的 $r_o$

测得的 $r_{o1}$ 意味着 $dX_d/dV_{DS}=L_{\text{eff1}}/(I_{D1}r_{o1})=5.85\ \mu\mathrm m/[(10\ \mu\mathrm A)(5\ \mathrm{M\Omega})]=0.12\ \mu$m/V。对器件 2 取相同值：

$$
r_{o2}=(5\ \mathrm{M\Omega})\left(\frac{10\ \mu\mathrm A}{30\ \mu\mathrm A}\right)\left(\frac{10.87\ \mu\mathrm m}{5.85\ \mu\mathrm m}\right)=3.1\ \mathrm{M\Omega}.
$$

由于 $X_d\propto\sqrt{V_{DS}-V_{ov}}$，$dX_d/dV_{DS}\propto X_d/(V_{DS}-V_{ov})$；器件 2 的 $V_{DS}-V_{ov}$ 略小（4.52 V 对 4.85 V），使其 $dX_d/dV_{DS}$ 增大约 4%，得到 $r_{o2}\approx3.0$ MΩ。若在 $L_{\text{eff}}$ 中忽略 $X_d$，得 $5(1/3)(11.4/6.4)=2.97$ MΩ。

结果：$r_{o2}\approx3.0$ MΩ。较长的沟道使 $r_o$ 增大约 1.9 倍，而三倍的电流使其减小为三分之一。
