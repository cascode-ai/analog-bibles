# 详细步骤 - R546

**思路。** 该表达式中含有本身随 $T$ 变化的 $V_{BE}$，因此它实际上是关于 $V_{BE}(T)$ 的微分方程。先在 300 K 处求值，再沿温度逐步向外推进（每一步都更新 $V_{BE}$，并在每一步内进行迭代），然后用该微分方程的精确解验证结果，最后描述曲线的形状。

### 第 1 步 — 常数与 300 K 处的值

把温度系数（TC）写成

$$\mathrm{TC}(T) \equiv \frac{\partial V_{BE}}{\partial T} = \frac{V_{BE} - (4+m)V_T - E_g/q}{T},$$

其中 $k/q = 8.617\times10^{-5}$ V/K，$E_g/q = 1.12$ V，$4 + m = 4 - 1.5 = 2.5$。$V_T = kT/q$ 与 $T$ 成正比，在每个温度下都必须重新计算。在 $T_0 = 300$ K、$V_{BE0} = 0.750$ V 时：

$$
\begin{aligned}
V_{T0} &= (8.617\times10^{-5}\ \mathrm{V/K})(300\ \mathrm{K}) = 25.85\ \mathrm{mV},\\
(4+m)V_{T0} &= 2.5\times25.85\ \mathrm{mV} = 64.63\ \mathrm{mV},\\
\text{numerator} &= 0.750 - 0.06463 - 1.120 = -0.43463\ \mathrm{V},\\
\mathrm{TC}(300\ \mathrm{K}) &= \frac{-0.43463\ \mathrm{V}}{300\ \mathrm{K}} = -1.449\ \mathrm{mV/K}.
\end{aligned}
$$

### 第 2 步 — 从 300 K 推进到 350 K（一次完整的迭代示例）

TC 约为 $-1.45$ mV/K 时，温度变化 100 K 会使 $V_{BE}$ 改变约 145 mV，与分子（约 0.43 V）相比相当大。因此在每个温度下都必须使用晶体管在该温度下（相同集电极电流时）实际具有的 $V_{BE}$，它要通过对 TC 本身积分得到。采用 50 K 的步长和梯形法则：

$$V_{BE}(T + \Delta T) = V_{BE}(T) + \Delta T\cdot\frac{\mathrm{TC}(T) + \mathrm{TC}(T + \Delta T)}{2}.$$

由于 $\mathrm{TC}(T + \Delta T)$ 取决于 $V_{BE}(T + \Delta T)$，需要迭代。在 350 K 时，$(4+m)V_T = 2.5\times(8.617\times10^{-5})(350) = 75.40$ mV。

**初始估计**（整个步长内都用 300 K 处的 TC）：

$$
\begin{aligned}
V_{BE}(350) &\approx 0.750 + (50\ \mathrm{K})(-1.449\ \mathrm{mV/K}) = 0.750 - 0.0724 = 0.6776\ \mathrm{V},\\
\mathrm{TC}(350) &= \frac{0.6776 - 0.0754 - 1.120}{350} = \frac{-0.5178\ \mathrm{V}}{350\ \mathrm{K}} = -1.4795\ \mathrm{mV/K}.
\end{aligned}
$$

**第一次修正**（取两个 TC 的平均值）：

$$
\begin{aligned}
V_{BE}(350) &= 0.750 + 50\times\frac{-1.4488 - 1.4795}{2}\ \mathrm{mV} = 0.750 - 0.0732 = 0.6768\ \mathrm{V},\\
\mathrm{TC}(350) &= \frac{0.6768 - 0.0754 - 1.120}{350} = -1.4817\ \mathrm{mV/K}.
\end{aligned}
$$

**第二次修正：**

$$
\begin{aligned}
V_{BE}(350) &= 0.750 + 50\times\frac{-1.4488 - 1.4817}{2}\ \mathrm{mV} = 0.6767\ \mathrm{V},\\
\mathrm{TC}(350) &= -1.482\ \mathrm{mV/K}.
\end{aligned}
$$

数值不再变化，因此 $V_{BE}(350\ \mathrm{K}) = 0.677$ V，$\mathrm{TC}(350\ \mathrm{K}) = -1.48$ mV/K。

### 第 3 步 — 其余各步

每次都从已收敛的点出发，按同样的步骤计算，得到：

| 步骤 | 初始估计 $V_{BE}$ | 收敛后的 $V_{BE}$ | 收敛后的 TC |
|---|---|---|---|
| 350 → 400 K | $0.6767 - 50(1.482\ \mathrm{mV}) = 0.6026$ V | 0.602 V | −1.511 mV/K |
| 300 → 250 K | $0.750 + 50(1.449\ \mathrm{mV}) = 0.8224$ V | 0.821 V | −1.410 mV/K |
| 250 → 200 K | $0.8215 + 50(1.410\ \mathrm{mV}) = 0.892$ V | 0.891 V | −1.362 mV/K |

例如，在 400 K 时，$(4+m)V_T = 2.5\times(8.617\times10^{-5})(400) = 86.17$ mV，且

$$\mathrm{TC}(400) = \frac{0.6019 - 0.0862 - 1.120}{400} = \frac{-0.6043\ \mathrm{V}}{400\ \mathrm{K}} = -1.511\ \mathrm{mV/K}.$$

在 200 K 时，$(4+m)V_T = 43.09$ mV，且

$$\mathrm{TC}(200) = \frac{0.8908 - 0.0431 - 1.120}{200} = \frac{-0.2723\ \mathrm{V}}{200\ \mathrm{K}} = -1.361\ \mathrm{mV/K}.$$

向**低温**方向推进时，$\Delta T = -50$ K，因此 $V_{BE}$ **增大**。

### 第 4 步 — 用精确解验证

TC 公式是一个一阶线性微分方程：

$$\frac{dV_{BE}}{dT} - \frac{V_{BE}}{T} = -(4+m)\frac{k}{q} - \frac{E_g}{qT}.$$

两边同除以 $T$，左边就变成 $\dfrac{d}{dT}\left(\dfrac{V_{BE}}{T}\right)$：

$$\frac{d}{dT}\left(\frac{V_{BE}}{T}\right) = -(4+m)\frac{k}{q}\cdot\frac{1}{T} - \frac{E_g}{q}\cdot\frac{1}{T^2}.$$

从 $T_0$ 到 $T$ 积分，再乘以 $T$：

$$\frac{V_{BE}}{T} - \frac{V_{BE0}}{T_0} = -(4+m)\frac{k}{q}\ln\frac{T}{T_0} + \frac{E_g}{q}\left(\frac{1}{T} - \frac{1}{T_0}\right),$$

$$V_{BE}(T) = \frac{E_g}{q} + \frac{T}{T_0}\left(V_{BE0} - \frac{E_g}{q}\right) - (4+m)\frac{kT}{q}\ln\frac{T}{T_0}.$$

把它代回 TC 公式，$E_g/q$ 项相互抵消：

$$\mathrm{TC}(T) = \underbrace{\frac{V_{BE0} - (4+m)V_{T0} - E_g/q}{T_0}}_{-1.449\ \mathrm{mV/K}} - \underbrace{(4+m)\frac{k}{q}}_{0.2154\ \mathrm{mV/K}}\ln\frac{T}{T_0},$$

其中 $(4+m)k/q = 2.5\times8.617\times10^{-5} = 0.2154$ mV/K。于是

$$
\begin{aligned}
\mathrm{TC}(200) &= -1.449 - 0.2154\ln(0.667) = -1.449 + 0.087 = -1.361\ \mathrm{mV/K},\\
\mathrm{TC}(250) &= -1.449 - 0.2154\ln(0.833) = -1.449 + 0.039 = -1.410\ \mathrm{mV/K},\\
\mathrm{TC}(350) &= -1.449 - 0.2154\ln(1.167) = -1.449 - 0.033 = -1.482\ \mathrm{mV/K},\\
\mathrm{TC}(400) &= -1.449 - 0.2154\ln(1.333) = -1.449 - 0.062 = -1.511\ \mathrm{mV/K}.
\end{aligned}
$$

这些结果与迭代结果的差别在 0.001 mV/K 以内，并且 $V_{BE}$ 的精确值 0.891 V（200 K）、0.821 V（250 K）、0.677 V（350 K）和 0.602 V（400 K）也与第 3 步一致。

### 第 5 步 — TC 曲线的斜率和曲率

用商的求导法则对 TC 公式求导，利用 $dV_{BE}/dT = \mathrm{TC}$，并注意到第二项中的方括号等于 $T\cdot\mathrm{TC}$：

$$
\begin{aligned}
\frac{d\,\mathrm{TC}}{dT} &= \frac{\left[\mathrm{TC} - (4+m)k/q\right]T - \left[V_{BE} - (4+m)V_T - E_g/q\right]}{T^2}\\
&= \frac{T\cdot\mathrm{TC} - (4+m)kT/q - T\cdot\mathrm{TC}}{T^2}\\
&= -\frac{(4+m)k}{qT}.
\end{aligned}
$$

数值计算：

$$
\begin{aligned}
T = 200\ \mathrm{K}: &\quad -\frac{2.154\times10^{-4}\ \mathrm{V/K}}{200\ \mathrm{K}} = -1.08\ \mu\mathrm{V/K^2},\\
T = 300\ \mathrm{K}: &\quad -0.72\ \mu\mathrm{V/K^2},\\
T = 400\ \mathrm{K}: &\quad -0.54\ \mu\mathrm{V/K^2}.
\end{aligned}
$$

斜率处处为负，其绝对值按 $1/T$ 减小。二阶导数为 $+(4+m)k/(qT^2) > 0$，因此曲线**向上凹**。

### 第 6 步 — 曲线草图

| $T$ (K) | $V_{BE}$ (V) | $\partial V_{BE}/\partial T$ (mV/K) | 曲线斜率（μV/K²） |
|---|---|---|---|
| 200 | 0.891 | −1.36 | −1.08 |
| 250 | 0.821 | −1.41 | −0.86 |
| 300 | 0.750 | −1.45 | −0.72 |
| 350 | 0.677 | −1.48 | −0.62 |
| 400 | 0.602 | −1.51 | −0.54 |

以 $T$（200 至 400 K）为横轴、TC（约 −1.35 至 −1.52 mV/K）为纵轴，曲线：

- 在整个范围内都为负；
- 单调下降，从 200 K 时的 −1.36 mV/K 降到 400 K 时的 −1.51 mV/K，在 200 K 的温度范围内只变化约 0.15 mV/K（11 %）；
- 几乎是一条直线，但略有弯曲：低温时较陡，高温时较平（呈 $-\ln T$ 形状，向上凹）。

随着 $T$ 升高，$V_{BE}$ 越来越低于 $E_g/q$，同时 $(4+m)V_T$ 项增大，因此分子的增长比 $T$ 略快。$V_{BE}(T)$ 的这种弯曲正是限制一阶带隙基准（bandgap reference）性能的因素。

### 结果

$\partial V_{BE}/\partial T$ 处处为负，其绝对值随温度缓慢增大：

$$\mathrm{TC}(T) \approx -1.449\ \mathrm{mV/K} - 0.215\ \mathrm{mV/K}\cdot\ln\frac{T}{300\ \mathrm{K}},$$

由此得到 200 K 时约为 −1.36 mV/K，250 K 时 −1.41，300 K 时 −1.45，350 K 时 −1.48，400 K 时 −1.51 mV/K。曲线几乎是线性的，略微向上凹，斜率为 $-(4+m)k/(qT)$：200 K 时为 −1.08 μV/K²，300 K 时为 −0.72，400 K 时为 −0.54 μV/K²。在此过程中，$V_{BE}$ 从 0.891 V（200 K）经 0.750 V（300 K）变为 0.602 V（400 K）。

**常见错误。** 在所有温度下都取 $V_{BE} = 750$ mV。这样得到 200 K 时为 $(0.750 - 0.0431 - 1.12)/200 = -2.07$ mV/K，400 K 时为 $(0.750 - 0.0862 - 1.12)/400 = -1.14$ mV/K：绝对值随温度**减小**，趋势恰好相反，误差最大可达 0.7 mV/K。

**常见错误。** 在所有温度下都取 $V_T = 25.9$ mV。$V_T = kT/q$ 在 200 K 时为 17.2 mV，在 400 K 时为 34.5 mV。

**常见错误。** 只取一个大的欧拉步（例如 $V_{BE}(400) = 0.750 - 100\times1.449$ mV $= 0.605$ V），而不用新温度下的 TC 进行修正。这里误差不大，但会随步长增大；对每一步两端的 TC 取平均，或者直接使用精确解，就可以消除这一误差。
