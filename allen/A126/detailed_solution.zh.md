# 详细步骤 - A126

M2 镜像二极管连接的 M3 中的 100 µA 参考电流，作为 M1 的电流源负载。输出节点电阻很高，为 $1/(g_{ds1}+g_{ds2})$，并带有 1 pF 负载；而电流镜节点（M2、M3 的栅极）的电阻很低，为 $\approx1/g_{m3}$。因此输出节点决定主极点。求出其电导，把各电容归到相应节点，再确认电流镜节点的极点远在高频。

### 第 1 步 — 输出电导与增益

M1 和 M2 都在饱和区流过 100 µA。由 $g_{ds}=\lambda I_D$，

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=9\ \mu\mathrm S,\qquad R_{out}=111\ \mathrm{k\Omega}.
$$

作为参考，$g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu\mathrm S$，所以低频增益为 $-469/9=-52$ V/V。

### 第 2 步 — 各节点的电容

输入由理想源驱动，$V_{DD}$ 和地都是交流地。

- 输出节点：$C_{gdn}$（M1 漏极到其栅极，即理想驱动的输入端）、$C_{gdp}$（M2 漏极到其栅极，即低阻的电流镜节点，近似交流地）、$C_{bdn}$、$C_{bdp}$ 和 $C_L$：

$$
C_{out}=C_{gdn}+C_{gdp}+C_{bdn}+C_{bdp}+C_L=5+5+10+10+1000\ \mathrm{fF}=1030\ \mathrm{fF}.
$$

- 输入端：M1 的 $C_{gsn}$ 直接并在理想源两端，不影响响应。
- 电流镜节点：M2 和 M3 的 $C_{gsp}$（到 $V_{DD}$），经 $1/g_{m3}$ 驱动。

### 第 3 步 — 电流镜节点的极点

由 $g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S$，节点电容约为 $2C_{gsp}=20$ fF，

$$
f_{mirror}\approx\frac{g_{m3}}{2\pi(2C_{gsp})}=\frac{316\ \mu\mathrm S}{2\pi(20\ \mathrm{fF})}\approx2.5\ \mathrm{GHz}.
$$

此外，电流镜节点不在信号通路上：参考电流恒定，该节点只经 $C_{gdp}$ 从输出端微弱地耦合到信号。它不限制响应；输出极点比它低三个数量级，是主极点。

### 第 4 步 — −3 dB 频率

对输出节点列 KCL，$C_{gdn}$ 中的电流从输入端流入：

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gdn}}{g_{ds1}+g_{ds2}+sC_{out}},
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{9\ \mu\mathrm S}{2\pi(1.03\ \mathrm{pF})}=1.39\ \mathrm{MHz}.
$$

由于输入由理想源驱动，$C_{gdn}$ 不被密勒倍增。右半平面零点 $g_{m1}/(2\pi C_{gdn})=469\ \mu\mathrm S/(2\pi\cdot5\ \mathrm{fF})\approx15$ GHz 可以忽略。
