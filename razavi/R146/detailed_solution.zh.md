# 详细步骤 - R146

**思路。** 在输出端使用诺顿等效电路，$A_v = -G_mR_{out}$。对于共栅级，通过把漏极短路并在源极节点 $X$ 列 KCL 来求 $G_m$；$R_{out}$ 则是带源极负反馈的漏极电阻与 $R_D$ 的并联；最后相乘。

### 第 1 步 — 晶体管模型与符号约定

栅极和衬底都接交流地，

$$v_{gs} = -v_X,\qquad v_{bs} = -v_X,$$

因此两个受控源合起来从漏极向源极输送 $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_X$，$r_O$ 接在漏极与源极之间。

在该引理中，诺顿电流源 $G_mv_{in}$ 把电流从输出节点**拉出**，因此 $v_{out} = -G_mv_{in}R_{out}$，而 $G_m$ 等于从输出端到交流地的短路线必须**注入**输出节点的电流除以 $v_{in}$。对于共源级（common-source stage），$G_m = +g_m$。

### 第 2 步 — $G_m$：漏极交流短路到地

<!-- diagram: diagram-01.cir -->

当 $v_{out} = 0$ 时，$R_D$ 中没有信号电流，晶体管的漏源电流为

$$i_{ds} = -(g_m + g_{mb})v_X + \frac{0 - v_X}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_X .$$

**$X$ 点的 KCL**（来自 $R_S$ 的电流加上来自晶体管、流入 $X$ 的电流）：

$$\frac{v_{in} - v_X}{R_S} + i_{ds} = 0\quad\Longrightarrow\quad \frac{v_{in} - v_X}{R_S} = \left(g_m + g_{mb} + \frac{1}{r_O}\right)v_X ,$$

$$v_{in} = v_X\left[1 + \left(g_m + g_{mb} + \frac{1}{r_O}\right)R_S\right]\quad\Longrightarrow\quad v_X = \frac{v_{in}}{1 + \left(g_m + g_{mb} + \dfrac{1}{r_O}\right)R_S}.$$

**短路电流。** 短路线注入漏极节点的电流全部流入晶体管，$i_{sc} = i_{ds}$：

$$G_m = \frac{i_{ds}}{v_{in}} = -\frac{g_m + g_{mb} + 1/r_O}{1 + (g_m + g_{mb} + 1/r_O)R_S},$$

将分子和分母同乘 $r_O$：

$$G_m = -\frac{1 + (g_m + g_{mb})r_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}.$$

$G_m$ **为负**：抬高源极电压会减小 $v_{gs}$（以及 $v_{bs}$），因此晶体管从输出端吸取的电流**更少**。

### 第 3 步 — $R_{out}$：输入置零

<!-- diagram: diagram-02.cir -->

当 $v_{in} = 0$ 时，$R_S$ 把 $X$ 接到交流地。在漏极加测试电压 $v_x$；输出电阻为 $R_D$ 与向带源极负反馈的晶体管漏极看进去的电阻 $R_x$ 的并联。

**从漏极看进去的电阻。** 设 $i_x$ 为测试电流中向下流入晶体管漏极的部分（其余部分流过 $R_D$）。它继续流过 $R_S$，因此 $v_X = i_xR_S$；作为晶体管的漏源电流，它满足

$$i_x = -(g_m + g_{mb})v_X + \frac{v_x - v_X}{r_O} = -(g_m + g_{mb})R_S\,i_x + \frac{v_x - i_xR_S}{r_O}.$$

乘以 $r_O$ 并合并 $i_x$ 项：

$$
\begin{aligned}
i_xr_O &= -(g_m + g_{mb})r_OR_S\,i_x + v_x - i_xR_S\\
v_x &= i_x\left[r_O + R_S + (g_m + g_{mb})r_OR_S\right]\\
R_x &= \frac{v_x}{i_x} = r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S ,
\end{aligned}
$$

$$R_{out} = R_D\,\Big\|\,\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\} = \frac{R_D\,R_x}{R_D + R_x}.$$

### 第 4 步 — 增益

$$A_v = -G_mR_{out} = \frac{1 + (g_m + g_{mb})r_O}{R_x}\cdot\frac{R_DR_x}{R_D + R_x}.$$

$R_x = r_O + [1 + (g_m + g_{mb})r_O]R_S$ 正是 $|G_m|$ 的分母，它被约去：

$$A_v = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{R_D + R_x} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D}.$$

增益**为正**：共栅级是同相放大。

### 第 5 步 — 验证

- **大 $r_O$。** 将分子和分母同除以 $r_O$，并令 $r_O \to \infty$，
$$A_v \to \frac{(g_m + g_{mb})R_D}{1 + (g_m + g_{mb})R_S},$$
这就是熟悉的共栅级结果：输入电流 $v_{in}/[R_S + 1/(g_m + g_{mb})]$ 全部流过 $R_D$。
- **$R_S = 0$**（理想电压驱动）：$A_v = [1 + (g_m + g_{mb})r_O]R_D/(r_O + R_D)$，这是 $r_O$ 为有限值时标准的共栅级增益。
- **一致性。** 等价地，$A_v = R_D/(R_S + R_{in})$，其中 $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$：由于栅极不吸取电流，流入源极的电流都从漏极流出。

### 结果

$$G_m = -\frac{1 + (g_m + g_{mb})r_O}{r_O + [1 + (g_m + g_{mb})r_O]R_S},\qquad R_{out} = R_D\,\Big\|\,\{r_O + [1 + (g_m + g_{mb})r_O]R_S\},$$

$$A_v = -G_mR_{out} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D}\quad(\text{non-inverting}),$$

当 $r_O \to \infty$ 时，它趋于 $(g_m + g_{mb})R_D/[1 + (g_m + g_{mb})R_S]$。

**常见错误。** 由 $G_m = +(g_m + g_{mb})$ 得出反相增益。抬高**源极**电压会减小 $V_{GS}$ 和漏极电流，因此按照该引理的约定 $G_m$ 为负，增益为正。

**常见错误。** 断言 $G_m = g_m + g_{mb}$（忽略 $R_S$ 和 $r_O$）以及 $R_{out} = R_D$ 是精确结果。只有一部分 $v_{in}$ 到达 $X$，而且 $r_O$ 增加了一条电流通路；这些简单形式只在 $R_S = 0$ 且 $r_O \to \infty$ 时成立。

**常见错误。** 在源极接地的条件下计算 $R_{out}$（得到 $R_D\parallel r_O$）。输入置零时，源极仍然接有 $R_S$，它把漏极电阻提高到 $r_O + [1 + (g_m + g_{mb})r_O]R_S$。
