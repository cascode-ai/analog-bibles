# 详细步骤 - R332

**思路。** 在这个 CMOS 反相器放大器（CMOS inverter amplifier）中，输入同时驱动**两个**栅极，因此两个晶体管都是输入器件。把每个晶体管的闪烁噪声放在与其栅极串联的位置，用输入电压和两个噪声电压写出输出电压，再把输出噪声除以增益的平方 $(g_{m1}+g_{m2})^2(r_{O1}\parallel r_{O2})^2$。

### 第 1 步 — 闪烁噪声源

$$\overline{V_{n1}^2} = \frac{K_N}{C_{ox}(WL)_1}\cdot\frac1f, \qquad \overline{V_{n2}^2} = \frac{K_P}{C_{ox}(WL)_2}\cdot\frac1f .$$

两个噪声源来自不同的器件，因此**互不相关**。

### 第 2 步 — 小信号模型（small-signal model）

两个晶体管的源极都处于交流地（分别接 $V_{DD}$ 和地），因此没有体效应（body effect）。$M_1$ 从输出端向地抽取电流 $g_{m1}v_{g1}$。$M_2$ 向输出端注入电流 $g_{m2}v_{sg2}$，由于其源极处于交流地，$v_{sg2} = -v_{g2}$：这相当于一个从输出节点**流出**的电流 $g_{m2}v_{g2}$，方向与 $M_1$ 的电流相同。$r_{O1}$ 和 $r_{O2}$ 都接在输出端与交流地之间。每个噪声电压都与各自的栅极串联，因此

$$v_{g1} = v_{in} + V_{n1}, \qquad v_{g2} = v_{in} + V_{n2}.$$

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 输出电压（输出端的 KCL）

令 $R_{out} = r_{O1}\parallel r_{O2}$，流出输出节点的电流之和为零：

$$g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2}) + \frac{v_{out}}{R_{out}} = 0 ,$$

$$
\begin{aligned}
v_{out} &= -R_{out}\left[g_{m1}(v_{in} + V_{n1}) + g_{m2}(v_{in} + V_{n2})\right]\\
&= -(g_{m1} + g_{m2})R_{out}\,v_{in} \;-\; R_{out}\left(g_{m1}V_{n1} + g_{m2}V_{n2}\right).
\end{aligned}
$$

第一项给出信号增益，

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}),$$

第二项（把互不相关的功率相加后）给出输出噪声：

$$\overline{V_{n,out}^2} = R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right).$$

### 第 4 步 — 折算到输入端

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{R_{out}^2\left(g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}\right)}{(g_{m1} + g_{m2})^2R_{out}^2}\\
&= \frac{g_{m1}^2\overline{V_{n1}^2} + g_{m2}^2\overline{V_{n2}^2}}{(g_{m1} + g_{m2})^2}.
\end{aligned}
$$

$R_{out}$ 被约去，因此结果与 $r_{O1}$ 和 $r_{O2}$ 无关。代入第 1 步的功率谱密度：

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1} + g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

### 第 5 步 — 物理解释与特例

写成加权和的形式，

$$\overline{V_{n,in}^2} = \left(\frac{g_{m1}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1} + g_{m2}}\right)^2\overline{V_{n2}^2}:$$

输入作用于**两个**栅极，而每个噪声电压只作用于一个栅极，因此每一项按其器件在总跨导（transconductance）中所占的份额加权。

**特例 $g_{m1} = g_{m2} = g_m$。** 每个权重都是 $\left(\tfrac{g_m}{2g_m}\right)^2 = \tfrac14$：

$$\overline{V_{n,in}^2} = \frac14\left[\frac{K_N}{C_{ox}(WL)_1} + \frac{K_P}{C_{ox}(WL)_2}\right]\frac1f .$$

作为比较，若 $M_2$ 的栅极接固定偏置、作为电流源（current source）负载，则该共源级（common-source stage）的增益为 $g_{m1}R_{out}$，且

$$\overline{V_{n,in}^2}\Big|_{CS} = \overline{V_{n1}^2} + \left(\frac{g_{m2}}{g_{m1}}\right)^2\overline{V_{n2}^2},$$

在两个跨导相等时，它是上式的四倍：把 PMOS 用作第二个输入器件，使增益加倍，却没有增加噪声源。

### 结果

$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1}+g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac{1}{f}$$

所用的增益为 $(g_{m1}+g_{m2})(r_{O1}\parallel r_{O2})$；输出电阻被约去。当 $g_{m1} = g_{m2}$ 时，结果化简为 $\tfrac14\left[\dfrac{K_N}{C_{ox}(WL)_1} + \dfrac{K_P}{C_{ox}(WL)_2}\right]\dfrac1f$。

**常见错误。** 把 $M_2$ 当作电流源负载，即使用增益 $g_{m1}(r_{O1}\parallel r_{O2})$，得到 $\overline{V_{n1}^2} + (g_{m2}/g_{m1})^2\overline{V_{n2}^2}$。本题中 $M_2$ 的栅极接在输入端，因此跨导为 $g_{m1} + g_{m2}$。

**常见错误。** 两个器件都用 $K_N$，或者在某一项中漏掉 $C_{ox}$ 或面积。每一项都必须使用各自器件的系数和栅面积 $(WL)_i$。

**常见错误。** 把两个噪声电压按幅值相加，写成带交叉项的 $(g_{m1}V_{n1} + g_{m2}V_{n2})^2$。两个噪声源互不相关，只能把它们的功率相加。
