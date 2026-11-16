# 详细步骤 - R676

**思路。** 把两个退化项合并为一个系数 $\theta'$，使 $I_D = KV_{ov}^2/(1 + \theta'V_{ov})$。用商的求导法则求导，提出 $I_D/V_{ov}$，再利用 $(2 + x)/(1 + x) = 1 + 1/(1 + x)$。最后用对数求导验证结果。

### 第 1 步 — 简化记号

令 $V_{ov} = V_{GS} - V_{TH}$（$dV_{ov}/dV_{GS} = 1$），$K = \frac12\mu_0C_{ox}(W/L)$，并定义恒定的等效退化系数

$$\theta' = \frac{\mu_0}{2v_{sat}L} + \theta$$

（横向电场项加纵向电场项），则漏极电流为

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta'V_{ov}} .$$

### 第 2 步 — 用商的求导法则求导

令 $u = KV_{ov}^2$（$u' = 2KV_{ov}$），$w = 1 + \theta'V_{ov}$（$w' = \theta'$）：

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta'V_{ov}) - KV_{ov}^2\,\theta'}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta'V_{ov}^2 - \theta'V_{ov}^2\right)}{(1 + \theta'V_{ov})^2}\\
&= \frac{K\,V_{ov}\,(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2}.
\end{aligned}
$$

### 第 3 步 — 化为所要求的形式

拆分分母，并同乘、同除 $V_{ov}$：

$$g_m = \underbrace{\frac{KV_{ov}^2}{1 + \theta'V_{ov}}}_{=\,I_D}\cdot\frac{1}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} .$$

利用

$$\frac{2 + x}{1 + x} = \frac{(1 + x) + 1}{1 + x} = 1 + \frac{1}{1 + x}, \qquad x = \theta'V_{ov},$$

$$g_m = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right],$$

代回原来的符号，得

$$\boxed{g_m = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\dfrac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right]}$$

这正是要证明的表达式。$\blacksquare$

### 第 4 步 — 用对数求导验证

由于 $g_m/I_D = \partial(\ln I_D)/\partial V_{GS}$，且

$$\ln I_D = \ln K + 2\ln V_{ov} - \ln(1 + \theta'V_{ov}),$$

$$
\begin{aligned}
\frac{g_m}{I_D} &= \frac{2}{V_{ov}} - \frac{\theta'}{1 + \theta'V_{ov}}\\
&= \frac{2(1 + \theta'V_{ov}) - \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})}\\
&= \frac{2 + \theta'V_{ov}}{V_{ov}(1 + \theta'V_{ov})} = \frac{1}{V_{ov}}\left[1 + \frac{1}{1 + \theta'V_{ov}}\right],
\end{aligned}
$$

结果相同：平方律贡献 $2/V_{ov}$，迁移率退化减去 $\theta'/(1 + \theta'V_{ov})$。

### 第 5 步 — 极限情况

方括号中的值介于 1 与 2 之间，因此总有

$$\frac{I_D}{V_{ov}} < g_m \le \frac{2I_D}{V_{ov}} .$$

**弱退化**（$\theta'V_{ov} \ll 1$）：方括号趋于 2，因此 $g_m \to 2I_D/V_{ov} = \mu_0C_{ox}(W/L)V_{ov}$，即平方律的结果。

**强退化**（$\theta'V_{ov} \gg 1$）：方括号趋于 1，因此 $g_m \to I_D/V_{ov}$；利用 $I_D \approx KV_{ov}^2/(\theta'V_{ov}) = KV_{ov}/\theta'$，得

$$g_m \to \frac{K}{\theta'} = \frac{\mu_0C_{ox}W}{2\theta'L},$$

它与偏置无关。若速度饱和占主导（$\theta \ll \mu_0/(2v_{sat}L)$），则 $\theta' \approx \mu_0/(2v_{sat}L)$，且

$$g_m \to \frac{\mu_0C_{ox}W}{2L}\cdot\frac{2v_{sat}L}{\mu_0} = WC_{ox}v_{sat},$$

即完全速度饱和器件（$I_D = WC_{ox}v_{sat}V_{ov}$）的跨导。

**数值示例。** 取 $\mu_0 = 400\ \mathrm{cm^2/(V\cdot s)}$，$v_{sat} = 10^7$ cm/s，$\theta = 0.5\ \mathrm{V^{-1}}$：

| $L$ | $\mu_0/(2v_{sat}L)$ | $\theta'$ | $V_{ov}$ | $\theta'V_{ov}$ | $g_mV_{ov}/I_D$ |
|---|---|---|---|---|---|
| 1 µm | 0.2 V⁻¹ | 0.7 V⁻¹ | 0.2 V | 0.14 | 1.88 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 0.2 V | 0.5 | 1.67 |
| 0.1 µm | 2 V⁻¹ | 2.5 V⁻¹ | 1.0 V | 2.5 | 1.29 |

例如，在第二行中，$\mu_0/(2v_{sat}L) = 0.04\ \mathrm{m^2/(V\,s)}/(2\times10^5\ \mathrm{m/s}\times10^{-7}\ \mathrm{m}) = 2\ \mathrm{V^{-1}}$，方括号的值为 $1 + 1/1.5 = 1.67$。沟道越短、过驱动电压（overdrive voltage）越大，$g_m$ 就比 $2I_D/V_{ov}$ 低得越多。

### 结果

令 $\theta' = \mu_0/(2v_{sat}L) + \theta$，$V_{ov} = V_{GS} - V_{TH}$，由商的求导法则得

$$g_m = \frac12\mu_0C_{ox}\frac{W}{L}\,\frac{V_{ov}(2 + \theta'V_{ov})}{(1 + \theta'V_{ov})^2} = \frac{I_D}{V_{ov}}\cdot\frac{2 + \theta'V_{ov}}{1 + \theta'V_{ov}} = \frac{I_D}{V_{GS} - V_{TH}}\left[1 + \frac{1}{1 + \left(\frac{\mu_0}{2v_{sat}L} + \theta\right)(V_{GS} - V_{TH})}\right].$$

$g_m$ 介于 $I_D/V_{ov}$ 与 $2I_D/V_{ov}$ 之间：$\theta'V_{ov}$ 较小时趋近平方律的值，$\theta'V_{ov}$ 较大时趋近 $\mu_0C_{ox}W/(2\theta'L)$（当速度饱和占主导时等于 $WC_{ox}v_{sat}$）。

**常见错误。** 只对分子求导，仿佛分母是常数。这样得到的是平方律的值 $2I_D/V_{ov}$，方括号根本不会出现。

**常见错误。** 把分母的导数只取为 $\mu_0/(2v_{sat}L)$，或只取为 $\theta$。两种机制位于同一个分母中，因此其导数是完整的 $\theta'$。
