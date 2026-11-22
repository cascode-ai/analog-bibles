# 详细步骤 - G113

先求电流镜设定的偏置电流，再把输出摆幅的两个削波（clipping）限制写成 $R_L$ 的函数，选择 $R_L$ 使正弦输出功率最大。A 类（class A）级的电源电流固定，因此输出功率最大也就是效率最高。

### 第 1 步 — 由电流镜求静态电流

$R_1=R_2=0$ 时，二极管连接的 $Q_3$ 把 $Q_2$ 的基极固定在 $-V_{CC}+V_{BE(\text{on})}$。$R_3$ 另一端接地，流过它的电流为

$$
I_R=\frac{0-(-V_{CC}+V_{BE(\text{on})})}{R_3}=\frac{15\ \mathrm V-0.7\ \mathrm V}{5\ \mathrm{k\Omega}}=2.86\ \mathrm{mA}.
$$

$Q_2$ 与 $Q_3$ 面积相等、$V_{BE}$ 相等，且忽略基极电流，所以 $Q_2$ 从输出节点吸收 $I_Q=I_R=2.86$ mA。

### 第 2 步 — 摆幅限制与 $R_L$ 的关系

静态时 $V_o=0$，因此 $I_{c1}=I_Q+V_o/R_L$，且只要 $Q_2$ 未饱和就有 $I_{c2}=I_Q$。

- **正峰：** $V_o=V_{CC}-V_{CE(\text{sat})}=14.8$ V 时 $Q_1$ 饱和，$Q_2$ 仍处于放大区。
- **负峰：** 有两个限制。$V_o=-V_{CC}+V_{CE(\text{sat})}=-14.8$ V 时 $Q_2$ 饱和；另外，当负载电流 $-V_o/R_L$ 等于全部吸收电流 $I_Q$，即 $I_{c1}=0$ 时，$Q_1$ 截止，对应 $V_o=-I_QR_L$。

幅度为 $\hat V$ 的对称正弦波必须同时满足这些限制，故

$$
\hat V_{\max}=\min\left(V_{CC}-V_{CE(\text{sat})},\ I_QR_L\right),\qquad P_L=\frac{\hat V_{\max}^2}{2R_L}.
$$

### 第 3 步 — 最优负载

- 当 $I_QR_L\ge V_{CC}-V_{CE(\text{sat})}$ 时，$\hat V_{\max}=14.8$ V 固定，$P_L=(14.8\ \mathrm V)^2/(2R_L)$ 随 $R_L$ 减小而增大。
- 当 $I_QR_L<V_{CC}-V_{CE(\text{sat})}$ 时，$\hat V_{\max}=I_QR_L$，$P_L=\tfrac12I_Q^2R_L$ 随 $R_L$ 减小而减小。

最大值位于分界点，此时两个削波限制同时达到：

$$
R_L=\frac{V_{CC}-V_{CE(\text{sat})}}{I_Q}=\frac{14.8\ \mathrm V}{2.86\ \mathrm{mA}}=5.17\ \mathrm{k\Omega}\approx5.2\ \mathrm{k\Omega}.
$$

### 第 4 步 — 输出功率与效率

在此负载下，

$$
P_L=\frac{\hat V^2}{2R_L}=\tfrac12\left(V_{CC}-V_{CE(\text{sat})}\right)I_Q=\tfrac12(14.8\ \mathrm V)(2.86\ \mathrm{mA})=21.2\ \mathrm{mW}.
$$

正弦信号下 $I_{c1}$ 的平均值为 $I_Q$，$Q_2$ 吸收恒定的 $I_Q$，因此输出级从电源取得 $P_{\text{supply}}=V_{CC}I_Q+V_{CC}I_Q=2V_{CC}I_Q=85.8$ mW，与信号无关。该值固定，所以使 $P_L$ 最大即使效率最大：

$$
\eta=\frac{P_L}{2V_{CC}I_Q}=\frac{21.2\ \mathrm{mW}}{85.8\ \mathrm{mW}}=24.7\%.
$$

这里只计入输出级；偏置支路 $R_3$–$Q_3$ 另外消耗 $V_{CC}I_R=42.9$ mW。该结果低于 A 类理想极限 25%，差值仅来自 $V_{CE(\text{sat})}$ 的损失。
