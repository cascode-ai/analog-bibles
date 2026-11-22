# 详细步骤 - A291

与任何电流镜负载差分级一样，输入对管把完整的电流 $g_{m1}v_{in}$ 送到输出节点：一半由 M2 直接提供，另一半由 M1 经 p 沟道共源共栅电流镜（M3/M4 的栅极接 MC3 漏极）提供。共源共栅管原样传递信号电流，因此增益等于 $g_{m1}$ 乘以输出电阻，后者为 n 沟道共源共栅（MC2 叠在 M2 上）与 p 沟道共源共栅（MC4 叠在 M4 上）的并联。所有器件都饱和；$g_m=\sqrt{2K'(W/L)I_D}$，$r_{ds}=1/(\lambda I_D)$。

### 第 1 步 — 小信号参数

每边流过 $I_5/2=50$ µA：

$$
\begin{aligned}
g_{m1}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=104.9\ \mu\mathrm S,\\
g_{mC4}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,\qquad
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.5\ \mathrm{M\Omega},\quad r_{dsP}=0.4\ \mathrm{M\Omega}.
\end{aligned}
$$

### 第 2 步 — 输出电阻

每个共源共栅结构把下方器件的 $r_{ds}$ 乘以共源共栅管的本征增益：

$$
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4})
=(26.2\ \mathrm{M\Omega})\parallel(11.3\ \mathrm{M\Omega})=7.90\ \mathrm{M\Omega}.
$$

### 第 3 步 — 差模增益

$$
\frac{v_{o1}}{v_{in}}=g_{m1}R_{out}=(331.7\ \mu\mathrm S)(7.90\ \mathrm{M\Omega})=2.6\times10^3 .
$$

按图中的输入极性，输出与 $v_{in}$ 同相。保留加在 $g_mr_{ds}^2$ 上的 $r_{ds}$ 项，两支路电阻分别升至 27.2 MΩ 和 12.1 MΩ，增益约为 $2.8\times10^3$。1/1 的小尺寸共源共栅管限制了增益：它们的 $g_m$ 低，使共源共栅倍增只有 52（n）和 28（p）。
