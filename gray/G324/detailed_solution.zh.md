# 详细步骤 - G324

单级运放中负载电容本身决定主极点，因此单位增益频率按 $1/C_L$ 变化。次极点来自内部节点，与 $C_L$ 无关。因此增大 $C_L$ 会使穿越频率相对于这个固定极点降低，相位裕度提高。先用 2 pF 时的 45° 条件，以 $g_{m1}$ 表示固定极点，再求出给出 60° 的 $C_L$。

### 第 1 步 — 两个极点

输出节点是唯一的高阻节点：其电阻 $R_o$ 是共源共栅输出电阻，量级为 $g_mr_o^2$。输出电容以 $C_L$ 为主，故
$$
p_1\approx-\frac1{R_oC_L} .
$$
次极点来自低阻内部节点，例如 $M_{2A}$ 源极处的共源共栅节点（电阻约为 $1/g_{m2A}$，电容为 $C_p$），或 $M_{3A}$ 漏极处的电流镜节点：
$$
p_2\approx-\frac{g_{m2A}}{C_p},
$$
其中不含 $C_L$。低频增益为 $a_0=g_{m1}R_o$，因此在 $|p_1|$ 以上增益以 $-20$ dB/dec 下降，忽略 $p_2$ 时在下式处降到单位增益：
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C_L} .
$$

### 第 2 步 — 相位裕度与 $C_L$ 的关系

$f=1$ 时环路增益就是 $a_v(s)$。在 $|p_1|$ 以上其相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$，因此在穿越频率处
$$
\mathrm{PM}\approx90^\circ-\tan^{-1}\frac{\omega_u}{|p_2|}=90^\circ-\tan^{-1}\frac{g_{m1}}{C_L|p_2|} .
$$
$C_L$ 增大使 $\omega_u$ 降低而 $|p_2|$ 不变，因此裕度增大。

### 第 3 步 — 利用已知的 45° 点

$C_L=2$ pF 时裕度为 45°，因此
$$
\tan^{-1}\frac{g_{m1}}{(2\ \mathrm{pF})|p_2|}=45^\circ\quad\Rightarrow\quad |p_2|=\frac{g_{m1}}{2\ \mathrm{pF}} .
$$

### 第 4 步 — 60° 所需的 $C_L$

60° 时 $\omega_u/|p_2|=\tan30^\circ=1/\sqrt3$：
$$
\frac{g_{m1}}{C_L}=\frac{|p_2|}{\sqrt3}=\frac{g_{m1}}{\sqrt3\,(2\ \mathrm{pF})}
\quad\Rightarrow\quad C_L=2\sqrt3\ \mathrm{pF}=3.46\ \mathrm{pF}.
$$

### 第 5 步 — 精确的双极点穿越频率

由于 $p_2$ 也使幅值减小 $1/\sqrt{1+(\omega/|p_2|)^2}$ 倍，满足 $|a_v(j\omega_c)|=1$ 的真实穿越频率 $\omega_c$ 低于 $\omega_u$。

- 45° 要求 $\omega_c=|p_2|$，此处幅值为 $g_{m1}/(C_L|p_2|\sqrt2)=1$，故 $g_{m1}/C_L=\sqrt2\,|p_2|$。
- 60° 要求 $\omega_c=|p_2|/\sqrt3$，此处幅值为 $g_{m1}\sqrt3/(C_L|p_2|)\cdot\sqrt{3/4}=1$，故 $g_{m1}/C_L=\tfrac23|p_2|$。

于是两个负载电容之比给出
$$
C_L=2\ \mathrm{pF}\times\frac{\sqrt2}{2/3}=4.24\ \mathrm{pF}.
$$
因此按常用的 $\omega_u\approx g_{m1}/C_L$ 近似 $C_L\approx3.5$ pF，按精确的双极点穿越条件为 4.2 pF。两种情况下都必须增大而不是减小负载才能提高裕度。
