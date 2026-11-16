# 详细步骤 - R121

**思路。** 输出端是共源（common-source）器件 $M_1$ 的漏极（节点 $X$），它同时也是 $M_2$ 的源极和 $M_3$ 的栅极。作用于 $X$ 的唯一信号源是 $M_1$ 的受控电流，因此增益等于 $-g_{m1}$ 乘以 $X$ 点的总电阻：先求向上看进 $M_2$–$M_3$ 的电阻 $R_{up}$（只需在它们的公共漏极 $D$ 列一个 KCL 方程），再与 $r_{O1}$ 并联组合。

### 第 1 步 — 小信号模型（small-signal model）

$V_{b1}$ 和 $V_{DD}$ 为交流地，且 $\gamma = 0$。把 $M_2$ 和 $M_3$ 的公共漏极记为节点 $D$。以 $v_X = v_{out}$ 和 $v_D$ 为未知量：

- **$M_1$**：$v_{gs1} = v_{in}$；受控源 $g_{m1}v_{in}$ 从 $X$ 流向地，$r_{O1}$ 从 $X$ 接到地。
- **$M_2$**：$v_{gs2} = -v_X$；受控源 $-g_{m2}v_X$ 从 $D$（漏极）流向 $X$（源极），$r_{O2}$ 接在 $D$ 与 $X$ 之间。
- **$M_3$**：$v_{gs3} = v_X$（源极接交流地）；受控源 $g_{m3}v_X$ 从 $D$（漏极）流向交流地，$r_{O3}$ 从 $D$ 接到交流地。

<!-- diagram: diagram-01.cir -->

支路电流：

$$i_2 \equiv \text{current from } D \text{ through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into } D = -g_{m3}v_X - \frac{v_D}{r_{O3}}.$$

$M_2$–$M_3$ 网络中不含独立源，因此从 $X$ 看去，它是一个接到交流地的电阻 $R_{up}$，在 $X$ 点列 KCL 得

$$g_{m1}v_{in} + \frac{v_X}{r_{O1}} + \frac{v_X}{R_{up}} = 0\quad\Longrightarrow\quad v_X = -g_{m1}\left(r_{O1}\parallel R_{up}\right)v_{in}.$$

### 第 2 步 — 从 $X$ 向上看的电阻

在 $X$ 点加测试电压 $v_X$（断开 $M_1$）；测试电流向上流过 $M_2$，即等于 $-i_2$。

**$D$ 点的 KCL**（$i_3 = i_2$）：

$$-g_{m3}v_X - \frac{v_D}{r_{O3}} = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}}.$$

把 $v_X$ 项移到左边、$v_D$ 项移到右边，再乘以 $r_{O2}r_{O3}$：

$$g_{m2}v_X - g_{m3}v_X + \frac{v_X}{r_{O2}} = \frac{v_D}{r_{O2}} + \frac{v_D}{r_{O3}},$$

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_D\,(r_{O2} + r_{O3}),$$

$$v_D = \frac{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O2} + r_{O3}}\,v_X.$$

**测试电流。** 由于 $i_2 = i_3$，

$$-i_2 = -i_3 = g_{m3}v_X + \frac{v_D}{r_{O3}} = v_X\left[g_{m3} + \frac{1 + (g_{m2} - g_{m3})r_{O2}}{r_{O2} + r_{O3}}\right].$$

通分后，方括号内的分子为

$$g_{m3}(r_{O2} + r_{O3}) + 1 + g_{m2}r_{O2} - g_{m3}r_{O2} = 1 + g_{m2}r_{O2} + g_{m3}r_{O3},$$

因此

$$-i_2 = v_X\,\frac{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}{r_{O2} + r_{O3}},\qquad R_{up} = \frac{v_X}{-i_2} = \frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**验证。** 当 $g_{m3} = 0$ 时，$R_{up} = (r_{O2} + r_{O3})/(1 + g_{m2}r_{O2})$，这正是漏极负载为 $r_{O3}$ 时从源极看进去的标准电阻。✓

### 第 3 步 — 增益

$$A_v = -g_{m1}\,\frac{r_{O1}R_{up}}{r_{O1} + R_{up}}.$$

代入 $R_{up}$，并将分子和分母同乘 $(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$：

$$
\begin{aligned}
A_v &= -g_{m1}\,\frac{r_{O1}(r_{O2} + r_{O3})}{r_{O1}(1 + g_{m2}r_{O2} + g_{m3}r_{O3}) + r_{O2} + r_{O3}}\\[4pt]
&= -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}.
\end{aligned}
$$

### 第 4 步 — 大 $g_mr_O$ 近似与直观理解

当 $g_mr_O \gg 1$ 时，分母中 $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}$ 占主导：

$$A_v \approx -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

等价地，$R_{up} \approx (r_{O2} + r_{O3})/(g_{m2}r_{O2} + g_{m3}r_{O3})$，其量级为 $1/g_m$，远小于 $r_{O1}$。当 $r_{O2} = r_{O3}$ 时，$R_{up} \approx 2/(g_{m2} + g_{m3})$，$A_v \approx -2g_{m1}/(g_{m2} + g_{m3})$；若各跨导（transconductance）相等，则 $A_v \approx -1$。

**为什么 $X$ 是低阻抗节点。** 若 $v_X$ 升高，$M_2$ 的 $v_{gs}$ 减小，$M_3$ 的栅极电压升高，因此两者的电流都减小；$D$ 点电压随之变化，直到两者的电流变化量相等。环路 $X \to$（栅极）$M_3 \to D \to M_2 \to X$ 构成局部负反馈，使 $X$ 几乎保持不动，因此增益的量级为 $g_{m1}/g_m$，而不是 $g_mr_O$。

### 结果

$$A_v = -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}} = -g_{m1}\left(r_{O1}\,\Big\|\,\frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}\right),$$

当 $g_mr_O \gg 1$ 时：

$$A_v \approx -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}},$$

这是一个量级为 $g_{m1}/g_m$ 的低增益。

**常见错误。** 把 $M_3$ 当作栅极接交流地的理想电流源（current source）。它的栅极接在 $X$ 上，这使 $R_{up}$ 的分母中多出 $g_{m3}r_{O3}$ 项，从而降低了 $X$ 点的电阻。

**常见错误。** 从 $M_2$ 的漏极（节点 $D$）取输出，并声称增益很高，量级为 $g_mr_O$。输出端是节点 $X$，它是一个低阻抗节点。

**常见错误。** 取 $R_{up} \approx 1/g_{m2}$，仿佛 $M_2$ 的漏极接交流地。实际上它的漏极看到的是 $r_{O3}$ 以及 $M_3$ 的作用，结果为 $(r_{O2} + r_{O3})/(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$。
