# 详细步骤 - G117

驱动级看到的是 $Q_1$ 的基极：其信号电压基本等于输出电压（跟随器增益接近 1），信号电流等于负载电流除以 $\beta_F$。对每种负载求最大不削波幅度、相应的基极信号电流、驱动功率，以及负载功率与驱动功率之比。

### 第 1 步 — 偏置电流与最大幅度

$R_1=R_2=0$ 且忽略电流镜的基极电流时，$I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA。正向摆幅受 $Q_1$ 在 $V_{CC}-V_{CE(\text{sat})}=14.8$ V 处饱和的限制，负向摆幅受 $Q_1$ 在 $-I_QR_L$ 处截止或 $Q_2$ 在 $-14.8$ V 处饱和的限制，故 $\hat V_o=\min(14.8\ \mathrm V,\ I_QR_L)$：

| $R_L$ | $\hat V_o$ | $P_L=\hat V_o^2/(2R_L)$ |
|---|---|---|
| 2 kΩ | 5.72 V | 8.18 mW |
| 10 kΩ | 14.8 V | 10.95 mW |

### 第 2 步 — $Q_1$ 基极的信号电流与电压

$Q_2$ 的电流恒为 $I_Q$，因此 $Q_1$ 发射极电流的信号分量就是负载电流 $i_o=v_o/R_L$。由 $I_c=\beta_FI_b$，基极信号电流的幅度为

$$
\hat I_b=\frac{\hat V_o}{\beta_FR_L}.
$$

射极跟随器的电压增益接近 1（其 $1/g_m$ 约 9 Ω，相对 $R_L$ 可忽略），所以基极信号电压幅度 $\hat V_i\approx\hat V_o$。基极电压与基极信号电流同相，驱动级提供的平均功率为

$$
P_i=\tfrac12\hat V_i\hat I_b\approx\frac{\hat V_o^2}{2\beta_FR_L}=\frac{P_L}{\beta_F}.
$$

### 第 3 步 — 各负载下的驱动功率

$R_L=2\ \mathrm{k\Omega}$ 时：

$$
\hat I_b=\frac{5.72\ \mathrm V}{(100)(2\ \mathrm{k\Omega})}=28.6\ \mu\mathrm A,\qquad
P_i=\tfrac12(5.72\ \mathrm V)(28.6\ \mu\mathrm A)=81.8\ \mu\mathrm W.
$$

$R_L=10\ \mathrm{k\Omega}$ 时：

$$
\hat I_b=\frac{14.8\ \mathrm V}{(100)(10\ \mathrm{k\Omega})}=14.8\ \mu\mathrm A,\qquad
P_i=\tfrac12(14.8\ \mathrm V)(14.8\ \mu\mathrm A)=109.5\ \mu\mathrm W.
$$

### 第 4 步 — 功率增益

$$
G_P=\frac{P_L}{P_i}=\frac{8.18\ \mathrm{mW}}{81.8\ \mu\mathrm W}=\frac{10.95\ \mathrm{mW}}{109.5\ \mu\mathrm W}=\beta_F=100\quad(20\ \mathrm{dB})
$$

两种负载下相同。电压增益约为 1，因此功率增益全部来自电流增益。若用发射极电流关系 $I_e=(\beta_F+1)I_b$ 联系负载电流，则得 101 而非 100。

若对 $Q_2$ 和 $Q_3$ 也取 $\beta=100$，二者的基极电流使电流镜输出降为 $I_Q=2.86\ \mathrm{mA}/1.02=2.80$ mA。$R_L=2\ \mathrm{k\Omega}$ 时 $\hat V_o$ 降为 5.61 V，$P_i$ 约为 78 µW；$10\ \mathrm{k\Omega}$ 时幅度仍为 14.8 V，功率增益不变。
