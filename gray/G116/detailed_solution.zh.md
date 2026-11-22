# 详细步骤 - G116

在正弦输出下把 $Q_1$ 的瞬时功耗写成 $I_{c1}V_{ce1}$，在一个周期内求平均，并由削波（clipping）限制确定每种负载下的幅度。

### 第 1 步 — 偏置电流与最大幅度

$R_1=R_2=0$ 时，$I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA 被镜像到 $Q_2$。输出最高可摆到 $V_{CC}-V_{CE(\text{sat})}=14.8$ V（$Q_1$ 饱和），最低摆到 $-14.8$ V（$Q_2$ 饱和）与 $-I_QR_L$（负载取走全部 $I_Q$ 时 $Q_1$ 截止）二者中较高者。因此对称正弦波的幅度为

$$
\hat V_o=\min\left(V_{CC}-V_{CE(\text{sat})},\ I_QR_L\right).
$$

| $R_L$ | $I_QR_L$ | $\hat V_o$ |
|---|---|---|
| 2 kΩ | 5.72 V | 5.72 V（由 $Q_1$ 截止决定） |
| 10 kΩ | 28.6 V | 14.8 V（由饱和决定） |

### 第 2 步 — $Q_1$ 的平均功耗

取 $v_o=\hat V_o\sin\omega t$，对输出节点列 KCL 得 $i_{c1}=I_Q+v_o/R_L$，且 $v_{ce1}=V_{CC}-v_o$。因此

$$
p_{c1}=\left(I_Q+\frac{v_o}{R_L}\right)\left(V_{CC}-v_o\right)=V_{CC}I_Q+\left(\frac{V_{CC}}{R_L}-I_Q\right)v_o-\frac{v_o^2}{R_L}.
$$

一个周期内 $\overline{v_o}=0$、$\overline{v_o^2}=\hat V_o^2/2$，故

$$
\bar P_{c1}=V_{CC}I_Q-\frac{\hat V_o^2}{2R_L}=V_{CC}I_Q-P_L .
$$

静态功耗为 $V_{CC}I_Q=(15\ \mathrm V)(2.86\ \mathrm{mA})=42.9$ mW；由于 $Q_1$ 的平均电源电流保持为 $I_Q$，送到负载的信号功率正是从这部分功耗中取出的。

### 第 3 步 — 数值结果

$R_L=2\ \mathrm{k\Omega}$ 时：

$$
P_L=\frac{(5.72\ \mathrm V)^2}{2(2\ \mathrm{k\Omega})}=8.18\ \mathrm{mW},\qquad \bar P_{c1}=42.9\ \mathrm{mW}-8.18\ \mathrm{mW}=34.7\ \mathrm{mW}.
$$

$R_L=10\ \mathrm{k\Omega}$ 时：

$$
P_L=\frac{(14.8\ \mathrm V)^2}{2(10\ \mathrm{k\Omega})}=10.95\ \mathrm{mW},\qquad \bar P_{c1}=42.9\ \mathrm{mW}-10.95\ \mathrm{mW}=31.9\ \mathrm{mW}.
$$

$Q_1$ 的平均功耗为：**$R_L=2\ \mathrm{k\Omega}$ 时 34.7 mW**，**$R_L=10\ \mathrm{k\Omega}$ 时 31.9 mW**，均低于静态值：在 A 类（class A）级中，晶体管在满信号时温度最低。
