# 详细步骤 - G137

三个限制相互作用：每个器件 200 mW 的峰值功耗给出最小 $R_L$；负向摆幅因饱和被限制在 13.4 V；正向摆幅受 $Q_{14}$ 可获得的 0.2 mA 基极驱动限制，它决定了 $Q_{14}$ 的最大输出电流。求出摆幅随 $R_L$ 的变化，在功耗约束下使 $P_L=\hat V_o^2/(2R_L)$ 最大。

### 第 1 步 — 摆幅极限与 $R_L$ 的关系

- **负向：** $Q_{17}$ 饱和，pnp 跟随器 $Q_{23}$、$Q_{20}$ 各加一个 $V_{BE(\text{on})}$：$V_o^-=-15+0.2+0.7+0.7=-13.4$ V，与负载无关。
- **正向，电压余量：** $Q_{13A}$ 饱和时 $V_o^+=15-0.2-0.7=14.1$ V。
- **正向，驱动：** 到达 $Q_{14}$ 基极的电流最多为 $Q_{13A}$ 的 0.2 mA，因此负载电流不能超过

$$
I_{o,\max}=(\beta_F+1)(0.2\ \mathrm{mA})=40.2\ \mathrm{mA},\qquad V_o^+\le(40.2\ \mathrm{mA})R_L .
$$

所以对称正弦波的幅度为 $\hat V_o=\min\left(13.4\ \mathrm V,\ (40.2\ \mathrm{mA})R_L\right)$（14.1 V 的电压余量极限高于 13.4 V，不起作用）。

### 第 2 步 — 功耗约束

静态电流可忽略时，导通的输出器件功耗为 $V_o(V_{CC}-V_o)/R_L$，在 $|V_o|=V_{CC}/2=7.5$ V 处达到峰值 $V_{CC}^2/(4R_L)$。只要摆幅达到 7.5 V，

$$
\frac{V_{CC}^2}{4R_L}\le200\ \mathrm{mW}\ \Rightarrow\ R_L\ge\frac{(15\ \mathrm V)^2}{0.8\ \mathrm W}=281\ \Omega.
$$

（更小的负载只在峰值低于 7.5 V 时允许。此时峰值功耗 $\hat V_o(V_{CC}-\hat V_o)/R_L\le200$ mW，把输出限制在 $P_L\le(200\ \mathrm{mW})\,\hat V_o/\left(2(V_{CC}-\hat V_o)\right)<100$ mW。）

### 第 3 步 — 输出功率随 $R_L$ 的变化

- $R_L=281\ \Omega$ 时，驱动极限使正峰只有 $(40.2\ \mathrm{mA})(281\ \Omega)=11.3$ V，于是 $\hat V_o=11.3$ V，$P_L=(11.3\ \mathrm V)^2/(2\cdot281\ \Omega)=227$ mW。
- 当 $281\ \Omega\le R_L\le13.4\ \mathrm V/40.2\ \mathrm{mA}=333\ \Omega$ 时，$\hat V_o=(40.2\ \mathrm{mA})R_L$，

$$
P_L=\frac{\left[(40.2\ \mathrm{mA})R_L\right]^2}{2R_L}=\tfrac12(40.2\ \mathrm{mA})^2R_L,
$$

随 $R_L$ 增大而增大。
- 当 $R_L>333\ \Omega$ 时，$\hat V_o=13.4$ V 固定，$P_L=(13.4\ \mathrm V)^2/(2R_L)$ 随之减小。

最大值位于电流极限与负向电压极限重合处：

$$
R_L=\frac{13.4\ \mathrm V}{40.2\ \mathrm{mA}}=333\ \Omega,\qquad P_L=\frac{(13.4\ \mathrm V)^2}{2(333\ \Omega)}=269\ \mathrm{mW}.
$$

此时器件峰值功耗为 $V_{CC}^2/(4R_L)=169$ mW，在 200 mW 限制之内。若改用 $I_{o,\max}=\beta_F(0.2\ \mathrm{mA})=40$ mA，则得 335 Ω 和 268 mW。

### 第 4 步 — 效率

$$
\eta=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{13.4}{15}=70.2\%,
$$

输出器件的电源功率为 $2V_{CC}\hat V_o/(\pi R_L)=384$ mW。

最佳选择是 **$R_L\approx333\ \Omega$**，得到 **$P_L\approx269$ mW**，**$\eta\approx70\%$**。决定最优点的是 $Q_{14}$ 的基极驱动极限，而不是功耗限制。
