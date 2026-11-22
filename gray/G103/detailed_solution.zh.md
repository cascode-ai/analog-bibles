# 详细步骤 - G103

二极管连接的晶体管处于饱和区，其栅源电压等于 $V_t$ 加上流过 $I$ 所需的过驱动电压。两部分的漂移方向相反：$V_t$ 随温度降低；过驱动电压则随温度升高，因为迁移率下降，同样的电流需要更大的过驱动电压。把过驱动电压的温度系数用 $V_{ov}$ 本身表示，令两项漂移之和为零，再选取 $W/L$ 得到该过驱动电压。

### 第 1 步 — 过驱动电压的温度依赖

栅极接漏极，$V_{DS}=V_{GS}>V_{GS}-V_t$，所以器件处于饱和区。由平方律，

$$
I=\frac{k'}2\frac WLV_{ov}^2\quad\Rightarrow\quad V_{ov}=\sqrt{\frac{2I}{k'(W/L)}},\qquad V_{GS}=V_t+V_{ov}.
$$

$I$ 和 $W/L$ 固定，且 $k'\propto\mu\propto T^{-n}$，所以 $V_{ov}\propto(k')^{-1/2}\propto T^{n/2}$，

$$
\frac{dV_{ov}}{dT}=\frac n2\frac{V_{ov}}T .
$$

### 第 2 步 — 零温度系数条件

$$
\frac{dV_{GS}}{dT}=\frac{dV_t}{dT}+\frac n2\frac{V_{ov}}T=0
\quad\Rightarrow\quad
V_{ov}=-\frac{2T}n\frac{dV_t}{dT}=\frac{2(298\ \mathrm K)(2\ \mathrm{mV/K})}{1.5}=0.795\ \mathrm V .
$$

过驱动电压越大，其正漂移越大，所以只有一个值能平衡阈值电压 $-2$ mV/°C 的漂移。

### 第 3 步 — 所需的 $W/L$

$$
\frac WL=\frac{2I}{k'V_{ov}^2}=\frac{2(200\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.795\ \mathrm V)^2}=\frac{400\ \mu\mathrm A}{122.5\ \mu\mathrm A}=3.26\approx3.3 .
$$

所得栅源电压为 $V_{GS}=0.6\ \mathrm V+0.795\ \mathrm V=1.40$ V。若改用 $T=300$ K，则 $W/L=3.22$。
