# 详细步骤 - G294

20 dB 的闭环增益确定了反馈系数，从而确定低频环路增益 $T_0$。然后加入主极点 $p_D$，使 $|T|$ 从 $T_0$ 以 $-20$ dB/dec 下降，恰在第一个原有极点（300 kHz）处降到单位值；此处主极点贡献 $-90^\circ$，300 kHz 极点约贡献 $-45^\circ$，即相位裕度为 $45^\circ$。最后用精确的环路增益校验这一准则。

### 第 1 步 — 反馈系数与低频环路增益

20 dB 闭环增益即 $A_0=10$。由 $A_0=a_0/(1+a_0f)$，$a_0=5000$：
$$
f=\frac{a_0/A_0-1}{a_0}=\frac{499}{5000}=0.0998,\qquad T_0=a_0f=499 .
$$

### 第 2 步 — 主极点

$f$ 与频率无关时，环路增益为
$$
T(jf_\mathrm{s})=\frac{499}{\left(1+j\dfrac{f_\mathrm{s}}{|p_D|}\right)\left(1+j\dfrac{f_\mathrm{s}}{300\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
在 $|p_D|$ 与 300 kHz 之间，$|T|\approx T_0|p_D|/f_\mathrm{s}$。令这条渐近线在 $|p_1|=300$ kHz 处等于单位值：
$$
|p_D|=\frac{|p_1|}{T_0}=\frac{300\ \mathrm{kHz}}{499}=601\ \mathrm{Hz}\approx600\ \mathrm{Hz}.
$$
它是单位增益补偿值的十倍，因为需要滚降的环路增益小了十倍。

### 第 3 步 — 精确校验

取 $|p_D|=601$ Hz 求解 $|T|=1$，得 $f_c\approx235$ kHz（300 kHz 处实际幅值比渐近线低 3 dB）。此处相位为
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{235}{300}-\tan^{-1}\frac{235}{2000}-\tan^{-1}\frac{235}{25000}=-90.0^\circ-38.0^\circ-6.7^\circ-0.5^\circ\approx-135.1^\circ,
$$
故 $\mathrm{PM}\approx45^\circ$。要精确得到 $45^\circ$，需要原有极点在交点处（233 kHz）共贡献 $45^\circ$，由此得 $|p_D|=595$ Hz。

### 第 4 步 — 加反馈后的带宽

闭环增益为 $A=\dfrac1f\cdot\dfrac{T}{1+T}$：在 $|T|\gg1$ 时保持 $1/f\approx10$，越过交点后随 $|T|$ 下降。因此带宽约等于单位环路增益频率，名义上为 $|p_1|=300$ kHz（精确为 235 kHz）；由于 $45^\circ$ 裕度，响应约有 2.4 dB 的峰化，并在约 400 kHz 处降到 $-3$ dB。这与单位增益情况下的带宽相同，是按单位增益补偿的放大器（$|p_D|=60$ Hz）在增益为 10 时所得约 30 kHz 带宽的十倍。结果：$|p_D|\approx600$ Hz，带宽约为 300 kHz。
