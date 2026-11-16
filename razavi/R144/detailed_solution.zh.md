# 详细步骤 - R144

**思路。** 栅极不吸取电流，因此 $V_{in}$ 注入节点 $X$ 的小信号电流 $i$ 恰好就是从漏极流出、进入 $R_D$ 的电流：$v_{out} = iR_D$。从 $X$ 看进去，晶体管和 $R_D$ 相当于一个输入电阻 $R_{in}$，因此 $i = v_{in}/(R_S + R_{in})$，$A_v = R_D/(R_S + R_{in})$。计入 $r_O$ 和体效应（body effect）推导出 $R_{in}$，再令 $R_{in} = R_S$，即可得到两种形式。

### 第 1 步 — 小信号模型（small-signal model）

$V_b$ 和 $V_{DD}$ 为交流地。由于栅极和衬底都接交流地，$v_{gs} = v_{bs} = -v_X$，因此受控源从漏极向源极输送 $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_X$，$r_O$ 接在漏极与源极之间；$R_S$ 把输入连接到 $X$，$R_D$ 从 out 接到交流地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 流过 $R_S$、晶体管和 $R_D$ 的同一电流

设 $i$ 从输入端经 $R_S$ 流入 $X$。由于栅极不吸取电流，$i$ 从源极向上流过晶体管到达漏极，再向上流过 $R_D$ 进入 $V_{DD}$（交流地）：

$$v_{out} = iR_D . \tag{1}$$

增益为正：该级为同相放大。

### 第 3 步 — $X$ 点的输入电阻

晶体管的漏源电流为 $-i$：

$$-i = -(g_m + g_{mb})v_X + \frac{v_{out} - v_X}{r_O}.$$

代入式 (1) 并乘以 $r_O$：

$$-ir_O = -(g_m + g_{mb})r_O\,v_X + iR_D - v_X,$$

$$v_X\left[1 + (g_m + g_{mb})r_O\right] = i\,(R_D + r_O),$$

$$R_{in} = \frac{v_X}{i} = \frac{R_D + r_O}{1 + (g_m + g_{mb})r_O}. \tag{2}$$

当 $r_O \to \infty$ 时，这就是熟悉的 $1/(g_m + g_{mb})$；当 $r_O$ 为有限值时，漏极负载会部分地反映到输入端：$R_{in} \approx 1/(g_m + g_{mb}) + R_D/[(g_m + g_{mb})r_O]$。

### 第 4 步 — 一般增益

从输入端经 $R_S$ 和 $R_{in}$ 列基尔霍夫电压定律（KVL）方程：

$$v_{in} = iR_S + v_X = i\,(R_S + R_{in})\quad\Longrightarrow\quad i = \frac{v_{in}}{R_S + R_{in}},$$

再结合式 (1)：

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_{in}}. \tag{3}$$

代入式 (2)，并将分子和分母同乘 $1 + (g_m + g_{mb})r_O$：

$$\frac{v_{out}}{v_{in}} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D},$$

这就是带信号源内阻的共栅级一般增益。

### 第 5 步 — 施加匹配条件 $R_{in} = R_S$

**先证第二个结果。** 由式 (3)：

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_S} = \frac{R_D}{2R_S}. \qquad\blacksquare$$

**第一个结果。** 由式 (2)，$R_S = R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$：

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{2R_{in}} = \frac{R_D\left[1 + (g_m + g_{mb})r_O\right]}{2(R_D + r_O)},$$

将分子和分母同除以 $R_D$：

$$\frac{v_{out}}{v_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)}. \qquad\blacksquare$$

**交叉验证。** 匹配意味着 $[1 + (g_m + g_{mb})r_O]R_S = R_D + r_O$，因此第 4 步表达式的分母变为 $r_O + (R_D + r_O) + R_D = 2(r_O + R_D)$，结果相同 ✓。

### 第 6 步 — 解释

匹配时，$R_S$ 和 $R_{in}$ 构成等比分压器，因此 **$v_{in}$ 的一半出现在 $X$ 点**，$v_X = v_{in}/2$，而 $i = v_{in}/(2R_S)$ 全部从漏极流出进入 $R_D$：$v_{out} = R_Dv_{in}/(2R_S)$。

第一种形式揭示了匹配的代价：$R_D$ 也会通过 $r_O$ 进入 $R_{in}$，因此 $R_D$ 越大，就需要越大的 $(g_m + g_{mb})r_O$ 才能保持 $R_{in} = R_S$。匹配时的增益永远不会超过本征增益（intrinsic gain）的一半，即 $[1 + (g_m + g_{mb})r_O]/2$，当 $R_D \gg r_O$ 时趋近这一极限。

### 结果

由 $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$ 和增益 $v_{out}/v_{in} = R_D/(R_S + R_{in})$，匹配条件 $R_{in} = R_S$ 给出

$$\frac{V_{out}}{V_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)} = \frac{R_D}{2R_S}.$$

**常见错误。** 取 $R_{in} = 1/(g_m + g_{mb})$，却在其他地方保留 $r_O$。当 $r_O$ 为有限值时，输入电阻取决于漏极负载，这一简化值无法得出精确的第一个表达式。

**常见错误。** 把该级当作反相放大。流入源极的电流从漏极流出，并**向上**流过 $R_D$，因此 $v_{out} = +iR_D$。

**常见错误。** 忘记体效应。衬底接地，而源极随 $v_X$ 变化，因此在所有地方 $g_{mb}$ 都要加到 $g_m$ 上。
