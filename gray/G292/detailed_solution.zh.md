# 详细步骤 - G292

对每个闭环增益，先求低频环路增益（loop gain）$T_0$，再确定三极点环路增益的单位环路增益频率 $f_c$，取 $\mathrm{PM}=180^\circ+\angle T(f_c)$。由于 $f$ 与频率无关，$T=f\,a$ 具有 $a$ 的极点（2 kHz、200 kHz、4 MHz），两种情况之间只有 $T_0$ 不同。

### 第 1 步 — 低频环路增益

由 $A_0=a_0/(1+T_0)$，$a_0=40{,}000$：
$$
T_0=\frac{a_0}{A_0}-1=
\begin{cases}
199, & A_0=200,\\
399, & A_0=100.
\end{cases}
$$
环路增益为
$$
|T(f_\mathrm{s})|=\frac{T_0}{\sqrt{\left[1+\left(\dfrac{f_\mathrm{s}}{2\ \mathrm{kHz}}\right)^2\right]\left[1+\left(\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)^2\right]\left[1+\left(\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)^2\right]}},\qquad
\angle T=-\sum_{p}\tan^{-1}\frac{f_\mathrm{s}}{f_p}.
$$

### 第 2 步 — $A_0=200$ 的情况

若只用主极点，$|T|=1$ 约在 $199\times2\ \mathrm{kHz}\approx400$ kHz 处，已高于第二个极点，因此必须计入它的衰减。数值求解 $|T|=1$ 得 $f_c\approx249$ kHz；此处三个极点因子为 $124.4$、$1.60$ 和 $1.00$，乘积为 199。相位为
$$
\angle T(f_c)=-\tan^{-1}\frac{249}{2}-\tan^{-1}\frac{249}{200}-\tan^{-1}\frac{249}{4000}=-89.5^\circ-51.2^\circ-3.6^\circ=-144.3^\circ,
$$
故 $\mathrm{PM}\approx35.7^\circ\approx36^\circ$。

### 第 3 步 — $A_0=100$ 的情况

以 $T_0=399$ 重复同样步骤，得 $f_c\approx374$ kHz（极点因子为 $187.2$、$2.12$、$1.00$）：

| $A_0$ | $T_0$ | $f_c$ (kHz) | $f_c$ 处各极点相位 | $\angle T(f_c)$ | PM |
|---|---|---|---|---|---|
| 200 | 199 | 249 | $-89.5^\circ,\ -51.2^\circ,\ -3.6^\circ$ | $-144.3^\circ$ | $\approx36^\circ$ |
| 100 | 399 | 374 | $-89.7^\circ,\ -61.9^\circ,\ -5.3^\circ$ | $-156.9^\circ$ | $\approx23^\circ$ |

### 第 4 步 — 变化趋势

闭环增益越低，反馈越深（$T_0$ 越大），交点频率越向上移，接近并越过 200 kHz 极点。第二个极点的相位贡献从 $51^\circ$ 增加到 $62^\circ$，相位裕度从约 $36^\circ$ 降到约 $23^\circ$。若改用 200 kHz 以上的 $-40$ dB/dec 渐近线估算交点，则 $f_c\approx282$ kHz 和 400 kHz，相位裕度约为 $31^\circ$ 和 $21^\circ$；按精确幅值计算得到 $36^\circ$ 和 $23^\circ$。
