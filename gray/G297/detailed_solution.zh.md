# 详细步骤 - G297

把 2 kHz 极点下移到新的主极点位置 $p_1'$，于是次极点为 200 kHz 和 4 MHz。$f=1$ 时 $T=a$，$45^\circ$ 设计准则把单位增益交点放在第二个极点 200 kHz 处。然后用精确的环路增益（loop gain）校验该准则，并由交点读出带宽。

### 第 1 步 — 移动极点后的环路增益

$$
T(jf_\mathrm{s})=\frac{40{,}000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)} .
$$
原有的 2 kHz 极点已变为 $p_1'$，不再位于 2 kHz。

### 第 2 步 — 由设计准则求主极点

在 $|p_1'|$ 与 200 kHz 之间，$|T|\approx40{,}000\,|p_1'|/f_\mathrm{s}$。令它在 200 kHz 处到达单位值（此处主极点贡献 $-90^\circ$，200 kHz 极点约贡献 $-45^\circ$）：
$$
|p_1'|=\frac{200\ \mathrm{kHz}}{40{,}000}=5\ \mathrm{Hz}.
$$

### 第 3 步 — 精确校验

取 $|p_1'|=5$ Hz 求解 $|T|=1$，得 $f_c\approx157$ kHz，此处
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{157}{200}-\tan^{-1}\frac{157}{4000}=-90.0^\circ-38.2^\circ-2.2^\circ=-130.4^\circ,
$$
故 $\mathrm{PM}\approx49.6^\circ$。要精确得到 $45^\circ$，200 kHz 和 4 MHz 极点必须在交点处共贡献 $45^\circ$，这发生在 183 kHz；此处两者的因子为 1.354 和 1.001，$|T|=1$ 要求
$$
|p_1'|=\frac{183\ \mathrm{kHz}\times1.354\times1.001}{40{,}000}=6.2\ \mathrm{Hz}.
$$
因此按准则 $|p_1'|\approx5$ Hz，精确 $45^\circ$ 时为 6.2 Hz。

### 第 4 步 — 加反馈后的带宽

单位增益反馈时，$A=T/(1+T)$ 在交点之前保持在 1 附近，因此带宽约等于单位环路增益频率：名义上为 200 kHz，精确值为 157 kHz（5 Hz 设计）或 183 kHz（6.2 Hz 设计）。有限裕度引起 1.6–2.3 dB 的峰化，闭环 $-3$ dB 点约在 260 kHz（5 Hz）或 300 kHz（6.2 Hz）。结果：$|p_1'|\approx5$ Hz，带宽约为 200 kHz。
