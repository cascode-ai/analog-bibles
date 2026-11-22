# 详细步骤 - G099

把 $V_{OUT}$ 写成一个发射极–基极电压加上一个 PTAT 项，再看 $I_S$ 的共同变化影响哪些部分。PTAT 项只取决于饱和电流之比，因而不变。每个 $V_{EB}$ 在任何温度下都平移相同的量，而这一平移本身与 $T$ 成正比。由于标称设计的斜率为零，这一平移的导数就是新的温度系数。

### 第 1 步 — 基准的输出电压

$V_{OS}=0$ 且运放理想时，运放两输入端电压相同。$R_1$ 和 $R_2$ 的上端都接 $V_{OUT}$，所以二者上的电压相等：$I_1R_1=I_2R_2$，$I_1/I_2=R_2/R_1$。$Q_1$ 一侧的输入端电位为 $V_{EB1}$，$Q_2$ 一侧为 $V_{EB2}+I_2R_3$。令二者相等，

$$
I_2R_3=V_{EB1}-V_{EB2}=V_T\ln\left(\frac{I_1}{I_2}\cdot\frac{I_{S2}}{I_{S1}}\right)=\Delta V_{EB},
$$

$$
V_{OUT}=V_{EB2}+I_2(R_3+R_2)=V_{EB2}+\left(1+\frac{R_2}{R_3}\right)\Delta V_{EB}.
$$

第二项是 PTAT 的，因为 $\Delta V_{EB}$ 只取决于 $V_T$ 和固定的比值。

### 第 2 步 — 两管 $I_S$ 都加倍的影响

$I_{S2}/I_{S1}$ 不变，所以在任何温度下 $\Delta V_{EB}$、$I_2=\Delta V_{EB}/R_3$ 和 $I_1$ 都不变。电流相同时，$V_{EB2}=V_T\ln(I_2/I_{S2})$ 下降

$$
V_T\ln\frac{2I_S}{I_S}=V_T\ln2=(25.7\ \mathrm{mV})(0.693)=17.8\ \mathrm{mV}\quad\text{at }298\ \mathrm K .
$$

因此在任何温度下

$$
V_{OUT}(T)=V_{OUT,\text{nom}}(T)-\frac{kT}q\ln2 .
$$

### 第 3 步 — 新的温度系数

标称设计在 25 °C 时 $dV_{OUT,\text{nom}}/dT=0$，所以只有这一平移有贡献：

$$
\frac{dV_{OUT}}{dT}=-\frac kq\ln2=-(86.2\ \mu\mathrm{V/K})(0.693)=-59.7\ \mu\mathrm{V/°C}\approx-0.06\ \mathrm{mV/°C}.
$$

对约 1.26 V 的带隙输出，这约为 $-47$ ppm/°C。结果与 $\gamma$、$V_{G0}$ 及电阻值都无关。等价地，输出现在比零温度系数值低 17.8 mV；对带隙基准，$dV_{OUT}/dT\approx\Delta V_{OUT}/T=-17.8\ \mathrm{mV}/298\ \mathrm K$，数值相同。这正是带隙基准常被修调（trim）到标称输出电压的原因：恢复电压的同时也恢复了零温度系数。
