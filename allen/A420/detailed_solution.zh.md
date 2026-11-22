# 详细步骤 - A420

理想 DAC 唯一的误差是量化误差，可建模为在一个 LSB 内均匀分布的噪声。最大 SNR 等于信号有效值除以该噪声的有效值；由于正弦信号只用到满量程的一部分，SNR 低于教材中的满量程数值。

### 第 1 步 — 量化噪声（quantization noise）

$$
\mathrm{LSB}=\frac{V_{REF}}{2^N}=\frac{5\ \mathrm V}{2^{10}}=4.883\ \mathrm{mV}.
$$

在 $-\mathrm{LSB}/2$ 到 $+\mathrm{LSB}/2$ 之间均匀分布的量化误差，其有效值为

$$
v_{n(rms)}=\frac{\mathrm{LSB}}{\sqrt{12}}=\frac{4.883\ \mathrm{mV}}{3.464}=1.410\ \mathrm{mV}.
$$

### 第 2 步 — 信号有效值

1 V 峰峰值的正弦波幅度为 0.5 V：

$$
v_{s(rms)}=\frac{0.5\ \mathrm V}{\sqrt2}=0.354\ \mathrm V .
$$

### 第 3 步 — 最大 SNR

$$
\mathrm{SNR}=20\log_{10}\frac{0.354\ \mathrm V}{1.410\ \mathrm{mV}}=20\log_{10}(251)=48.0\ \mathrm{dB}.
$$

### 第 4 步 — 用满量程公式验证

满量程正弦波（5 V 峰峰值）的 SNR 为 $6.02N+1.76=6.02(10)+1.76=61.96$ dB。实际信号小五倍，损失 $20\log_{10}5=13.98$ dB：

$$
\mathrm{SNR}=61.96-13.98=47.98\ \mathrm{dB}\approx48.0\ \mathrm{dB}.
$$

只用到五分之一的量程，相当于浪费了约 $\log_25=2.3$ 位分辨率。
