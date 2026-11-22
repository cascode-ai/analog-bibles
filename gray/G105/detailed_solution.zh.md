# 详细步骤 - G105

施加一个小的电源变化 $v_{dd}$，沿两个电流镜构成的环路追踪它的影响。各节点电压为：$M_3$ 与 $M_4$ 的公共栅极（$M_2$ 的漏极）为 $v_g$；$M_1$ 的二极管节点（$M_3$ 的漏极和 $M_2$ 的栅极）为 $v_a$；$M_2$ 的源极为 $v_s=i_{bias}R$。两个二极管连接的器件把各自节点相对于电源轨固定在 $1/g_m$ 的精度之内。只有非二极管器件的输出电阻 $r_{o3}$ 和 $r_{o2}$ 使 $v_{dd}$ 能注入电流。在 $g_mr_o\gg1$ 时，每个 $r_o$ 只保留首项。

### 第 1 步 — PMOS 一侧

$M_4$ 为二极管连接，流过 $i_{bias}$。其源极位于 $v_{dd}$，所以

$$
v_{dd}-v_g\approx\frac{i_{bias}}{g_{m4}},
$$

$v_g$ 紧密跟随 $v_{dd}$。$M_3$ 的 $v_{sg}$ 与之相同，漏极位于低阻抗节点 $v_a\ll v_{dd}$。因此其电流为

$$
i_3=g_{m3}(v_{dd}-v_g)+\frac{v_{dd}-v_a}{r_{o3}}\approx\frac{g_{m3}}{g_{m4}}i_{bias}+\frac{v_{dd}}{r_{o3}}=i_{bias}+\frac{v_{dd}}{r_{o3}},
$$

其中对相同的器件取 $g_{m3}=g_{m4}$。电源经 $r_{o3}$ 进入左侧支路。

### 第 2 步 — NMOS 一侧

$M_1$ 为二极管连接，流过 $i_3$，所以 $v_a\approx i_3/g_{m1}$。$M_2$ 的栅极为 $v_a$，源极为 $v_s=i_{bias}R$，漏极为 $v_g\approx v_{dd}$：

$$
i_{bias}=g_{m2}(v_a-v_s)+\frac{v_g-v_s}{r_{o2}}\approx\frac{g_{m2}}{g_{m1}}\left(i_{bias}+\frac{v_{dd}}{r_{o3}}\right)-g_{m2}Ri_{bias}+\frac{v_{dd}}{r_{o2}} .
$$

电源经 $r_{o2}$ 进入右侧支路。

### 第 3 步 — 解出 $i_{bias}/v_{dd}$

合并各项，

$$
i_{bias}\left(1+g_{m2}R-\frac{g_{m2}}{g_{m1}}\right)=v_{dd}\left(\frac1{r_{o2}}+\frac{g_{m2}}{g_{m1}r_{o3}}\right),
$$

$$
\frac{i_{bias}}{v_{dd}}\approx\frac{g_{m1}/r_{o2}+g_{m2}/r_{o3}}{g_{m1}(1+g_{m2}R)-g_{m2}} .
$$

分母中的 $-g_{m2}$ 项来自环路 $M_1\to M_2\to M_4\to M_3\to M_1$ 的正反馈。其环路增益为 $g_{m2}/[g_{m1}(1+g_{m2}R)]$，必须小于 1，偏置点才稳定。

### 第 4 步 — 偏置点处的分母

由直流条件 $V_{ov1}-V_{ov2}=I_{BIAS}R$ 及 $V_{ov}=2I/g_m$ 得 $R=2(1/g_{m1}-1/g_{m2})$。代入得

$$
g_{m1}(1+g_{m2}R)-g_{m2}=g_{m2}-g_{m1}=g_{m2}\left(1-\sqrt{\frac{(W/L)_1}{(W/L)_2}}\right),
$$

因为电流相等时 $g_m\propto\sqrt{W/L}$。由于 $(W/L)_2>(W/L)_1$，它为正。它只有 $g_{m1}g_{m2}R$ 的约一半，所以 $-g_{m2}$ 项不能略去。

当 $r_{o2},r_{o3}\to\infty$ 时灵敏度趋于零。二极管连接的 $M_1$、$M_4$ 的输出电阻只贡献高阶项。

### 第 5 步 — 数值示例

取 $I_{BIAS}=100\ \mu\mathrm A$，$V_{ov1}=0.2$ V，$(W/L)_2=4(W/L)_1$。于是 $g_{m1}=1\ \mathrm{mA/V}$，$g_{m2}=2\ \mathrm{mA/V}$，$R=2(1\ \mathrm{k\Omega}-0.5\ \mathrm{k\Omega})=1\ \mathrm{k\Omega}$。所有 $r_o=200\ \mathrm{k\Omega}$ 时：

$$
\frac{i_{bias}}{v_{dd}}=\frac{(1\ \mathrm{mA/V}+2\ \mathrm{mA/V})/(200\ \mathrm{k\Omega})}{2\ \mathrm{mA/V}-1\ \mathrm{mA/V}}=15\ \mu\mathrm{A/V}.
$$

对小信号电路做精确的节点分析得 $14.3\ \mu\mathrm{A/V}$，在该近似 $1/(g_mr_o)$ 的精度之内。全部灵敏度都来自 $r_{o2}$ 和 $r_{o3}$，所以提高这两个输出电阻（例如对 $M_2$、$M_3$ 加共源共栅）就能按比例减小灵敏度。
