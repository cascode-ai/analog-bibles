# 详细步骤 - G107

输入失调电压是使输出达到平衡值 $V_{SUP}-|V_{BE(\text{on})}|$ 所需的差模输入 $V_{BE1}-V_{BE2}$。在该点两个负载晶体管的 $V_{CE}$ 相等，所以电流镜关系只涉及 pnp 的 $I_S$ 之比。先求负载强加给 $Q_1$、$Q_2$ 的集电极电流，再把它们之比与 npn 的 $I_S$ 之比一起换算成 $V_{BE1}-V_{BE2}$。共有三项贡献：pnp 失配、npn 失配，以及 pnp 电流镜的系统性基极电流损失。

### 第 1 步 — 由负载决定的电流

输出位于 $V_{SUP}-|V_{BE(\text{on})}|$ 时 $V_{CE4}=V_{CE3}$，所以厄利效应不起作用。$Q_3$ 与 $Q_4$ 的 $V_{EB}$ 相同，所以

$$
I_{C4}=I_{C3}\frac{I_{S4}}{I_{S3}} .
$$

在 $Q_1$ 的集电极（$Q_3$ 的二极管节点）列 KCL：$Q_1$ 提供 $Q_3$ 的集电极电流以及两个 pnp 的基极电流，

$$
I_{C1}=I_{C3}+\frac{I_{C3}+I_{C4}}{\beta_F}\approx I_{C3}\left(1+\frac2{\beta_F}\right),\qquad I_{C2}=I_{C4}
$$

（忽略 npn 基极电流，输出端无负载电流）。

### 第 2 步 — 失调电压

$$
V_{OS}=V_{BE1}-V_{BE2}=V_T\ln\left(\frac{I_{C1}}{I_{S1}}\cdot\frac{I_{S2}}{I_{C2}}\right)
=V_T\ln\left[\frac{I_{S3}}{I_{S4}}\cdot\frac{I_{S2}}{I_{S1}}\left(1+\frac2{\beta_F}\right)\right].
$$

对小失配，记 $\Delta I_{SP}/I_{SP}=(I_{S3}-I_{S4})/I_S$，$\Delta I_{SN}/I_{SN}=(I_{S1}-I_{S2})/I_S$，

$$
V_{OS}\approx V_T\left(\frac{\Delta I_{SP}}{I_{SP}}-\frac{\Delta I_{SN}}{I_{SN}}+\frac2{\beta_F}\right).
$$

前两项是随机的，符号可正可负。最后一项是系统性的：电流镜的基极电流总是使 $I_{C1}$ 大于 $I_{C2}$。

### 第 3 步 — 最坏情况

随机项取最坏情况的幅度（各 5 %），且符号与系统项相加：

$$
|V_{OS}|=(26\ \mathrm{mV})\left(0.05+0.05+\frac2{15}\right)=(26\ \mathrm{mV})(0.233)=6.1\ \mathrm{mV}.
$$

保留精确的对数，取 $I_{S4}=0.95I_{S3}$、$I_{S2}=1.05I_{S1}$，基极电流为 $(I_{C3}+0.95I_{C3})/\beta_F$，得

$$
|V_{OS}|=(26\ \mathrm{mV})\ln\frac{(1.05)(1+1.95/15)}{0.95}=(26\ \mathrm{mV})\ln(1.249)=5.8\ \mathrm{mV}.
$$

最坏情况失调约为 6 mV。其中一半以上来自横向 pnp 晶体管（lateral pnp transistor）较低的 $\beta_F$，这正是电流镜中常加入射极跟随器缓冲（beta helper）的原因。
