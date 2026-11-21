# 详细步骤 - G300

在第二级两端跨接密勒电容，会产生新的主极点 $|p_1|\approx1/(g_mR_1R_2C)$，并把原来的第二个极点（500 kHz）推到极高频率以至可以忽略（“极点分裂”）；10 MHz 极点不变。单位增益反馈时 $T=a$，因此补偿后的环路增益只有两个相关极点。10 MHz 极点决定了 $60^\circ$ 裕度所允许的单位增益频率，再选取主极点（即 $C$）使交点恰好落在该处。

### 第 1 步 — 补偿后的开环增益

低频增益为 $a_0=10^{108/20}=2.51\times10^5$。在跨导为 $g_m$、输入端和输出端对地电阻分别为 $R_1$、$R_2$ 的第二级两端跨接密勒电容 $C$，主极点为
$$
|p_1|\approx\frac{1}{g_mR_1R_2C},\qquad g_mR_1R_2=(6.39\ \mathrm{mA/V})(1.95\ \mathrm{M\Omega})(86.3\ \mathrm{k\Omega})=1.075\times10^9\ \Omega .
$$
原来的 30 kHz 极点被这一密勒极点取代，500 kHz 极点被分裂到可忽略的高频处，10 MHz 极点 $p_3$ 保留：
$$
a(j\omega)\approx\frac{a_0}{(1+j\omega/|p_1|)(1+j\omega/|p_3|)} .
$$

### 第 2 步 — $60^\circ$ 裕度下的单位增益频率

在交点 $\omega_u\gg|p_1|$ 处主极点贡献 $-90^\circ$。$60^\circ$ 裕度只允许 10 MHz 极点贡献 $30^\circ$：
$$
\tan^{-1}\frac{f_u}{10\ \mathrm{MHz}}=30^\circ\ \Rightarrow\ f_u=10\ \mathrm{MHz}\times\tan30^\circ=5.77\ \mathrm{MHz},\qquad \omega_u=3.63\times10^7\ \mathrm{rad/s}.
$$

### 第 3 步 — 补偿电容

在 10 MHz 极点以下，增益以 $-20$ dB/dec 下降，渐近线上 $|a|=a_0|p_1|/\omega$。令 $|a(\omega_u)|=1$ 得 $a_0|p_1|=\omega_u$，即
$$
C=\frac{a_0}{g_mR_1R_2\,\omega_u}=\frac{2.51\times10^5}{(1.075\times10^9\ \Omega)(3.63\times10^7\ \mathrm{rad/s})}=6.4\ \mathrm{pF},
$$
主极点位于 $|p_1|/2\pi=23$ Hz。在这一渐近设计中，开环增益约在 **5.8 MHz** 处降到 0 dB。

### 第 4 步 — 精确校验

在 5.77 MHz 处，10 MHz 极点使 $|a|$ 降低 $\sqrt{1+\tan^230^\circ}=1.155$ 倍，因此取 $C=6.4$ pF 时真实的 0 dB 频率更低，为 5.1 MHz，裕度略大，约为 $63^\circ$。若要求恰在 5.77 MHz 处 $|a|=1$，则
$$
C=\frac{6.44\ \mathrm{pF}}{1.155}=5.6\ \mathrm{pF},
$$
此时 0 dB 频率为 5.77 MHz，$\mathrm{PM}=60^\circ$。因此按渐近设计 $C\approx6.4$ pF，0 dB 频率约为 5.8 MHz；按精确设计 $C\approx5.6$ pF，0 dB 频率恰为 5.77 MHz。
