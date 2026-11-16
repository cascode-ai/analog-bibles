# 详细步骤 - R719

**思路。** 用理想地平面上方长导线的镜像法求出两根键合线之间的互感 $M$，然后对导线 1 中 100 MHz 的正弦电流应用 $v_2 = M\,di_1/dt$。

### 第 1 步 — 互感（镜像法）

取地平面为 $y = 0$，导线 1 位于 $(0, h)$，导线 2 位于 $(d, h)$（$h = 5$ mm，$d = 1$ mm），导线 1 中的电流 $I$ 在地平面上方产生的场，等于导线 1 的场加上位于 $(0, -h)$、电流为 $-I$ 的**镜像**的场。对每根线电流有 $A_z = -(\mu_0I/2\pi)\ln r + \text{const}$，并且在地平面上 $A_z = 0$（地平面上各点到导线 1 与到其镜像的距离相等），因此交链导线 2 回路的单位长度磁通为

$$\Phi' = \frac{\mu_0I}{2\pi}\ln\frac{r'}{r}, \qquad r = d,\quad r' = \sqrt{d^2 + (2h)^2},$$

其中 $r$ 是导线 2 到导线 1 的距离，$r'$ 是到镜像的距离。因此

$$M' = \frac{\Phi'}{I} = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + 4h^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right].$$

取 $\mu_0/4\pi = 0.1$ nH/mm，$2h/d = 10$：

$$M' = (0.1\ \mathrm{nH/mm})\ln(1 + 100) = (0.1\ \mathrm{nH/mm})(4.615) = 0.4615\ \mathrm{nH/mm},$$

忽略端部效应，在 $\ell = 4$ mm 上：

$$M = M'\ell = (0.4615\ \mathrm{nH/mm})(4\ \mathrm{mm}) = 1.85\ \mathrm{nH}.$$

### 第 2 步 — 感应电压

设 $i_1(t) = I_p\sin\omega t$，$I_p = 1$ mA，$\omega = 2\pi f = 2\pi(100\ \mathrm{MHz})$：

$$v_2(t) = M\frac{di_1}{dt} = \omega MI_p\cos\omega t ,$$

这是一个同频率的正弦波，与电流相差 90°（在电流过零、即变化最快时达到峰值）。

### 第 3 步 — 数值计算

$$\omega = 2\pi\times10^{8}\ \mathrm{s^{-1}} = 6.283\times10^{8}\ \mathrm{rad/s},$$

$$|v_2|_{peak} = \omega MI_p = (6.283\times10^{8}\ \mathrm{s^{-1}})(1.85\times10^{-9}\ \mathrm{H})(1\times10^{-3}\ \mathrm{A}).$$

互感抗为 $\omega M = (6.283\times10^{8})(1.846\times10^{-9}) = 1.160\ \Omega$，因此

$$|v_2|_{peak} = (1.160\ \Omega)(1\ \mathrm{mA}) = 1.16\ \mathrm{mV},$$

即**峰峰值 2.32 mV**。

**补充说明。** 100 MHz 下仅仅 1 mA 的电流，就会在相邻导线中感应出超过一毫伏的电压。数字电路和时钟电流通常大得多，边沿也快得多，因此相邻键合线之间的串扰（crosstalk）很容易达到几十毫伏；所以敏感的模拟引脚要与噪声大的引脚隔开，或在其两侧布置地线。

### 结果

$$M = 0.1\ln\left[1 + \left(\tfrac{2h}{d}\right)^2\right]\ \mathrm{nH/mm}\times4\ \mathrm{mm} \approx 1.85\ \mathrm{nH},$$

$$v_2(t) = \omega MI_p\cos\omega t, \qquad |v_2|_{peak} = 2\pi(10^8)(1.85\times10^{-9})(10^{-3}) \approx 1.16\ \mathrm{mV}\ (2.3\ \mathrm{mV\ pp}),$$

这是一个与电流正交的 100 MHz 正弦波。

**常见错误。** 用 $f$ 代替 $\omega = 2\pi f$，得到 $fMI_p \approx 0.18$ mV，约小了六倍。

**常见错误。** 计算 $M\cdot I$（这是磁通，单位为韦伯）并把它称为电压。感应电压是 $M\,di/dt$。

**常见错误。** 使用约 1 nH/mm 的导线自感（self-inductance）代替互感，或者忽略地平面；$M$ 通过镜像电流同时取决于 $d$ 和 $h$。
