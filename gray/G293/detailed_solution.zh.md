# 详细步骤 - G293

$f=1$ 时环路增益等于放大器增益，$T=a$。窄带化补偿（narrowbanding）在远低于原有极点处加入主极点 $p_D$，原有极点保持不变。标准设计准则是使 $|T|$ 从低频值以 $-20$ dB/dec 下降，恰在第一个原有极点处降到单位值；此处主极点贡献 $-90^\circ$，第一个原有极点约贡献 $-45^\circ$，相位裕度为 $45^\circ$。然后用精确幅值和相位校验这一准则。

### 第 1 步 — 由设计准则求主极点

加入新极点后，环路增益为
$$
T(jf_\mathrm{s})=\frac{5000}{\left(1+j\dfrac{f_\mathrm{s}}{|p_D|}\right)\left(1+j\dfrac{f_\mathrm{s}}{300\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$
在 $|p_D|$ 以上、300 kHz 以下，幅值只由主极点决定，$|T|\approx5000\,|p_D|/f_\mathrm{s}$。要求这条渐近线在 $|p_1|=300$ kHz 处到达单位值，得
$$
|p_D|=\frac{|p_1|}{a_0}=\frac{300\ \mathrm{kHz}}{5000}=60\ \mathrm{Hz}.
$$

### 第 2 步 — 相位裕度的精确校验

300 kHz 处的实际幅值比渐近线低 3 dB（300 kHz 极点因子为 $\sqrt2$），因此真实交点频率更低。取 $|p_D|=60$ Hz 求解 $|T|=1$，得 $f_c\approx235$ kHz，此处各极点相位为
$$
\angle T(f_c)=-\tan^{-1}\frac{235\ \mathrm{kHz}}{60\ \mathrm{Hz}}-\tan^{-1}\frac{235}{300}-\tan^{-1}\frac{235}{2000}-\tan^{-1}\frac{235}{25000}
=-90.0^\circ-38.0^\circ-6.7^\circ-0.5^\circ=-135.2^\circ,
$$
故 $\mathrm{PM}\approx44.8^\circ$。交点频率降低使 300 kHz 极点的相位小于 $45^\circ$，几乎抵消了 2 MHz 和 25 MHz 极点增加的 $7^\circ$。要精确得到 $45^\circ$，需要三个原有极点在交点处共贡献 $45^\circ$，这发生在 233 kHz；令该处 $|T|=1$ 得 $|p_D|=59.4$ Hz。因此所需主极点为 $|p_D|\approx60$ Hz。

### 第 3 步 — 加反馈后的带宽

单位增益反馈时闭环增益为 $A=T/(1+T)$。远低于交点时 $A\approx1$；高于交点时 $A\approx T$ 随频率下降。因此带宽近似等于单位环路增益频率：按设计准则名义上为 $|p_1|=300$ kHz，按精确幅值为 235 kHz。

由于 $45^\circ$ 裕度使闭环响应欠阻尼，$|A|$ 实际上在 238 kHz 附近先升高约 2.4 dB 再下降，并在约 400 kHz 处降到 $-3$ dB。总结：$|p_D|\approx60$ Hz，闭环带宽名义上约为 300 kHz（单位环路增益约在 235 kHz；闭环 $-3$ dB 点约在 400 kHz）。
