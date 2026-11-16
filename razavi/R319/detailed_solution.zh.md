# 详细步骤 - R319

**思路。** $R_1$ 接在 Y 与交流地之间，用测试电压驱动源极 X。求出从 X 到 Y 的精确增益，用密勒定理把 $r_O$ 移到 X 处，再与受控源的等效电阻合并。直接用 KCL 推导可以验证这一结果。

### 第 1 步 — 小信号模型（small-signal model）

栅极和衬底都处于交流地，因此受控源从漏极（Y）流向源极（X）的电流为

$$g_mv_{gs} + g_{mb}v_{bs} = g_m(0 - V_X) + g_{mb}(0 - V_X) = -(g_m + g_{mb})V_X,$$

即电流 $(g_m + g_{mb})V_X$ **从 X 流向 Y**；$r_O$ 接在 Y 与 X 之间，$R_1$ 接在 Y 与交流地（$V_{DD}$）之间。

<!-- diagram: diagram-01.cir -->

在 X 点加测试电压 $V_X$，流入 X 的电流为 $I_X$。

### 第 2 步 — 从 X 到 Y 的电压增益

Y 点的 KCL（$(g_m + g_{mb})V_X$ 和 $(V_X - V_Y)/r_O$ 从 X 流来，$V_Y/R_1$ 流出）：

$$\frac{V_Y}{R_1} + \frac{V_Y - V_X}{r_O} = (g_m + g_{mb})V_X .$$

合并各项：

$$
\begin{aligned}
V_Y\left(\frac{1}{R_1} + \frac{1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
V_Y\,\frac{r_O + R_1}{R_1r_O} &= V_X\,\frac{1 + (g_m + g_{mb})r_O}{r_O}\\
A_v = \frac{V_Y}{V_X} &= \frac{\left[1 + (g_m + g_{mb})r_O\right]R_1}{R_1 + r_O},
\end{aligned}
$$

即以 $R_1$ 为负载的共栅级（common-gate stage）从源极到漏极的增益。

### 第 3 步 — 对 $r_O$ 应用密勒定理

从 X 看，$r_O$ 变为接地的 $r_O/(1 - A_v)$；由于 $A_v$ 对这种激励是精确的，结果也是精确的。

$$
\begin{aligned}
1 - A_v &= \frac{R_1 + r_O - R_1 - (g_m + g_{mb})r_OR_1}{R_1 + r_O}\\
&= \frac{r_O\left[1 - (g_m + g_{mb})R_1\right]}{R_1 + r_O},
\end{aligned}
$$

$$R_{X,Miller} = \frac{r_O}{1 - A_v} = \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

若 $(g_m + g_{mb})R_1 > 1$，则 $A_v > 1$：Y 的变化**大于** X，当 X 升高时 $r_O$ 中的电流**流入** X，密勒电阻为**负**，这是完全合理的。

### 第 4 步 — 加入受控源并合并

受控源从 X 吸取电流 $(g_m + g_{mb})V_X$，它与 $V_X$ 成正比，因此相当于从 X 到地的电阻 $1/(g_m + g_{mb})$：

$$R_{in} = \frac{1}{g_m + g_{mb}}\ \Big\|\ \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

将电导相加：

$$
\begin{aligned}
\frac{1}{R_{in}} &= (g_m + g_{mb}) + \frac{1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{(g_m + g_{mb})(R_1 + r_O) + 1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{1 + (g_m + g_{mb})r_O}{R_1 + r_O},
\end{aligned}
$$

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}.$$

### 第 5 步 — 用 KCL 直接验证

$I_X$ 只能从 X 流到 Y（经受控源和 $r_O$），再流过 $R_1$，因此 $V_Y = I_XR_1$，且

$$I_X = (g_m + g_{mb})V_X + \frac{V_X - V_Y}{r_O} = (g_m + g_{mb})V_X + \frac{V_X - I_XR_1}{r_O}.$$

合并 $I_X$ 项：

$$
\begin{aligned}
I_X\left(1 + \frac{R_1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
R_{in} = \frac{V_X}{I_X} &= \frac{1 + R_1/r_O}{g_m + g_{mb} + 1/r_O} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O},
\end{aligned}
$$

结果相同。

### 第 6 步 — 结果解读与极限情况

当 $(g_m + g_{mb})r_O\gg1$ 时，

$$R_{in}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O} ,$$

即漏极负载折算到源极时要除以本征增益（intrinsic gain）$(g_m + g_{mb})r_O$。

- **$R_1\to\infty$**（即原来的理想电流源 $I_1$）：$R_{in}\to\infty$，因为没有电流能从 Y 流出。
- **$R_1 = 0$**（漏极处于交流地）：$R_{in} = r_O/[1 + (g_m + g_{mb})r_O] = r_O\parallel\dfrac{1}{g_m + g_{mb}}$。
- **$r_O\to\infty$**：对任何有限的 $R_1$，$R_{in}\to1/(g_m + g_{mb})$。

### 结果

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}.$$

用密勒定理：从 X 到 Y 的增益为 $A_v = [1 + (g_m + g_{mb})r_O]R_1/(R_1 + r_O)$，因此 $r_O$ 在 X 处表现为 $r_O/(1 - A_v) = (R_1 + r_O)/[1 - (g_m + g_{mb})R_1]$（当 $(g_m + g_{mb})R_1 > 1$ 时为负）。它与 $1/(g_m + g_{mb})$ 并联即得上述结果。当 $R_1\to\infty$ 时它趋于 $\infty$，当 $R_1 = 0$ 时它等于 $r_O\parallel1/(g_m + g_{mb})$。

**常见错误。** 断言 $R_{in} = 1/(g_m + g_{mb})$ 严格成立。$r_O$ 中的电流取决于 $V_Y$，而它由负载 $R_1$ 决定，因此负载在源极处表现为 $R_1/[(g_m + g_{mb})r_O]$。

**常见错误。** 在密勒定理中用错增益，例如 $A_v = (g_m + g_{mb})R_1$（不含 $r_O$ 项）或 $-A_v$（好像该级是反相的）。共栅级是同相的，因子应为 $1 - A_v$，其中 $A_v$ 是由 Y 点 KCL 求得的精确正值。

**常见错误。** 回答 $R_1 + r_O$ 或 $\infty$。$R_1 + r_O$ 只是无源通路的电阻，受控源使它减小 $1 + (g_m + g_{mb})r_O$ 倍；$\infty$ 只是理想电流源时的极限。
