# 详细步骤 - R677

**思路。** $r_O = (\partial I_D/\partial V_{DS})^{-1}$；由于修正后的系数 $\lambda/(1 + \kappa V_{DS})$ 依赖于 $V_{DS}$，必须对整项 $V_{DS}/(1 + \kappa V_{DS})$ 求导。所得的 $r_O$ 依赖于 $V_{DS}$，因此该电流源会把正弦电流转换为失真的电压，失真程度可用泰勒展开来定量计算。

### 第 1 步 — 改写电流表达式

记与 $V_{DS}$ 无关的电流为

$$I_{D0} = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2 ,$$

则漏极电流为

$$I_D = I_{D0}\left[1 + \frac{\lambda V_{DS}}{1 + \kappa V_{DS}}\right].$$

当 $\kappa = 0$ 时，它退化为 $I_{D0}(1 + \lambda V_{DS})$，且 $r_O = 1/(\lambda I_{D0})$。

### 第 2 步 — 对 $V_{DS}$ 求导

只有分式部分依赖于 $V_{DS}$；令 $V = V_{DS}$，

$$
\begin{aligned}
\frac{d}{dV}\left[\frac{V}{1 + \kappa V}\right] &= \frac{1\cdot(1 + \kappa V) - V\cdot\kappa}{(1 + \kappa V)^2}\\
&= \frac{1 + \kappa V - \kappa V}{(1 + \kappa V)^2} = \frac{1}{(1 + \kappa V)^2},
\end{aligned}
$$

因此

$$\frac{\partial I_D}{\partial V_{DS}} = \frac{\lambda I_{D0}}{(1 + \kappa V_{DS})^2}.$$

### 第 3 步 — 输出电阻（output resistance）

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} .$$

**用实际漏极电流表示。** 通分后，

$$I_D = I_{D0}\,\frac{1 + \kappa V_{DS} + \lambda V_{DS}}{1 + \kappa V_{DS}} = I_{D0}\,\frac{1 + (\kappa + \lambda)V_{DS}}{1 + \kappa V_{DS}} \;\Rightarrow\; I_{D0} = I_D\,\frac{1 + \kappa V_{DS}}{1 + (\kappa + \lambda)V_{DS}} ,$$

因此

$$r_O = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D}\quad(\lambda V_{DS} \ll 1 + \kappa V_{DS}).$$

当 $\kappa > 0$ 时，$r_O$ **随 $V_{DS}$ 增大**，当 $\kappa V_{DS} \gg 1$ 时大致按 $V_{DS}^2$ 增长。以 $\lambda = 0.1\ \mathrm{V^{-1}}$、$\kappa = 0.5\ \mathrm{V^{-1}}$、$I_{D0} = 1$ mA 为例：

| $V_{DS}$ (V) | 0 | 1 | 2 | 5 |
|---|---|---|---|---|
| $r_O = (1 + \kappa V_{DS})^2/(\lambda I_{D0})$ | 10 kΩ | 22.5 kΩ | 40 kΩ | 122.5 kΩ |

（例如在 1 V 时：$(1 + 0.5)^2/(0.1\ \mathrm{V^{-1}}\times1\ \mathrm{mA}) = 2.25/10^{-4}\ \mathrm{S} = 22.5\ \mathrm{k}\Omega$。）

若改为把 $\lambda/(1 + \kappa V_{DS})$ 代入 $r_O = 1/(\lambda I_D)$，则得到 $(1 + \kappa V_{DS})/(\lambda I_D)$，在 1 V 时只有 14.1 kΩ：它漏掉了 $\lambda(V_{DS})$ 的导数，而正是这一导数提供了第二个因子 $(1 + \kappa V_{DS})$。

### 第 4 步 — 这种电流源为何会产生失真

其 I–V 特性是弯曲的，因为斜率 $1/r_O$ 取决于器件两端的电压。当有信号电流流过该电流源时，例如它作为共源级或运放输出级的负载，增益为 $g_m(r_{O1} \parallel r_{O2})$：

- 在使 $V_{DS}$ **升高**的半周期中，增量电阻较大，因此一定的电流变化会产生较大的电压变化；
- 在使 $V_{DS}$ **降低**的半周期中，增量电阻较小，因此电压变化也较小。

电压波形不对称（一侧被扩张，另一侧被压缩），并含有谐波，主要是二次谐波；等价地，小信号增益随输出电平而变化。

### 第 5 步 — 失真的定量分析

**反解 I–V 关系。** 记相对超出电流为 $x = (I_D - I_{D0})/I_{D0} = \lambda V/(1 + \kappa V)$，则

$$
\begin{aligned}
x(1 + \kappa V) &= \lambda V\\
x &= V(\lambda - \kappa x)\\
V &= \frac{x}{\lambda - \kappa x},
\end{aligned}
$$

这是电流的非线性函数。

**在偏置点 $V_{DS0}$ 附近作泰勒展开**（电流为 $I_{D0}(1 + x_0)$）：

$$\frac{dV}{dx} = \frac{\lambda}{(\lambda - \kappa x)^2}, \qquad \frac{d^2V}{dx^2} = \frac{2\kappa\lambda}{(\lambda - \kappa x)^3}.$$

在偏置点处，$\lambda - \kappa x_0 = \lambda - \kappa\lambda V_{DS0}/(1 + \kappa V_{DS0}) = \lambda/(1 + \kappa V_{DS0})$，因此

$$\frac{dV}{dx}\bigg|_0 = \frac{(1 + \kappa V_{DS0})^2}{\lambda}, \qquad \frac{d^2V}{dx^2}\bigg|_0 = \frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2}.$$

信号电流 $i$ 使 $x$ 改变 $i/I_{D0}$，因此

$$
\begin{aligned}
v &= \frac{(1 + \kappa V_{DS0})^2}{\lambda I_{D0}}\,i + \frac12\cdot\frac{2\kappa(1 + \kappa V_{DS0})^3}{\lambda^2I_{D0}^2}\,i^2 + \dots\\
&= r_O\,i + \frac{\kappa\,r_O^2}{1 + \kappa V_{DS0}}\,i^2 + \dots,
\end{aligned}
$$

其中 $r_O = (1 + \kappa V_{DS0})^2/(\lambda I_{D0})$。只有当 $\kappa = 0$ 时 $i^2$ 项才会消失。

**二次谐波。** 对于 $i = I_p\cos\omega t$，利用 $\cos^2\omega t = \frac12(1 + \cos2\omega t)$：

$$v = r_OI_p\cos\omega t + \frac{\kappa r_O^2I_p^2}{2(1 + \kappa V_{DS0})}\,(1 + \cos2\omega t) + \dots$$

基波幅度为 $V_p = r_OI_p$，因此

$$HD_2 = \frac{\kappa r_O^2I_p^2/[2(1 + \kappa V_{DS0})]}{r_OI_p} = \frac{\kappa V_p}{2(1 + \kappa V_{DS0})}.$$

常数项是一个直流偏移，这也是不对称的一种表现。取 $\kappa = 0.5\ \mathrm{V^{-1}}$、$V_{DS0} = 1$ V、$V_p = 0.2$ V：$HD_2 = (0.5)(0.2)/(2\times1.5) = 3.3\ \%$，直接对 $V = x/(\lambda - \kappa x)$ 进行数值计算也证实了这一结果。

### 结果

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1 + \kappa V_{DS})^2}{\lambda I_{D0}} = \frac{(1 + \kappa V_{DS})\,[1 + (\kappa + \lambda)V_{DS}]}{\lambda I_D} \approx \frac{(1 + \kappa V_{DS})^2}{\lambda I_D},$$

其中 $I_{D0} = \frac12\mu C_{ox}(W/L)(V_{GS} - V_{TH})^2$。输出电阻随 $V_{DS}$ 增大（当 $\kappa V_{DS} \gg 1$ 时约按 $V_{DS}^2$ 增长）。

由于增量电阻取决于瞬时电压，流过这种电流源的信号电流所产生的电压，在使 $V_{DS}$ 升高的半周期中摆动得比在使其降低的半周期中更大：波形不对称并含有谐波，主要是二次谐波，$HD_2 \approx \kappa V_p/[2(1 + \kappa V_{DS0})]$。等价地，以这种电流源为负载的放大级，其增益随输出电平而变化。

**常见错误。** 把 $\lambda/(1 + \kappa V_{DS})$ 代入 $r_O = 1/(\lambda I_D)$，得到 $(1 + \kappa V_{DS})/(\lambda I_D)$。该公式假设 $\lambda$ 为常数；而这里需要对完整的表达式求导。

**常见错误。** 以电流源“流过的是恒定电流”为由，断言它不会引起失真。它的输出电阻是有限的，并且依赖于电压，因此任何流过它的信号电流都会遇到弯曲的 I–V 特性，从而产生谐波。
