# 详细步骤 - G129

每个晶体管作为射极跟随器导通半个周期，因此输出可以摆到距任一电源 $V_{CE(\text{sat})}$ 以内。求出最大的不削波正弦波、它从电源吸取的平均电流，以及器件负载线上功耗达到峰值的位置。

### 第 1 步 — 最大不削波输出功率

忽略交越失真时 $V_o$ 跟随输入；$Q_1$ 提供正半周，在 $V_o=V_{CC}-V_{CE(\text{sat})}$ 处饱和，$Q_2$ 提供负半周，限制对称。因此

$$
\hat V_{om}=V_{CC}-V_{CE(\text{sat})}=12\ \mathrm V-0.2\ \mathrm V=11.8\ \mathrm V,
$$
$$
P_{L,\max}=\frac{\hat V_{om}^2}{2R_L}=\frac{(11.8\ \mathrm V)^2}{2(1\ \mathrm{k\Omega})}=69.6\ \mathrm{mW}.
$$

### 第 2 步 — 电源功率与效率

每个电源只在其器件导通的半周内供电，电流为峰值 $\hat V_o/R_L$ 的半正弦，在整个周期内的平均值为 $\hat V_o/(\pi R_L)$。两个电源合计

$$
P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L}=\frac{2(12\ \mathrm V)(11.8\ \mathrm V)}{\pi(1\ \mathrm{k\Omega})}=90.1\ \mathrm{mW}.
$$

因此

$$
\eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{11.8}{12}=\frac{69.6\ \mathrm{mW}}{90.1\ \mathrm{mW}}=77.2\%,
$$

由于饱和压降，略低于 B 类理想极限 $\pi/4=78.5\%$。

### 第 3 步 — 最大瞬时功耗

$Q_1$ 导通时 $V_{ce1}=V_{CC}-V_o$、$I_{c1}=V_o/R_L$，其负载线为 $V_{ce1}=V_{CC}-I_{c1}R_L$，截距为 $V_{CC}$ 和 $V_{CC}/R_L$。功耗

$$
P_{c1}=I_{c1}\left(V_{CC}-I_{c1}R_L\right)
$$

在负载线中点取最大值，即 $I_{c1}=V_{CC}/(2R_L)=6$ mA、$V_{ce1}=V_{CC}/2=6$ V，对应 $V_o=6$ V。满摆幅输出可达 11.8 V，因此每个周期都会经过该点：

$$
P_{c,\max}=\frac{V_{CC}^2}{4R_L}=\frac{(12\ \mathrm V)^2}{4(1\ \mathrm{k\Omega})}=36\ \mathrm{mW}.
$$

由对称性，$Q_2$ 亦然。最大功率为 **69.6 mW**，效率为 **77.2%**，每个器件的最大瞬时功耗为 **36 mW**，出现在电源电压的一半处，而不是输出峰值处。
