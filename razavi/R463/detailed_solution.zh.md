# 详细步骤 - R463

**思路。** 栅极接固定偏置、源极接 $V_{DD}$ 时，输入只能通过**体效应**（body effect）来改变 $M_1$ 的漏极电流：n 阱电压使阈值电压发生偏移，因此衬底相当于一个较弱的背栅（back gate），$g_{mb} = \eta g_m$。于是每一半电路都是由衬底驱动的共源级，差模增益等于 $g_{mb1}$ 乘以每个漏极处的电阻。

### 第 1 步 — 衬底如何控制电流（体跨导）

电路中没有尾电流源：$M_1$ 和 $M_2$ 的源极位于交流地 $V_{DD}$，因此每一半电路独立工作。对于 n 阱比源极高 $V_{BS}$ 的 PMOS 管，

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right),$$

其中在工作点上 $V_{BS} = V_{in,CM} - V_{DD}$。提高阱电压会增大阱-源结的反向偏置（reverse bias），使 $|V_{TH}|$ 升高；在 $V_{SG}$ 固定的情况下，漏极电流减小。阱电压每变化一伏所引起的阈值电压变化为

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} ,$$

由于 $\Delta|V_{TH}|$ 的作用相当于 $V_{SG}$ 变化 $-\Delta|V_{TH}|$，阱电压 $v_w$ 产生的源漏电流为

$$i_{SD} = -g_m\,\eta\,v_w = -g_{mb}v_w, \qquad g_{mb} = \eta\,g_m .$$

### 第 2 步 — 小信号半边电路（half circuit）及其增益

$M_1$ 的栅极和源极都是交流地，因此只有 $-g_{mb1}v_{w1}$ 从地流入漏极 $D_1$，并有 $r_{O1}$ 从 $D_1$ 接到地；$M_3$ 只贡献 $r_{O3}$。

<!-- diagram: diagram-01.cir -->

对 $D_1$ 列 KCL 方程：

$$
\begin{aligned}
-g_{mb1}v_{w1} &= \frac{v_{d1}}{r_{O1}} + \frac{v_{d1}}{r_{O3}}\\
v_{d1} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,v_{w1} .
\end{aligned}
$$

右半边电路与之相同：$v_{d2} = -g_{mb2}(r_{O2}\parallel r_{O4})\,v_{w2}$，其中 $g_{mb2} = g_{mb1}$，$r_{O2} = r_{O1}$，$r_{O4} = r_{O3}$。

### 第 3 步 — 差模增益

$$
\begin{aligned}
v_{out} = v_{d1} - v_{d2} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,(v_{w1} - v_{w2})\\
|A_v| = \left|\frac{v_{out}}{v_{in}}\right| &= g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}),
\end{aligned}
$$

其中

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} .$$

每个阱都反相地驱动其自身的漏极：提高某一侧的阱电压会减小该侧的电流，于是 $M_3$（或 $M_4$）把漏极拉低。

### 第 4 步 — $\eta$ 的数值及其含义

位于 $V_{DD}$ 的 p+ 源极与位于 $V_{in,CM}$ 的 n 阱构成一个 pn 结，若 $V_{in,CM}$ 比 $V_{DD}$ 低出几百毫伏以上，该结就会导通；因此输入共模电平必须等于 $V_{DD}$ 或只比它略低。

- 当 $V_{in,CM} = V_{DD}$（$V_{BS} = 0$）时：
$$\eta = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V}}} = \frac{0.4}{2\times0.894} = 0.22 .$$
- 当 $V_{in,CM} = V_{DD} - 0.2$ V 时，该结处于轻微的正向偏置（forward bias）：$\eta = 0.4/(2\sqrt{0.6}) = 0.26$。

因此

$$|A_v| \approx (0.22\text{–}0.26)\,g_{m1}(r_{O1}\parallel r_{O3}),$$

只有用相同器件构成的栅极输入差分对增益的四分之一到五分之一左右。作为交换，输入可以位于 $V_{DD}$ 附近（或略高于它），而且 $V_{b1}$ 可以独立于输入电平来设定电流。

### 结果

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

其中 $V_{in,CM} - V_{DD}$ 是阱与源极之间的电压。当 $V_{in,CM} = V_{DD}$ 时，$\eta = 0.4/(2\sqrt{0.8}) \approx 0.22$，因此增益大约只有用相同器件构成的栅极输入差分对的五分之一。

**常见错误。** 把增益写成 $g_{m1}(r_{O1}\parallel r_{O3})$，好像输入驱动的是栅极；体效应会引入因子 $\eta \approx 0.2$。

**常见错误。** 假设存在尾电流源和作为虚地（virtual ground）的源极公共节点，或者把衬底当作交流地。源极接在 $V_{DD}$ 上，而**衬底**才是信号节点。

**常见错误。** 得到 $\eta > 1$，或者把 $V_{BS}$ 的符号弄错：$\eta$ 的量级为 0.2–0.4，输入位于 $V_{DD}$ 时 $V_{BS}$ 约为零。只用 $r_{O1}$ 或只用 $r_{O3}$ 作为负载也是错误的。
