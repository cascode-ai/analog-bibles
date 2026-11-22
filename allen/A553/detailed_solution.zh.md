# 详细步骤 - A553

用单位圆上的 $|NTF_Q|^2$ 对白色量化噪声谱密度进行整形，在信号频带内积分，再与 16 位噪声功率比较。由于信号频带只占 $f_s$ 的极小部分，可以采用小角度展开。

### 第 1 步 — NTF 的幅值

在单位圆上 $z=e^{j\omega T}$，$\omega T=2\pi f/f_s$：

$$
|1-e^{-j\omega T}|=\left|e^{-j\omega T/2}\left(e^{j\omega T/2}-e^{-j\omega T/2}\right)\right|=2\sin\frac{\pi f}{f_s},
\qquad
|NTF_Q|^2=16\sin^4\frac{\pi f}{f_s}.
$$

### 第 2 步 — 带内噪声功率

量化误差功率 $\Delta^2/12$ 均匀分布在 $0$ 到 $f_s/2$ 上，单边谱密度为 $(\Delta^2/12)(2/f_s)$。经整形和理想抽取滤波器后，

$$
n_0^2=\frac{\Delta^2}{12}\,\frac{2}{f_s}\int_0^{f_B}16\sin^4\frac{\pi f}{f_s}\,df
\approx\frac{\Delta^2}{12}\,\frac{32}{f_s}\,\frac{\pi^4}{f_s^4}\,\frac{f_B^5}{5}
=\frac{\Delta^2}{12}\,\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5 ,
$$

其中用到 $\sin x\approx x$ 和 $32=2^5$。这就是熟知的二阶结果 $\frac{\Delta^2}{12}\frac{\pi^{2L}}{2L+1}M^{-(2L+1)}$，其中 $L=2$，$M=f_s/(2f_B)$。

### 第 3 步 — 代入 16 位判据

满量程为 $\Delta$，要求 $n_0^2\le\Delta^2/(12\cdot2^{32})$：

$$
\frac{\pi^4}{5}\left(\frac{2f_B}{f_s}\right)^5\le2^{-32}
\;\Rightarrow\;
\left(\frac{2f_B}{f_s}\right)^5\le\frac{5}{\pi^4\,2^{32}}=1.195\times10^{-11}.
$$

### 第 4 步 — 最大带宽

开五次方得

$$
\frac{2f_B}{f_s}\le6.539\times10^{-3}\quad(M\ge152.9),\qquad
f_B\le\frac{(6.539\times10^{-3})(10\ \mathrm{MHz})}{2}=32.7\ \mathrm{kHz}.
$$

过采样率为 $M=f_s/(2f_B)\approx153$，因此频带边缘是 $f_s/(2M)$，而不是 $f_s/M$。对精确的 $\sin^4$ 形式做数值积分同样得到 32.7 kHz，因为 $\pi f_B/f_s\approx0.010$ rad。
