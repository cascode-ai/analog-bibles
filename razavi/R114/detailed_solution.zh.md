# 详细步骤 - R114

**思路。** 在小信号电路中 $M_1$ 的源极节点（记为 $S$）和输出端列基尔霍夫电流定律（KCL）方程，解出 $v_{out}/v_{in}$。然后按 $A_v = -G_mR_{out}$ 验证答案，这也能解释增益为何很高。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的源极（即 $R_S$ 的上端，它同时驱动 $M_2$ 的栅极）记为节点 $S$。因此 $M_2$ 并不是一个固定的电流源（current source）：它的栅极跟随 $R_S$ 上的电压变化。$V_{DD}$ 为交流地；$\gamma = 0$，因此尽管 $M_1$ 的源极不接地，也没有体效应（body effect）。以 $v_S$ 和 $v_{out}$ 为未知量：

- **$M_1$**：$v_{gs1} = v_{in} - v_S$；一个从 out（漏极）流向 $S$ 的受控源 $g_{m1}(v_{in} - v_S)$，以及接在 out 与 $S$ 之间的 $r_{O1}$。
- **$R_S$**：接在 $S$ 与地之间。
- **$M_2$**：$v_{gs2} = v_S$（源极接交流地）；一个从 out（漏极）流向地的受控源 $g_{m2}v_S$，以及接在 out 与地之间的 $r_{O2}$。

<!-- diagram: diagram-01.cir -->

$M_2$ 的栅极不吸取电流，因此 $M_1$ 的电流全部流过 $R_S$。

### 第 2 步 — 两个 KCL 方程

**在节点 $S$**（$r_{O1}$ 中的电流为 $(v_{out} - v_S)/r_{O1}$）：

$$g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}} = \frac{v_S}{R_S}. \tag{1}$$

**在输出端**（不接负载），经 $M_2$ 和 $M_1$ 流出的电流之和为零：

$$\left[g_{m2}v_S + \frac{v_{out}}{r_{O2}}\right] + \left[g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}}\right] = 0.$$

第二个方括号正是式 (1) 的左边，即 $v_S/R_S$：

$$g_{m2}v_S + \frac{v_{out}}{r_{O2}} + \frac{v_S}{R_S} = 0. \tag{2}$$

也就是说，$M_1$ 从输出端吸取的信号电流（即 $R_S$ 中的电流）必须由 $M_2$ 提供。

### 第 3 步 — 求解增益

**由式 (2)：** $v_S\,(g_{m2} + 1/R_S) = -v_{out}/r_{O2}$，又因为 $g_{m2} + 1/R_S = (1 + g_{m2}R_S)/R_S$，

$$v_S = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\,v_{out}. \tag{3}$$

**整理式 (1)**，把 $v_S$ 项移到右边：

$$
\begin{aligned}
g_{m1}v_{in} - g_{m1}v_S + \frac{v_{out}}{r_{O1}} - \frac{v_S}{r_{O1}} &= \frac{v_S}{R_S}\\
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} &= v_S\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S}\right),
\end{aligned}
$$

其中

$$g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S} = \frac{g_{m1}r_{O1}R_S + R_S + r_{O1}}{r_{O1}R_S}.$$

**代入式 (3)：**

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\cdot\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}R_S}\,v_{out} = -\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out}.$$

把 $v_{out}/r_{O1}$ 移到右边，并以 $r_{O1}r_{O2}(1 + g_{m2}R_S)$ 为公分母通分：

$$g_{m1}v_{in} = -\frac{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out},$$

其中分子可整理为

$$r_{O2} + g_{m2}r_{O2}R_S + r_{O1} + R_S + g_{m1}r_{O1}R_S = r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2}).$$

**增益：**

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})}.$$

该级为反相放大。

### 第 4 步 — 按 $A_v = -G_mR_{out}$ 交叉验证

**短路跨导**（short-circuit transconductance，$v_{out} = 0$）。由式 (1) 得

$$g_{m1}(v_{in} - v_S) - \frac{v_S}{r_{O1}} = \frac{v_S}{R_S}\quad\Longrightarrow\quad v_S = \frac{g_{m1}r_{O1}R_S}{r_{O1} + R_S + g_{m1}r_{O1}R_S}\,v_{in}.$$

从短路的输出端抽出的电流等于 $M_1$ 的电流（$v_S/R_S$）加上 $M_2$ 电流的**减少量**（$g_{m2}v_S$）：

$$|G_m| = \frac{(1 + g_{m2}R_S)\,v_S}{R_S\,v_{in}} = \frac{g_{m1}r_{O1}(1 + g_{m2}R_S)}{r_{O1} + R_S + g_{m1}r_{O1}R_S}.$$

**输出电阻**（$v_{in} = 0$，测试电压为 $v_x$）。带源极负反馈（source degeneration）的 $M_1$ 呈现的电阻为 $R_1 = r_{O1} + (1 + g_{m1}r_{O1})R_S$，吸取电流 $v_x/R_1$，这一电流也流过 $R_S$，因此 $v_S = R_Sv_x/R_1$；于是 $M_2$ 吸取的电流为 $g_{m2}v_S + v_x/r_{O2}$：

$$i_x = \frac{v_x}{R_1}(1 + g_{m2}R_S) + \frac{v_x}{r_{O2}}\quad\Longrightarrow\quad R_{out} = r_{O2}\,\Big\|\,\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{1 + g_{m2}R_S}.$$

**乘积。** 写成单个分式，

$$R_{out} = \frac{r_{O2}\,(r_{O1} + R_S + g_{m1}r_{O1}R_S)}{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S},$$

因此 $(r_{O1} + R_S + g_{m1}r_{O1}R_S)$ 在 $-|G_m|R_{out}$ 中被约去：

$$-|G_m|R_{out} = -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

与第 3 步的结果相同。✓

**直观理解。** 当 $v_{in}$ 升高时，$v_S$ 随 $M_1$ 的电流一起升高，从而抬高 PMOS $M_2$ 的栅极，使其导通电流**减小**。于是两个晶体管都把输出往下拉：$M_2$ 相当于由 $S$ 驱动的第二个输入器件，使跨导增大为原来的 $(1 + g_{m2}R_S)$ 倍。这就是增益远高于普通源极负反馈结果 $\approx R_{out}/R_S$ 的原因。

### 第 5 步 — 极限情况

- **$R_S = 0$。** $S$ 接地，$M_2$ 是理想电流源负载，$A_v = -g_{m1}r_{O1}r_{O2}/(r_{O1} + r_{O2}) = -g_{m1}(r_{O1}\parallel r_{O2})$。✓
- **$r_O$ 很大且 $g_{m1}R_S \gg 1$。** $r_{O1} + r_{O2} + R_S$ 相对于 $R_S(g_{m1}r_{O1} + g_{m2}r_{O2})$ 可以忽略，因此
$$A_v \approx -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{R_S(g_{m1}r_{O1} + g_{m2}r_{O2})}.$$
若同时 $g_{m2}R_S \gg 1$，则 $(1 + g_{m2}R_S)/R_S \approx g_{m2}$，且
$$A_v \approx -\frac{(g_{m1}r_{O1})(g_{m2}r_{O2})}{g_{m1}r_{O1} + g_{m2}r_{O2}},$$
当两个器件的本征增益（intrinsic gain）相等时，它约为本征增益 $g_mr_O$ 的一半。源极负反馈**并不会**使增益降到 $R_{out}/R_S$ 附近，因为 $M_2$ 把 $R_S$ 上的信号重新利用了起来。

### 结果

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

这是一个反相增益，其量级与本征增益 $g_mr_O$ 相当；当 $r_O$ 很大且 $g_{m1}R_S \gg 1$ 时，它趋近于 $-g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)/[R_S(g_{m1}r_{O1} + g_{m2}r_{O2})]$。

**常见错误。** 把 $M_2$ 当作电阻为 $r_{O2}$ 的理想电流源（栅极接固定偏置）。这样得到的是普通带源极负反馈的共源级（common-source stage，CS）结果 $-g_{m1}r_{O1}r_{O2}/[r_{O1} + r_{O2} + (1 + g_{m1}r_{O1})R_S]$，它漏掉了提升因子 $(1 + g_{m2}R_S)$，当 $g_{m2}R_S \gg 1$ 时会小得多。

**常见错误。** 套用源极负反馈的经验公式 $A_v \approx -R_D/R_S$（并取 $R_D \to r_{O2}$ 或 $R_{out}$）。该公式假设负载固定；而这里 $M_2$ 的电流随 $v_S$ 变化，$G_m$ 和 $R_{out}$ 都因此改变。

**常见错误。** 把 $M_2$ 流入输出端的电流写成 $+g_{m2}v_S$。对于源极接 $V_{DD}$ 的 PMOS，抬高其栅极会使电流**减小**，因此 $M_2$ 加强了 $M_1$ 的作用，增益为负。
