# 详细步骤 - G295

本题把原有的 300 kHz 极点下移到新的主极点位置 $p_1'$，因此剩下的次极点只有 2 MHz 和 25 MHz 两个。$f=1$ 时 $T=a$。仍采用 $45^\circ$ 设计准则，但现在增益必须从 5000 以 $-20$ dB/dec 下降，恰在**第二个**极点 2 MHz 处降到单位值。最后用精确的环路增益校验。

### 第 1 步 — 移动极点后的环路增益

$$
T(jf_\mathrm{s})=\frac{5000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
300 kHz 极点已不复存在，它变成了 $p_1'$。

### 第 2 步 — 由设计准则求主极点

在 $|p_1'|$ 与 2 MHz 之间，$|T|\approx5000\,|p_1'|/f_\mathrm{s}$。令它在 2 MHz 处等于单位值（此处主极点贡献 $-90^\circ$，2 MHz 极点约贡献 $-45^\circ$）：
$$
|p_1'|=\frac{2\ \mathrm{MHz}}{5000}=400\ \mathrm{Hz}.
$$

### 第 3 步 — 精确校验

取 $|p_1'|=400$ Hz 求解 $|T|=1$，得 $f_c\approx1.57$ MHz（2 MHz 处实际幅值比渐近线低 3 dB）。此处
$$
\angle T(f_c)=-90.0^\circ-\tan^{-1}\frac{1.57}{2}-\tan^{-1}\frac{1.57}{25}=-90.0^\circ-38.1^\circ-3.6^\circ=-131.7^\circ,
$$
故 $\mathrm{PM}\approx48^\circ$，略优于要求。要精确得到 $45^\circ$，需要 2 MHz 和 25 MHz 极点在交点处共贡献 $45^\circ$，即 $\tan^{-1}(f_c/2\ \mathrm{MHz})+\tan^{-1}(f_c/25\ \mathrm{MHz})=45^\circ$，解得 $f_c=1.74$ MHz；令该处 $|T|=1$ 得 $|p_1'|=462$ Hz。因此设计值为 $|p_1'|\approx400$ Hz（精确 $45^\circ$ 时为 460 Hz）。

### 第 4 步 — 加反馈后的带宽

单位增益反馈时，交点以下 $A=T/(1+T)\approx1$，越过交点后滚降，因此带宽约等于单位环路增益频率：按设计准则名义上为 2 MHz，精确值为 1.6–1.7 MHz。计入有限裕度引起的峰化（400 Hz 设计约 1.8 dB），闭环 $-3$ dB 点约在 2.6 MHz（精确 $45^\circ$ 设计为 2.9 MHz）。

与加入新主极点（60 Hz，带宽约 300 kHz）相比，移动原有极点把 300 kHz 极点从环路中去掉，使交点上移到 2 MHz 极点处，带宽约为前者的七倍。结果：$|p_1'|\approx400$ Hz，带宽约为 2 MHz。
