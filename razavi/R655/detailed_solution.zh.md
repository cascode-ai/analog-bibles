# 详细步骤 - R655

**思路。** 明确写出复数闭环极点，证明其实部为 $-\zeta\omega_n$，且到原点的距离恰为 $\omega_n$，再从极点、原点和实轴构成的直角三角形中读出 $\cos\varphi$。最后把这一结果与 PLL 的根轨迹联系起来。

### 第 1 步 — I 型 PLL 的闭环传递函数

由 $H_{open}(s) = K_{PD}K_{VCO}/[s\,(1 + s/\omega_{LPF})]$ 和单位反馈，得

$$
\begin{aligned}
H(s) &= \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF}) + K_{PD}K_{VCO}}\\
&= \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} ,
\end{aligned}
$$

于是

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}, \qquad 2\zeta\omega_n = \omega_{LPF}.$$

### 第 2 步 — 极点

$s^2 + 2\zeta\omega_ns + \omega_n^2 = 0$ 的根为 $s_{1,2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$。当 $\zeta < 1$ 时它们是复数，此时 $\sqrt{\zeta^2 - 1} = j\sqrt{1 - \zeta^2}$：

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2},$$

其中 $\mathrm{Re}\,s_{1,2} = -\zeta\omega_n$，$\mathrm{Im}\,s_{1,2} = \pm\omega_n\sqrt{1 - \zeta^2}$。

### 第 3 步 — 原点到极点的距离

$$
\begin{aligned}
|s_1|^2 &= (\mathrm{Re}\,s_1)^2 + (\mathrm{Im}\,s_1)^2\\
&= \zeta^2\omega_n^2 + \omega_n^2(1 - \zeta^2)\\
&= \omega_n^2,
\end{aligned}
$$

因此

$$|s_1| = |s_2| = \omega_n .$$

等价地，对共轭极点对 $s_2 = s_1^{\ast}$ 应用韦达定理，

$$s_1s_2 = |s_1|^2 = \omega_n^2, \qquad s_1 + s_2 = 2\,\mathrm{Re}\,s_1 = -2\zeta\omega_n .$$

### 第 4 步 — 角 $\varphi$

$\varphi$ 从**负**实轴量起。考虑以原点、极点 $s_1$ 以及由 $s_1$ 向实轴所作垂线的垂足 $-\zeta\omega_n$ 为顶点的直角三角形：斜边为 $|s_1| = \omega_n$，$\varphi$ 的邻边为 $|\mathrm{Re}\,s_1| = \zeta\omega_n$，对边为 $|\mathrm{Im}\,s_1| = \omega_n\sqrt{1 - \zeta^2}$。因此

$$\cos\varphi = \frac{|\mathrm{Re}\,s_1|}{|s_1|} = \frac{\zeta\omega_n}{\omega_n} = \zeta . \qquad\blacksquare$$

验证：$\sin\varphi = \omega_n\sqrt{1 - \zeta^2}/\omega_n = \sqrt{1 - \zeta^2}$，且 $\cos^2\varphi + \sin^2\varphi = \zeta^2 + 1 - \zeta^2 = 1$。

**数值示例。** 取 $K_{PD}K_{VCO} = \omega_{LPF}$，则 $\omega_n^2 = \omega_{LPF}^2$，所以 $\omega_n = \omega_{LPF}$，$\zeta = \omega_{LPF}/(2\omega_n) = 0.5$。极点为

$$s_{1,2} = -0.5\,\omega_{LPF} \pm j\,0.866\,\omega_{LPF}, \qquad \tan\varphi = \frac{0.866}{0.5} = \sqrt3 \;\Rightarrow\; \varphi = 60^\circ,$$

而 $\cos60^\circ = 0.5 = \zeta$，与预期一致。

### 第 5 步 — 这在 PLL 根轨迹上意味着什么

对这个 PLL 而言，只要极点为复数，就有 $\mathrm{Re}\,s = -\zeta\omega_n = -\omega_{LPF}/2$，这正是图中的复数分支是一条经过 $-\omega_{LPF}/2$ 的**竖直线**的原因。

- **分离点。** $K_{PD}K_{VCO}$ 较小时，极点为实数，位于 $0$ 与 $-\omega_{LPF}$ 之间。当判别式为零，即 $\omega_{LPF}^2 = 4\omega_{LPF}K_{PD}K_{VCO}$、亦即 $K_{PD}K_{VCO} = \omega_{LPF}/4$ 时，两极点在 $-\omega_{LPF}/2$ 处相遇。此处 $\varphi = 0$，$\zeta = \cos0 = 1$（临界阻尼）。
- **增益增大。** $|s| = \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}$ 增大，而水平距离 $\omega_{LPF}/2$ 保持不变，因此 $\cos\varphi = (\omega_{LPF}/2)/\omega_n$ 减小：$\varphi \to 90^\circ$，$\zeta \to 0$。极点在角度上（而非距离上）趋近 $j\omega$ 轴，阶跃响应的振铃越来越明显。

因此，等阻尼线是从原点出发的射线：决定阻尼的是极点的角度，而不仅仅是它的实部。

### 结果

对于复数极点，

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2}, \qquad |s_{1,2}| = \omega_n,$$

因此，当 $\varphi$ 从负实轴量起时，

$$\cos\varphi = \frac{|\mathrm{Re}\,s|}{|s|} = \frac{\zeta\omega_n}{\omega_n} = \zeta .$$

在 PLL 的根轨迹上，实部保持为 $-\omega_{LPF}/2$，而 $|s| = \omega_n$ 随 $K_{PD}K_{VCO}$ 增大，因此 $\varphi$ 向 90° 增大，$\zeta$ 向 0 减小。在 $\varphi = 0$ 处 $\zeta = 1$（分离点，$K_{PD}K_{VCO} = \omega_{LPF}/4$）。

**常见错误。** 把极点到原点的距离取为 $\zeta\omega_n$（即其实部），而不是 $\omega_n$。实部只是水平直角边；计入虚部后，斜边恰好为 $\omega_n$。

**常见错误。** 从**虚**轴量角（或把邻边与对边弄反），这会得到 $\cos\varphi = \sqrt{1 - \zeta^2}$。图中的角是从负实轴量起的。
