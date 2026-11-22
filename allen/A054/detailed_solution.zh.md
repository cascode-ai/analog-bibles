# 详细步骤 - A054

求出相对于源极的各端电压，计入体效应求阈值，判断工作区，再按该工作区分配栅电容各分量。

### 第 1 步 — 计入体效应的阈值电压

$V_S=0.5$ V、$V_B=0$，源-衬底电压 $V_{SB}=0.5$ V，阈值因而高于 $V_{T0}$：

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)
=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{1.2\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.804\ \mathrm V .
$$

### 第 2 步 — 工作区

栅源和漏源电压为

$$
V_{GS}=2.4\ \mathrm V-0.5\ \mathrm V=1.9\ \mathrm V,\qquad V_{DS}=2\ \mathrm V-0.5\ \mathrm V=1.5\ \mathrm V,
$$

因此 $V_{GS}>V_T$（沟道反型），且

$$
V_{GS}-V_T=1.9\ \mathrm V-0.804\ \mathrm V=1.096\ \mathrm V<V_{DS}=1.5\ \mathrm V .
$$

晶体管工作在饱和区。该结论与体效应无关：即使取 $V_T=V_{T0}$，$V_{GS}-V_T=1.2$ V 仍小于 1.5 V。（$K'$ 只决定电流，不影响电容。）

### 第 3 步 — 饱和区的电容

各分量为沟道区氧化层电容和交叠电容：

$$
C_2=C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(5\ \mu\mathrm m)(1\ \mu\mathrm m)=12.35\ \mathrm{fF},\quad
\mathrm{CGSO}\cdot W=\mathrm{CGDO}\cdot W=1.10\ \mathrm{fF},\quad
\mathrm{CGBO}\cdot L=0.70\ \mathrm{fF}.
$$

饱和时反型层屏蔽了衬底；沟道在漏端夹断，归属于源极，源极分得 $C_2$ 的 $\tfrac23$：

$$
\begin{aligned}
C_{GS}&=\mathrm{CGSO}\cdot W+\tfrac23C_2=1.10+8.23=9.33\ \mathrm{fF},\\
C_{GD}&=\mathrm{CGDO}\cdot W=1.10\ \mathrm{fF},\\
C_{GB}&=\mathrm{CGBO}\cdot L=0.70\ \mathrm{fF}.
\end{aligned}
$$
