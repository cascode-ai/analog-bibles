# 详细步骤 - G325

在单级套筒式运放中，负载电容决定输出端的主极点，因此单位增益频率为 $g_{m1}/C_L$。次极点由内部节点固定。45° 裕度要求该极点位于穿越频率处，由此直接确定 $C_L$。

### 第 1 步 — 环路增益

输出节点具有很大的共源共栅电阻 $R_o$，此处电容以 $C_L$ 为主，故
$$
p_1\approx-\frac1{R_oC_L},\qquad a_0=g_{m1}R_o .
$$
$f=1$ 时环路增益为 $a(s)=a_0/[(1-s/p_1)(1-s/p_2)]$。在 $|p_1|$ 以上 $|a|$ 以 $-20$ dB/dec 下降，忽略 $p_2$ 时在下式处降到单位增益：
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C_L} .
$$
$|p_2|=200$ Mrad/s 来自内部的共源共栅节点或电流镜节点，与 $C_L$ 无关。

### 第 2 步 — 45° 条件

在 $|p_1|$ 以上相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$。因此 45° 裕度要求 $\omega_u=|p_2|$：
$$
\frac{g_{m1}}{C_L}=|p_2|\quad\Rightarrow\quad
C_L=\frac{g_{m1}}{|p_2|}=\frac{0.3\ \mathrm{mA/V}}{2\times10^8\ \mathrm{rad/s}}=1.5\ \mathrm{pF}.
$$
$|p_2|$ 以 rad/s 给出，因此不涉及 $2\pi$ 因子。

### 第 3 步 — 精确的双极点穿越频率

在 $\omega=|p_2|$ 处第二极点也使幅值减小 $1/\sqrt2$ 倍。要使真实穿越频率恰好落在 $|p_2|$：
$$
|a(j|p_2|)|=\frac{g_{m1}}{C_L|p_2|}\cdot\frac1{\sqrt2}=1
\quad\Rightarrow\quad
C_L=\frac{g_{m1}}{\sqrt2\,|p_2|}=1.06\ \mathrm{pF}.
$$
因此按常用的 $\omega_u=|p_2|$ 准则 $C_L\approx1.5$ pF，裕度略高于 45°；恰好 45° 时为 1.06 pF。
