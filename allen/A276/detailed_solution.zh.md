# 详细步骤 - A276

先由镜像比例读出直流电流，再分析两级增益。第一级并不是电流镜负载差分对：M2 的漏极直接接 $V_{DD}$，M3 是电流源负载，因此只有 M1 承担的那一半差模信号电流送到第一级输出节点（M1/M3 漏极，驱动 M5）。第二级是以 n 沟道电流沉 M6 为负载的 p 沟道共源管 M5。所有器件都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$；$g_m=\sqrt{2K'(W/L)I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 直流电流

20 µA 电流源同时流过两个二极管连接器件 M8（p 沟道，2/1）和 M7（n 沟道，1/1）。各电流镜按 $W/L$ 比例复制该电流：

| 器件 | 镜像对象 | 比例 | $I_D$ (µA) |
|---|---|---|---|
| M7、M8 | — | — | 20 |
| M4（尾电流） | M7 | 1/1 | 20 |
| M3 | M8 | 1/2 | 10 |
| M6 | M7 | 5/1 | 100 |
| M1、M2 | 尾电流平分 | 1/2 | 10 |

M3 的 10 µA 与 M1 的 10 µA 相等，第一级输出节点电流平衡。M5 必须流过 M6 的 100 µA；其栅极接 M3 漏极，由于 $S_5/I_5=10/100=S_8/I_8=2/20$，它在 $V_{SG5}=V_{SG8}=0.75\ \mathrm V+\sqrt{2(20\ \mu\mathrm A)/[(8\ \mu\mathrm{A/V^2})(2)]}=2.33$ V 时恰好如此，而这正等于 $V_{SG3}$。因此偏置自洽。

### 第 2 步 — 第一级增益

差模输入 $v_{in}$ 平均分配到两个匹配的输入管上，所以 M1 的漏极电流变化 $g_{m1}v_{in}/2$。该电流流入第一级节点，负载为 $r_{ds1}\parallel r_{ds3}$：

$$
g_{m1}=\sqrt{2(24\ \mu\mathrm{A/V^2})(4)(10\ \mu\mathrm A)}=43.8\ \mu\mathrm S,\qquad
R_I=\frac1{(\lambda_N+\lambda_P)(10\ \mu\mathrm A)}=\frac1{(0.03\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=3.33\ \mathrm{M\Omega},
$$
$$
A_1=\frac{g_{m1}}{2}R_I=(21.9\ \mu\mathrm S)(3.33\ \mathrm{M\Omega})=73.0 .
$$

（更仔细地看 M1 漏极：其源极由 $1/g_{m2}$ 负反馈，输出电阻加倍；取 $R_I=r_{ds3}\parallel2r_{ds1}=4$ MΩ，总增益约升至 $3.7\times10^3$。）

### 第 3 步 — 第二级、输出电阻和总增益

$$
g_{m5}=\sqrt{2(8\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=126.5\ \mu\mathrm S,\qquad
R_{out}=R_{II}=\frac1{(\lambda_P+\lambda_N)(100\ \mu\mathrm A)}=333\ \mathrm{k\Omega},
$$
$$
A_2=g_{m5}R_{II}=42.2,\qquad
\frac{v_{out}}{v_{in}}=A_1A_2=73.0\times42.2=3.08\times10^3 .
$$

从 + 输入端（M1 栅极）看增益为正：M1 栅压升高使 M3/M1 节点下降，M5 导通增强，输出升高。

### 第 4 步 — 主极点和 GB

密勒倍增（Miller multiplication）使 $C_c$ 在第一级节点上等效为 $C_c(1+A_2)$，主极点为

$$
p_1\approx-\frac1{R_IC_c(1+g_{m5}R_{II})}=-\frac1{(3.33\ \mathrm{M\Omega})(5\ \mathrm{pF})(43.2)}=-1.39\times10^3\ \mathrm{rad/s}
$$

（若用 $g_{m5}R_{II}$ 代替 $1+g_{m5}R_{II}$，则为 $\approx-1.42\times10^3$ rad/s，即 −226 Hz）。单位增益带宽等于第一级跨导除以 $C_c$；这里该跨导为 $g_{m1}/2$：

$$
GB=\frac{g_{m1}/2}{C_c}=\frac{21.9\ \mu\mathrm S}{5\ \mathrm{pF}}=4.38\times10^6\ \mathrm{rad/s}=0.70\ \mathrm{MHz}.
$$

校核：$|p_1|\cdot A_v=(1.42\times10^3)(3.08\times10^3)=4.38\times10^6$ rad/s。

### 第 5 步 — 压摆率和功耗

$C_c$ 经第一级节点充放电。M1 截止时，M3 向该节点注入 10 µA；M1 吸收全部 20 µA 尾电流时，净抽出 $20-10=10$ µA。两种情况下都有

$$
SR=\frac{10\ \mu\mathrm A}{5\ \mathrm{pF}}=2\ \mathrm{V/\mu s}.
$$

电源电流为三条支路之和（M8–电流源–M7，M3/M1 与 M2 经 M4，以及 M5–M6）：

$$
P_{diss}=(10\ \mathrm V)(20+20+100)\ \mu\mathrm A=1.4\ \mathrm{mW}.
$$
