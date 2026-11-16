# 详细步骤 - R680

**思路。** 将给定的漏极电流对 $V_{BS}$ 求导；只有含 $3/2$ 次幂的方括号依赖于 $V_{BS}$。然后由简单模型推导 $g_{mb}$，在简单模型中体效应（body effect）通过单一的阈值 $V_{TH}(V_{SB})$ 起作用；最后对两者进行精确比较（作为沿沟道的平均）和数值比较。

### 第 1 步 — 哪些项依赖于 $V_{BS}$

令 $\beta = \mu C_{ox}(W/L)$，并记

$$A = 2\phi_F - V_{BS} + V_{DS}, \qquad B = 2\phi_F - V_{BS},$$

则电流为

$$I_D = \beta\left\{(V_{GS} - V_{TH0})V_{DS} - \frac{V_{DS}^2}{2} - \frac23\gamma\left[A^{3/2} - B^{3/2}\right]\right\}.$$

在 $V_{GS}$ 和 $V_{DS}$ 恒定时，只有 $A$ 和 $B$ 依赖于 $V_{BS}$，且 $\partial A/\partial V_{BS} = \partial B/\partial V_{BS} = -1$。（含 $3/2$ 次幂的方括号是对耗尽电荷的积分；随着沟道对衬底的电压从源端到漏端逐渐升高，耗尽电荷沿沟道变化。）

### 第 2 步 — 求导

$$\frac{\partial}{\partial V_{BS}}\left[A^{3/2} - B^{3/2}\right] = -\frac32\left(\sqrt A - \sqrt B\right),$$

因此

$$
\begin{aligned}
g_{mb} = \frac{\partial I_D}{\partial V_{BS}} &= \beta\left(-\frac23\gamma\right)\left(-\frac32\right)\left(\sqrt A - \sqrt B\right)\\
&= \beta\,\gamma\left(\sqrt A - \sqrt B\right).
\end{aligned}
$$

利用 $-V_{BS} = V_{SB}$ 和 $V_{SB} + V_{DS} = V_{DB}$：

$$g_{mb} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

由于 $V_{DS} > 0$，$g_{mb} > 0$：抬高衬底电压会降低阈值、增大电流。

### 第 3 步 — 简单模型

整个沟道使用同一个阈值 $V_{TH} = V_{TH0} + \gamma\left(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F}\right)$，于是

$$\frac{\partial V_{TH}}{\partial V_{BS}} = -\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} \equiv -\eta .$$

**线性区。** 由 $I_D = \beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$ 得

$$g_{mb} = \frac{\partial I_D}{\partial V_{TH}}\cdot\frac{\partial V_{TH}}{\partial V_{BS}} = (-\beta V_{DS})(-\eta) = \mu C_{ox}\frac{W}{L}\,V_{DS}\,\frac{\gamma}{2\sqrt{2\phi_F + V_{SB}}} .$$

**饱和区。** 由 $I_D = \frac12\beta(V_{GS} - V_{TH})^2$ 得 $g_{mb} = \beta(V_{GS} - V_{TH})\eta = \eta g_m$。

### 第 4 步 — 比较：沿沟道的平均值与源端值

由于 $\frac{d}{du}\sqrt{2\phi_F + u} = \frac{1}{2\sqrt{2\phi_F + u}}$，

$$\sqrt{2\phi_F + V_{SB} + V_{DS}} - \sqrt{2\phi_F + V_{SB}} = \int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{du}{2\sqrt{2\phi_F + u}} ,$$

因此

$$g_{mb} = \mu C_{ox}\frac{W}{L}\int_{V_{SB}}^{V_{SB} + V_{DS}}\frac{\gamma\,du}{2\sqrt{2\phi_F + u}} = \mu C_{ox}\frac{W}{L}\,V_{DS}\cdot\overline{\eta},$$

其中 $u$ 是局部的沟道对衬底电压（从源端的 $V_{SB}$ 到漏端的 $V_{DB}$），$\overline\eta$ 是局部体效应因子沿沟道的**平均值**。简单模型则处处使用**源端的值** $\eta$。由于 $1/\sqrt{2\phi_F + u}$ 随 $u$ 减小，

$$g_{mb}^{\text{(new)}} \le g_{mb}^{\text{(simple)}} :$$

越靠近漏端，沟道相对于衬底的电位越高，耗尽区越宽，局部阈值对衬底电压就越不敏感。

**精确比值。** 令 $a = 2\phi_F + V_{SB}$，并利用 $\sqrt{a + V_{DS}} - \sqrt a = V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)$，

$$\frac{g_{mb}^{\text{(new)}}}{g_{mb}^{\text{(simple)}}} = \frac{\gamma V_{DS}/(\sqrt{a + V_{DS}} + \sqrt a)}{\gamma V_{DS}/(2\sqrt a)} = \frac{2}{1 + \sqrt{1 + V_{DS}/a}} .$$

当 $V_{DS} \ll a$ 时，$\sqrt{1 + V_{DS}/a} \approx 1 + V_{DS}/(2a)$，比值为 $\approx 1 - V_{DS}/(4a) \to 1$：当沟道电势沿沟道几乎不变时，两个模型一致。

**数值**（$2\phi_F = 0.9$ V）：

| $V_{SB}$ | $V_{DS} = 0.2$ V | $V_{DS} = 0.5$ V | $V_{DS} = 1$ V |
|---|---|---|---|
| 0（$a = 0.9$ V） | 0.95 | 0.89 | 0.82 |
| 1 V（$a = 1.9$ V） | 0.975 | 0.94 | 0.89 |

例如，取 $\mu C_{ox}(W/L) = 1\ \mathrm{mA/V^2}$，$\gamma = 0.45\ \mathrm{V^{1/2}}$，$V_{SB} = 0$，$V_{DS} = 0.5$ V：

$$
\begin{aligned}
g_{mb}^{\text{(new)}} &= (1\ \mathrm{mA/V^2})(0.45)\left(\sqrt{1.4} - \sqrt{0.9}\right) = 0.45\times(1.1832 - 0.9487)\ \mathrm{mS} = 0.106\ \mathrm{mS},\\
g_{mb}^{\text{(simple)}} &= (1\ \mathrm{mA/V^2})(0.5\ \mathrm{V})\frac{0.45}{2\times0.9487} = 0.119\ \mathrm{mS},
\end{aligned}
$$

比值为 0.89。差别随 $V_{DS}$ 增大而增大，随 $V_{SB}$ 增大（$a$ 更大）而减小。

**饱和区。** 该表达式一直适用到 $V_{DS} = V_{D,sat}$，在该处 $\partial I_D/\partial V_{DS} = 0$，因此

$$\frac{dI_D}{dV_{BS}} = \frac{\partial I_D}{\partial V_{BS}}\bigg|_{V_{DS} = V_{D,sat}} + \underbrace{\frac{\partial I_D}{\partial V_{DS}}\bigg|_{V_{D,sat}}}_{=\,0}\cdot\frac{\partial V_{D,sat}}{\partial V_{BS}} :$$

饱和区中的 $g_{mb}$ 就是第 2 步中的公式在 $V_{DS} = V_{D,sat}$ 时的值，同样略低于 $\eta g_m$，当 $V_{D,sat} \ll 2\phi_F + V_{SB}$ 时趋近于它。

### 结果

$$g_{mb} = \frac{\partial I_D}{\partial V_{BS}} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$

简单模型在线性区给出 $g_{mb} = \mu C_{ox}(W/L)V_{DS}\,\gamma/(2\sqrt{2\phi_F + V_{SB}})$（在饱和区给出 $\eta g_m$）。新结果是体效应因子从源端到漏端沿沟道的平均，而简单模型对整个沟道都使用源端的值。两者在 $V_{DS}$ 较小时一致；$V_{DS}$ 较大时，新的 $g_{mb}$ 较小，比值为 $2/(1 + \sqrt{1 + V_{DS}/(2\phi_F + V_{SB})})$（例如 $V_{DS} = 0.5$ V、$V_{SB} = 0$、$2\phi_F = 0.9$ V 时为 0.89）。在饱和区，取 $V_{DS} = V_{D,sat}$。

**常见错误。** 漏掉链式法则中的负号（$\partial A/\partial V_{BS} = -1$），从而得到负的 $g_{mb}$。抬高衬底电压会使各处的阈值都降低，因此 $\partial I_D/\partial V_{BS} > 0$。

**常见错误。** 声称新模型给出**更大**的 $g_{mb}$，或在任何 $V_{DS}$ 下都给出相同的值。局部灵敏度 $\gamma/(2\sqrt{2\phi_F + u})$ 在源端最大，因此其平均值较小，只有在 $V_{DS} \to 0$ 时才相等。
