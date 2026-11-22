# 详细步骤 - A541

写出调制器的环路方程得到噪声传递函数（NTF），把白色量化噪声密度乘以 $|\mathrm{NTF}|$，再在信号频带内对整形后的噪声功率积分。令带内噪声有效值等于理想 10 位量化器的量化噪声，即得最大可用带宽 $f_B$。

### 第 1 步 — 信号与噪声传递函数

由 [图 1]，输出等于积分器输出加上量化噪声 $Q$：

$$
V_{out}=Q+\frac{k}{z-1}\left(V_{in}-V_{out}\right)
\;\Longrightarrow\;
V_{out}=\frac{k}{z-1+k}\,V_{in}+\frac{z-1}{z-1+k}\,Q .
$$

$$
\mathrm{STF}(z)=\frac{k}{z-1+k},\qquad \mathrm{NTF}(z)=\frac{z-1}{z-1+k}.
$$

### 第 2 步 — $k=1$ 时的输出噪声谱

$k=1$ 时 $\mathrm{NTF}=(z-1)/z=1-z^{-1}$，$\mathrm{STF}=z^{-1}$。在单位圆上取 $z=e^{j\theta}$，$\theta=2\pi f/f_s$，

$$
|\mathrm{NTF}|=|1-e^{-j\theta}|=2\sin\frac{\theta}{2}=2\sin\frac{\pi f}{f_s}.
$$

$V_{in}=0$，输入单边密度为 $(\Delta/\sqrt{12})\sqrt{2/f_s}$，因此输出噪声谱幅值为

$$
|N(f)|=\frac{\Delta}{\sqrt{12}}\sqrt{\frac2{f_s}}\;2\sin\frac{\pi f}{f_s}=\frac{2\Delta}{\sqrt{6f_s}}\sin\frac{\pi f}{f_s}.
$$

### 第 3 步 — $k=1$ 时的带宽

对 $f_B\ll f_s$ 取 $\sin x\approx x$，带内噪声功率为

$$
n_0^2=\frac{\Delta^2}{12}\,\frac2{f_s}\int_0^{f_B}4\sin^2\frac{\pi f}{f_s}\,df
\approx\frac{\Delta^2}{12}\,\frac{\pi^2}{3}\left(\frac{2f_B}{f_s}\right)^3 .
$$

10 位的要求为 $n_0^2\le\Delta^2/(12\cdot2^{20})$：

$$
\left(\frac{2f_B}{f_s}\right)^3\le\frac{3}{\pi^2\,2^{20}}=2.90\times10^{-7}
\;\Longrightarrow\;
\frac{2f_B}{f_s}\le6.62\times10^{-3}.
$$

取 $f_s=10$ MHz，

$$
f_B\le33.1\ \text{kHz},
$$

对应过采样率（oversampling ratio）$M=f_s/(2f_B)\approx151$。

### 第 4 步 — $k=0.5$ 时的输出噪声谱

此时 $\mathrm{NTF}=(z-1)/(z-0.5)$，取 $z=e^{j\theta}$，

$$
|\mathrm{NTF}|^2=\frac{|e^{j\theta}-1|^2}{|e^{j\theta}-0.5|^2}=\frac{2(1-\cos\theta)}{1.25-\cos\theta},
$$

故

$$
|N(f)|=\frac{\Delta}{\sqrt{6f_s}}\cdot\frac{2\sin(\pi f/f_s)}{\sqrt{1.25-\cos(2\pi f/f_s)}} .
$$

STF $0.5/(z-0.5)$ 在直流处仍为 1。在 $f_s/2$ 处 NTF 幅值为 $2/1.5=4/3$ 而不是 2，但在信号频带内更大：$\theta\ll1$ 时分母 $\approx0.25$，故

$$
|\mathrm{NTF}|\approx\frac{\theta}{0.5}=\frac{4\pi f}{f_s},
$$

是 $k=1$ 时 $2\pi f/f_s$ 的两倍。

### 第 5 步 — $k=0.5$ 时的带宽

NTF 幅值加倍意味着在相同 $f_B$ 下带内噪声功率变为四倍。由于 $n_0^2\propto f_B^3$，带宽必须缩小 $4^{1/3}=1.587$ 倍：

$$
f_B\approx\frac{33.1\ \text{kHz}}{1.587}=20.8\ \text{kHz},\qquad M\approx240 .
$$

对精确的 $|\mathrm{NTF}|^2$ 数值积分得 33.09 kHz 和 20.85 kHz，验证了上述两个近似。把积分器增益降到 $k=0.5$ 使环路在低频处的作用减弱，噪声整形变差，带宽损失约 37%。
