# 详细步骤 - A268

先确定偏置支路，因为 $R_B$ 决定基准电流，其余电流都是它的镜像比例。然后信号通路采用最小尺寸器件，校核增益是否满足指标，最后由得到的 $g_{m1}$ 和 $g_{m6}$ 确定 $C_c$、$R_z$、负载上限和压摆率。所有晶体管都工作在饱和区（saturation region），$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$；记 $S=W/L$。直流电流中忽略沟道长度调制（channel-length modulation），只在 $g_{ds}=\lambda I_D$ 中保留。

### 第 1 步 — 由 $R_B$ 和 M8 求基准电流

M8 为二极管连接，$V_{DS8}=V_{GS8}$，始终饱和。取 L = 2 µm 和最小宽度，$S_8=1$。电阻承受其余电源电压并流过 M8 的电流：

$$
I_8=\frac{V_{DD}-V_{SS}-V_{GS8}}{R_B},\qquad V_{GS8}=V_{TN}+\sqrt{\frac{2I_8}{K'_NS_8}}.
$$

联立求解：

$$
I_8=\frac{5\ \mathrm V-0.7\ \mathrm V-\sqrt{2I_8/(110\ \mu\mathrm{A/V^2})}}{100\ \mathrm{k\Omega}}
\;\Rightarrow\; I_8=35.0\ \mu\mathrm A,\quad V_{GS8}=1.50\ \mathrm V.
$$

即使 M8 无限宽（$V_{GS8}\to0.7$ V）也只有 43 µA，所以无论 M8 取何尺寸都有 $I_8<50$ µA，M5 和 M7 的宽长比必须大于 M8。

### 第 2 步 — M5 和 M7 的镜像比例

M5、M7 与 M8 共用 $V_{GS8}$，饱和时电流与 $S$ 成正比：

$$
S_5=S_8\frac{I_5}{I_8}=\frac{50\ \mu\mathrm A}{35.0\ \mu\mathrm A}=1.43,\qquad
S_7=S_8\frac{I_7}{I_8}=\frac{100\ \mu\mathrm A}{35.0\ \mu\mathrm A}=2.86 .
$$

取 L = 2 µm：$W_5\approx2.9$ µm，$W_7\approx5.7$ µm。（保持 $W_5=2$ µm、改为加长 M8 也同样可行，只有比例起作用。）

### 第 3 步 — 输入对管和镜像负载取最小尺寸

取 $S_1=S_2=1$，$S_3=S_4=1$（2 µm/2 µm）。每个输入管流过 $I_5/2=25$ µA：

$$
g_{m1}=\sqrt{2K'_NS_1I_1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(25\ \mu\mathrm A)}=74.2\ \mu\mathrm S,
$$
$$
V_{SG3}=|V_{TP}|+\sqrt{\frac{2I_3}{K'_PS_3}}=0.7\ \mathrm V+\sqrt{\frac{2(25\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1)}}=1.7\ \mathrm V.
$$

### 第 4 步 — 由平衡条件确定输出管

差模输入为零时，电流镜使 $V_{SD4}=V_{SD3}$，因此 $V_{SG6}=V_{SD4}=V_{SG4}$。要使 M6 在这一栅压下恰好流过 $I_7$（无系统失调（systematic offset）），其电流密度必须与 M4 相同：

$$
\frac{I_6}{S_6}=\frac{I_4}{S_4}\;\Rightarrow\; S_6=S_4\frac{I_7}{I_4}=1\cdot\frac{100\ \mu\mathrm A}{25\ \mu\mathrm A}=4\quad(8\ \mu\mathrm m/2\ \mu\mathrm m),
$$
$$
g_{m6}=\sqrt{2K'_PS_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(4)(100\ \mu\mathrm A)}=200\ \mu\mathrm S .
$$

设计汇总如下（所有 L = 2 µm）：

| 器件 | M1、M2 | M3、M4 | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|---|
| W (µm) | 2 | 2 | 2.9 | 8 | 5.7 | 2 |
| $I_D$ (µA) | 25 | 25 | 50 | 100 | 100 | 35.0 |

### 第 5 步 — 低频增益

每级增益等于其跨导乘以输出节点电阻，该节点上两个漏极并联，各自 $g_{ds}=\lambda I_D$：

$$
A_v=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}
=\frac{74.2\ \mu\mathrm S}{(0.01+0.01)(25\ \mu\mathrm A)}\cdot\frac{200\ \mu\mathrm S}{(0.01+0.01)(100\ \mu\mathrm A)}
=148\times100=1.48\times10^4 .
$$

该值超过 4000。由于器件已是最小尺寸，不采用非最小沟道长度就无法把增益降到恰好 4000；指标作为下限得到满足。

### 第 6 步 — 补偿电容和调零电阻

密勒补偿（Miller compensation）运放的单位增益频率为 $GB=g_{m1}/C_c$（rad/s），取 GB = $2\pi(1\ \mathrm{MHz})$：

$$
C_c=\frac{g_{m1}}{2\pi\,GB}=\frac{74.2\ \mu\mathrm S}{2\pi(10^6\ \mathrm{Hz})}=11.8\ \mathrm{pF}.
$$

$R_z$ 与 $C_c$ 串联时，零点位于 $z=1/[C_c(1/g_{m6}-R_z)]$。取

$$
R_z=\frac1{g_{m6}}=\frac1{200\ \mu\mathrm S}=5\ \mathrm{k\Omega}
$$

可把零点移到无穷远；$R_z$ 稍大则零点移到左半平面。

### 第 7 步 — 最大负载电容

零点消除后，相位裕度只由输出极点 $|p_2|\approx g_{m6}/C_L$ 决定：$\Phi_M=90^\circ-\arctan(GB/|p_2|)$。60° 裕度要求 $|p_2|\ge\tan60^\circ\,GB=1.73\,GB$：

$$
C_L\le\frac{g_{m6}}{1.73(2\pi)(10^6\ \mathrm{Hz})}=\frac{200\ \mu\mathrm S}{1.087\times10^{7}\ \mathrm{s^{-1}}}=18.4\ \mathrm{pF}.
$$

若取 45° 裕度（$|p_2|\ge GB$），上限为 $g_{m6}/GB=31.8$ pF。

### 第 8 步 — 压摆率和摆幅校核

压摆时尾电流 $I_5$ 只对 $C_c$ 充电，因此

$$
SR=\frac{I_5}{C_c}=\frac{50\ \mu\mathrm A}{11.8\ \mathrm{pF}}=4.2\ \mathrm{V/\mu s}.
$$

输出下降沿驱动 $C_L=18.4$ pF 时，输出电流沉把速率限制在约 $I_7/(C_L+C_c)=100\ \mu\mathrm A/30.2\ \mathrm{pF}=3.3$ V/µs，所以内部值 4.2 V/µs 是轻载时运放的压摆率。

输入共模为零时所有器件都饱和。由 M5、M1、M6、M7 的饱和边界得到的范围为

$$
\begin{aligned}
V_{ic,\min}&=V_{SS}+V_{GS1}+V_{DS5,\mathrm{sat}}=-2.5+1.374+0.798=-0.33\ \mathrm V,\\
V_{ic,\max}&=V_{DD}-V_{SG3}+V_{TN}=2.5-1.7+0.7=1.5\ \mathrm V,\\
V_{out}&\in[V_{SS}+V_{DS7,\mathrm{sat}},\ V_{DD}-V_{SD6,\mathrm{sat}}]=[-1.70,\ 1.5]\ \mathrm V.
\end{aligned}
$$
