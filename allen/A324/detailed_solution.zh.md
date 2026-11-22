# 详细步骤 - A324

把两个电阻都用偏置电流表示：输入电阻由二极管连接的 M1 的跨导决定，输出电阻由 M2 与 M6 的沟道长度调制（channel-length modulation）决定。每项指标约束一个电流，W/L 再由电流镜关系得到。

### 第 1 步 — M1 漏极处的输入电阻

所有晶体管工作在饱和区，$i_D=\tfrac{K'}{2}(W/L)(v_{GS}-V_T)^2(1+\lambda v_{DS})$。其小信号参数为

$$
g_m=\sqrt{2K'(W/L)I_D},\qquad g_{ds}=\lambda I_D .
$$

在 M1 的漏极（栅漏相连）加测试电压 $v_x$，M1 中流过电流 $g_{m1}v_x$，两个输出电导中分别流过 $g_{ds1}v_x$ 和 $g_{ds5}v_x$，因此

$$
R_{in}=\frac1{g_{m1}+g_{ds1}+g_{ds5}}\approx\frac1{g_{m1}} .
$$

所以 $R_{in}<1\ \mathrm{k\Omega}$ 要求 $g_{m1}>1\ \mathrm{mS}$，即

$$
\frac{W_1}{L_1}I_1>\frac{g_{m1}^2}{2K'_N}=\frac{(10^{-3}\ \mathrm{A/V})^2}{2(110\ \mu\mathrm{A/V^2})}=4.55\times10^{-3}\ \mathrm A .
$$

选 $I_1=100\ \mu$A、$W_1/L_1=50$（$5\times10^{-3}$ A）：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(50)(100\ \mu\mathrm A)}=1.049\ \mathrm{mS},
$$
$$
g_{ds1}+g_{ds5}=(\lambda_N+\lambda_P)I_1=(0.09\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=9\ \mu\mathrm S,\qquad
R_{in}=\frac1{1.049\ \mathrm{mS}+9\ \mu\mathrm S}=945\ \Omega .
$$

### 第 2 步 — M2 与 M6 漏极处的输出电阻

不计电阻时，加在输出节点的测试源到达不了 M2 的栅极（节点 X），也到达不了 M6 的栅极（即 M4 的栅极），因此两管都不产生 $g_m$ 电流，只剩输出电导：

$$
R_{out}=\frac1{g_{ds2}+g_{ds6}}=\frac1{(\lambda_N+\lambda_P)I_2}\ge1\ \mathrm{M\Omega}
\quad\Rightarrow\quad
I_2\le\frac1{(0.09\ \mathrm{V^{-1}})(10^6\ \Omega)}=11.1\ \mu\mathrm A .
$$

选 $I_2=11\ \mu$A，得 $R_{out}=1/[(0.09\ \mathrm{V^{-1}})(11\ \mu\mathrm A)]=1.01\ \mathrm{M\Omega}$。

两项指标方向相反：小的 $R_{in}$ 需要 M1 中有大电流，大的 $R_{out}$ 需要 M2 中电流小。因此电流镜必须把电流按约 9:1 缩小。

### 第 3 步 — 电流镜与电流源的比例

M1 与 M2 的 $V_{GS}$ 相同，沟道长度相等时电流按 W/L 成比例：

$$
\frac{W_2}{L_2}=\frac{W_1}{L_1}\,\frac{I_2}{I_1}=50\times\frac{11\ \mu\mathrm A}{100\ \mu\mathrm A}=5.5 .
$$

M5 和 M6 提供 M1 和 M2 的直流漏极电流（$I_5=I_1$，$I_6=I_2$），使 $R_1$、$R_2$ 中没有直流电流。它们与 M4 的 $V_{SG}$ 相同，故 $(W_5/L_5):(W_6/L_6):(W_4/L_4)=I_1:I_2:I_{BIAS}$。取 $I_{BIAS}=100\ \mu$A、$W_4/L_4=50$：

| 器件 | 电流 | W/L（L = 1 µm） |
|---|---|---|
| M1、M5 | 100 µA | 50 |
| M2、M6 | 11 µA | 5.5 |
| M4 | 100 µA | 50 |

### 第 4 步 — 括号中给出的电压增益

记 M1 的漏极为 $v_x$，M2 的漏极为 $v_y$，镜像比 $K=I_2/I_1$，并忽略节点 X 处的 $g_{ds}$。两个节点的 KCL 为

$$
\begin{aligned}
\frac{v_{in}-v_x}{R_1}+\frac{v_y-v_x}{R_2}&=g_{m1}v_x,\\
\frac{v_x-v_y}{R_2}&=Kg_{m1}v_x+\frac{v_y}{R_{out}} .
\end{aligned}
$$

解得

$$
\frac{v_y}{v_{in}}=\frac{R_{out}(1-Kg_{m1}R_2)}{R_1+R_2+R_{out}+g_{m1}R_1[R_2+(1+K)R_{out}]}
\;\xrightarrow{\;R_{out}\to\infty,\ g_{m1}R_1\gg1\;}\;-\frac{K}{1+K}\frac{R_2}{R_1},
$$

当 $K\approx1/9$ 时约为 −10。代入指标极限值（$R_{out}=1.01\ \mathrm{M\Omega}\approx R_2$，$g_{m1}R_1=10.5$），上式约为 −4.8，所以 −10 只是理想极限。题目要求的设计（两个电阻）与此无关。
