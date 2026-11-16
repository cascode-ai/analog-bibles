# 详细步骤 - R113

**思路。** 在小信号电路的两个内部节点（$M_1$ 的漏极，记为 $A$，以及输出端）列 KCL，解出 $v_{out}/v_{in}$。再用一个 $\lambda = 0$ 下的简短论证说明结果的物理意义。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的漏极（即 $R_D$ 的下端，它同时驱动 $M_2$ 的栅极）记为节点 $A$。偏置电流只有一条通路 $V_{DD} \to M_2 \to R_D \to M_1 \to$ 地；若 $R_D = 0$，$M_2$ 就成为二极管连接（diode-connected）器件。$V_{DD}$ 为交流地，且 $\gamma = 0$，因此以 $v_A$ 和 $v_{out}$ 为未知量：

- **$M_1$**：$v_{gs1} = v_{in}$；一个从 $A$ 流向地的受控源 $g_{m1}v_{in}$，以及从 $A$ 接到地的 $r_{O1}$。
- **$R_D$**：接在 out 与 $A$ 之间。
- **$M_2$**：$v_{gs2} = v_A$（源极接交流地）；一个从 out（漏极）流向地（源极）的受控源 $g_{m2}v_A$，以及从 out 接到地的 $r_{O2}$。

<!-- diagram: diagram-01.cir -->

等价地说，$M_2$ 从 $V_{DD}$ 向输出端送入 $-g_{m2}v_A$ 的电流：当 $v_A$ 下降时，PMOS 提供的电流**更大**。

### 第 2 步 — 输出节点与节点 A 的 KCL

将流出各节点的电流相加：

$$\frac{v_{out} - v_A}{R_D} + g_{m2}v_A + \frac{v_{out}}{r_{O2}} = 0, \tag{1}$$

$$g_{m1}v_{in} + \frac{v_A}{r_{O1}} + \frac{v_A - v_{out}}{R_D} = 0. \tag{2}$$

将式 (1) 与式 (2) 相加，$R_D$ 项相互抵消（相当于对超节点 $A$–$R_D$–out 列 KCL）：$M_2$ 提供的电流必须全部向下流过 $M_1$：

$$g_{m1}v_{in} + g_{m2}v_A + \frac{v_A}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0. \tag{3}$$

### 第 3 步 — 求解增益

**由式 (1) 求 $v_A$。** 合并 $v_{out}$ 项和 $v_A$ 项：

$$v_{out}\left(\frac{1}{R_D} + \frac{1}{r_{O2}}\right) = v_A\left(\frac{1}{R_D} - g_{m2}\right).$$

两边同乘 $R_Dr_{O2}$：

$$v_{out}\,(r_{O2} + R_D) = v_A\,r_{O2}\,(1 - g_{m2}R_D),$$

$$v_A = \frac{(r_{O2} + R_D)}{r_{O2}(1 - g_{m2}R_D)}\,v_{out}. \tag{4}$$

**将式 (4) 代入式 (3)。** 把式 (3) 写成

$$g_{m1}v_{in} + v_A\,\frac{1 + g_{m2}r_{O1}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0$$

并代入 $v_A$：

$$g_{m1}v_{in} + \frac{(r_{O2} + R_D)(1 + g_{m2}r_{O1})}{r_{O1}r_{O2}(1 - g_{m2}R_D)}\,v_{out} + \frac{v_{out}}{r_{O2}} = 0.$$

每一项都乘以 $r_{O1}r_{O2}(1 - g_{m2}R_D)$：

$$g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} + (r_{O2} + R_D)(1 + g_{m2}r_{O1})\,v_{out} + r_{O1}(1 - g_{m2}R_D)\,v_{out} = 0.$$

**$v_{out}$ 的系数。** 展开两个乘积，

$$
\begin{aligned}
(r_{O2} + R_D)(1 + g_{m2}r_{O1}) &= r_{O2} + g_{m2}r_{O1}r_{O2} + R_D + g_{m2}r_{O1}R_D,\\
r_{O1}(1 - g_{m2}R_D) &= r_{O1} - g_{m2}r_{O1}R_D ,
\end{aligned}
$$

两者相加，$g_{m2}r_{O1}R_D$ 项相互抵消：

$$\text{coefficient of } v_{out} = R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}.$$

所以

$$(R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2})\,v_{out} = -g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} = g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

### 第 4 步 — 用极限情况验证

- **$R_D = 0$。** $A$ 与输出端合并，$M_2$ 成为二极管连接负载：
$$A_v = \frac{-g_{m1}r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$
这正是熟悉的带二极管连接负载的共源级（common-source stage，CS）增益。✓
- **$R_D \to \infty$。** $R_D$ 中没有信号电流：$v_A = -g_{m1}r_{O1}v_{in}$，$v_{out} = -g_{m2}r_{O2}v_A$。由公式得 $A_v \to g_{m1}r_{O1}r_{O2}g_{m2}R_D/R_D = g_{m1}g_{m2}r_{O1}r_{O2}$，即两个级联的共源级。✓

### 第 5 步 — 大 $r_O$ 近似与直观理解

当 $g_{m2}r_{O1}, g_{m2}r_{O2} \gg 1$ 且 $R_D \ll g_{m2}r_{O1}r_{O2}$ 时，分母中 $g_{m2}r_{O1}r_{O2}$ 项占主导：

$$A_v \approx \frac{g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)}{g_{m2}r_{O1}r_{O2}} = \frac{g_{m1}(g_{m2}R_D - 1)}{g_{m2}} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right).$$

**原因（取 $\lambda = 0$）。** 串联通路中只有一个电流，而当 $r_{O1}\to\infty$ 时，它的变化量完全由 $M_1$ 决定：$i = g_{m1}v_{in}$，方向向下。

1. $M_2$ 必须提供这一电流，而它向下的电流为 $-g_{m2}v_A$，因此
$$-g_{m2}v_A = g_{m1}v_{in} \quad\Longrightarrow\quad v_A = -\frac{g_{m1}}{g_{m2}}\,v_{in}.$$
2. 同一电流向下流过 $R_D$，因此输出端比 $A$ 高 $iR_D$：
$$v_{out} = v_A + g_{m1}R_Dv_{in} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right)v_{in}.$$

节点 $A$ 的下降（反相，$-g_{m1}/g_{m2}$）与 $R_D$ 上的压降（同相，$+g_{m1}R_D$）作用方向相反。因此，**若 $g_{m2}R_D > 1$，该级为同相放大**；若 $g_{m2}R_D < 1$，则为反相放大；若 $g_{m2}R_D = 1$，则增益（在一阶近似下）为零。

### 结果

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}},$$

当 $r_O$ 很大时：

$$A_v \approx g_{m1}\left(R_D - \frac{1}{g_{m2}}\right),$$

当 $g_{m2}R_D > 1$ 时，增益为正（同相）。

**常见错误。** 把 $M_2$ 当作接在输出端的二极管连接负载，得到 $A_v \approx -g_{m1}/g_{m2}$。它的栅极接在节点 $A$，位于 $R_D$ 的**下方**：电压 $-g_{m1}v_{in}/g_{m2}$ 出现在 $A$ 点，而输出端还要再高出 $g_{m1}v_{in}R_D$。

**常见错误。** 把两种效应按相同符号相加，例如 $A_v = -g_{m1}(R_D + 1/g_{m2})$，仿佛 $R_D$ 是共源级的串联负载。$M_2$ 从上方提供电流，因此电流增大时，$R_D$ 上的压降增大，而 $v_A$ 降低：两项应当相减。

**常见错误。** 把 $M_2$ 流入输出端的电流取为 $+g_{m2}v_A$。由于其源极接 $V_{DD}$，栅极电压**下降**会使 PMOS 的电流增大，因此流入输出端的电流为 $-g_{m2}v_A$。
