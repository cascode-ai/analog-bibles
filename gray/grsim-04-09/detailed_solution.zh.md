# 详细步骤 - grsim-04-09

在 Wilson 电流镜中，$Q_3$（二极管连接）与 $Q_1$ 构成电流镜，检测 $Q_2$ 的发射极电流并从输入节点吸取相同的电流。这一负反馈使 $Q_2$ 的发射极电流几乎保持不变。让测试电流沿该环路流动即可得到 $R_o$；再计算偏置，最后用带完整器件模型的 ngspice 验证 $R_o$、$\beta_F$ 灵敏度和大信号曲线。

### 第 1 步 — 偏置

$Q_2$ 的基极（输入节点）比地高两个 $V_{BE}$；$I_C\approx1$ mA 时 $V_{BE}=26\ \mathrm{mV}\ln(1\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.677$ V：

$$
I_{IN}=\frac{15\ \mathrm V-2(0.677\ \mathrm V)}{13.7\ \mathrm{k\Omega}}=0.996\ \mathrm{mA},\qquad
I_{OUT}=I_{IN}\left[1-\frac2{\beta_F^2+2\beta_F+2}\right]=0.996\ \mathrm{mA}.
$$

$\beta_F=200$ 时误差项只有 $2/40402=0.005\%$。

### 第 2 步 — 小信号参数

$$
r_{o1}=r_{o2}=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{0.996\ \mathrm{mA}}=130.5\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{\beta_0V_T}{I_C}=5.22\ \mathrm{k\Omega},\qquad
R_n=R\parallel r_{o1}=13.7\ \mathrm{k\Omega}\parallel130.5\ \mathrm{k\Omega}=12.4\ \mathrm{k\Omega}.
$$

$R_n$ 是输入节点经 $Q_2$ 以外路径到交流地的电阻。$Q_2$ 的发射极节点接在二极管 $Q_3$ 上，约为 $1/g_m=26\ \Omega$，其电压可以忽略。

### 第 3 步 — 输出电阻

向 $Q_2$ 的集电极注入 $i_t$，设流入其基极的电流为 $i_{b2}$。$Q_2$ 的发射极电流 $i_t+i_{b2}$ 流入二极管 $Q_3$，$Q_1$ 镜像该电流，从输入节点吸取 $i_{c1}=i_t+i_{b2}$。在输入节点列 KCL，且 $v_n\approx r_{\pi2}i_{b2}$：

$$
\frac{v_n}{R_n}+i_{c1}+i_{b2}=0
\;\Rightarrow\;
i_{b2}\left(\frac{r_{\pi2}}{R_n}+2\right)=-i_t
\;\Rightarrow\;
i_{b2}=-\frac{i_t}{2+r_{\pi2}/R_n}.
$$

$Q_2$ 的集电极电流为 $g_{m2}r_{\pi2}i_{b2}$ 加上流过 $r_{o2}$ 的电流，故

$$
R_o=\frac{v_x}{i_t}=r_{o2}\left[1+\frac{\beta_0}{2+r_{\pi2}/R_n}\right]
=130.5\ \mathrm{k\Omega}\left[1+\frac{200}{2+0.421}\right]=10.9\ \mathrm{M\Omega}.
$$

若用理想电流源驱动输入节点（$R_n\to\infty$），则变为熟知的 $\beta_0r_{o2}/2\approx13$ MΩ。13.7 kΩ 电阻使部分基极电流变化旁路流走，提升作用略有减小。

### 第 4 步 — $V_{OUT}$ 变化 5 V 时 $I_{OUT}$ 的变化

$$
\frac{\Delta I_{OUT}}{I_{OUT}}=\frac{\Delta V_{OUT}}{R_oI_{OUT}}=\frac{5\ \mathrm V}{(10.9\ \mathrm{M\Omega})(0.996\ \mathrm{mA})}=0.046\% .
$$

### 第 5 步 — $\beta_F$ 灵敏度（手算）

$\beta_F=100$ 时误差项变为 $2/10202=0.020\%$，因此直流电流只下降约 $0.020-0.005=0.015\%$。Wilson 反馈抵消了一阶基极电流误差，只留下 $2/\beta_F^2$ 量级的误差。但 $R_o$ 与 $\beta_0$ 成正比，会降到约 6.0 MΩ（此时 $r_{\pi2}=2.61$ kΩ）。

### 第 6 步 — SPICE 验证

```spice
* grsim-04-09 Wilson current mirror (full model)
VCC  vcc 0 15
R    vcc n 13.7k
Q1   n b 0 npn
Q3   b b 0 npn
Q2   out n b npn
VOUT out 0 5
.model npn npn is=5e-15 bf=200 vaf=130 rb=200 tf=0.35n cje=1p cjc=0.3p cjs=3p
.control
op
tf v(b) VOUT
print all
dc VOUT 0 15 2m
let iout = -i(VOUT)
wrdata iv.txt iout
.endc
.end
```

用 `bf=100` 重复运行一次。VOUT = 5 V 处 `.tf` 给出的输入电阻即为 $R_o$。

| 量 | 手算 | ngspice，$\beta_F=200$ | ngspice，$\beta_F=100$ |
|---|---|---|---|
| 5 V 处 $I_{OUT}$ | 0.996 mA | 0.9917 mA | 0.9917 mA |
| $R_o$ | 10.9 MΩ | 11.4 MΩ | 6.3 MΩ |
| $\Delta I_{OUT}/I_{OUT}$，5 → 10 V | 0.046% | 0.043% | 0.077% |
| $\beta_F$ 由 200 变为 100 时 $I_{OUT}$ 的变化 | −0.015% | 2 V 处 −0.021%；5 V 处 +0.001% | |

![Wilson 电流镜在 BF = 200 与 BF = 100 时 0 到 15 V 的 ngspice IOUT–VOUT 曲线](/q/grsim-04-09/solution-iv.zh.svg)

$R_o$ 和百分比变化与手算的差别在 5% 以内。$I_{OUT}$ 比手算值低约 0.4%，原因是 $Q_1$（$V_{CE}=2V_{BE}$）与 $Q_3$（$V_{CE}=V_{BE}$）工作在不同的集电极电压下，存在手算所忽略的厄利效应失配，另外 $r_b$ 也使 $V_{BE}$ 略有变化。两者的 $\beta_F$ 灵敏度都极小：直流误差的变化约为 0.015%–0.02%，而在较高的 $V_{OUT}$ 下，$R_o$ 的变化（随 $\beta_F$ 减半）把它抵消了。

大信号曲线从约 0.85 V（$\approx V_{BE}+V_{CE(\mathrm{sat})}$）的拐点到 15 V 平坦地保持在约 0.992 mA，斜率为 0.085 μA/V。拐点以下 $Q_2$ 饱和，电流急剧下降。低于约 0.67 V 时电流反向：$Q_2$ 的基集结正偏，流过 $R$ 的电流（约 1 mA）从输出端流出，因此 $V_{OUT}=0$ 时 $I_{OUT}\approx-1.03$ mA。
