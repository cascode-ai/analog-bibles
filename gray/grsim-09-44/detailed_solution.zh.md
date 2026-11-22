# 详细步骤 - grsim-09-44

除 $a_v(s)$ 和 $C_{\text{in}}$ 外，运放模型是理想的，所以一切都可以精确计算。$V_i=0$ 时，反相节点一侧是 100 kΩ 输入电阻与 $C_{\text{in}}$ 的并联（$Z_d$，被驱动侧），另一侧是接到理想源 $a_vv_x$ 的 100 kΩ 反馈电阻 $R_F$（返回侧）。由于 $v_x$ 是从反相节点到地测量、且 + 端在地，$v_x=-v_n$。下面推导两个注入比和直接回归比，再检查 ngspice 仿真与组合公式能否重现它们。

### 第 1 步 — 直接回归比

用独立测试源 $s_t$ 代替受控源。它经 $R_F$ 驱动 $Z_d$，所以 $v_n=s_tZ_d/(Z_d+R_F)$。受控源的返回值为 $a_v(-v_n)$，因此

$$
\mathscr{R}(s)=a_v(s)\frac{Z_d}{Z_d+R_F},\qquad Z_d=100\ \mathrm{k\Omega}\parallel\frac{1}{sC_{\text{in}}} .
$$

由于 $Z_d$ 和 $R_F$ 都是 100 kΩ，$Z_d/(Z_d+R_F)=\tfrac12/[1+s(50\ \mathrm{k\Omega})(4\ \mathrm{pF})]$，所以

$$
\mathscr{R}(s)=\frac{500}{(1+s/100)(1+s/10^{6})(1+s/5\times10^{6})},
$$

其中 $s$ 的单位为 rad/s。

### 第 2 步 — 注入比

- **电流注入。** 测试电流流入反相节点时，$i_d=v_n/Z_d$。经 $R_F$ 流来的电流为 $i_m=(-a_vv_n-v_n)/R_F$。因此
$$
\mathscr{R}'_i=-\frac{i_m}{i_d}=(1+a_v)\frac{Z_d}{R_F}.
$$
- **电压注入。** $v_t$ 串联接入（输入侧为 $v_d=v_n$，$R_F$ 侧为 $v_m$），$R_F$ 中的电流等于流入 $Z_d$ 的电流：$(-a_vv_d-v_m)/R_F=v_d/Z_d$，所以
$$
\mathscr{R}'_v=-\frac{v_m}{v_d}=a_v+\frac{R_F}{Z_d}.
$$

把两者代入组合公式，恰好得到 $a_vZ_d/(Z_d+R_F)$，所以对这个单环路，该方法是精确的。

### 第 3 步 — SPICE 模型

$a_v(s)$ 由一个增益为 1000、受 $0-v_n$ 控制的压控电压源，加上两个带缓冲的 RC 节构成，时间常数分别为 10 ms（极点 100 rad/s）和 1 µs（极点 $10^6$ rad/s）。测试源接在反相节点 $n$（被驱动侧）与 $R_F$ 左端 $m$（返回侧）之间。

```spice
* grsim-09-44 inverting amplifier, injections at the inverting node
Vi in 0 dc 0
R1 in n 100k
Cin n 0 4p
RF m o 100k
E1 a1 0 0 n 1000
Ra a1 p1 1k
Ca p1 0 10u
E2 a2 0 p1 0 1
Rb a2 p2 1k
Cb p2 0 1n
E3 o 0 p2 0 1
Vt n m dc 0 ac 0
It 0 m dc 0 ac 1
.ac dec 200 1 10g
* run 1 (It ac 1):  i_d = -i(Vt),  R'_i = -(i_d - 1)/i_d
* run 2 (Vt ac 1):  R'_v = -v(m)/v(n)
* R = 1/(1/(1+R'_i) + 1/(1+R'_v)) - 1, evaluated as complex vectors
.end
```

### 第 4 步 — (a) 四个频率处的数值

| $f$ | $\mathscr{R}'_i$ | $\mathscr{R}'_v$ | $\mathscr{R}$（仿真） | $\mathscr{R}$（直接计算） |
|---|---|---|---|---|
| 1 kHz | 15.95∠−86.0° | 15.95∠−85.9° | 7.957∠−89.5° | 7.957∠−89.5° |
| 100 kHz | 0.907∠−21.1° | 0.938∠+8.4° | 0.0669∠−129.3° | 0.0669∠−129.3° |
| 10 MHz | 0.0398∠−87.7° | 25.15∠+87.7° | $1.005\times10^{-6}$∠−264.5° | $1.005\times10^{-6}$∠−264.5° |
| 1 GHz | $3.98\times10^{-4}$∠−90° | 2513∠+90° | $1.008\times10^{-12}$∠−270° | $1.008\times10^{-12}$∠−270° |

组合结果与直接计算在仿真精度内一致；组合必须用复数运算并以双精度进行。在 1 GHz 处 $\mathscr{R}$ 约为 $10^{-12}$，$1/(1+\mathscr{R})$ 与 1 只在第十二位上不同，若先把 $\mathscr{R}'_i$ 和 $\mathscr{R}'_v$ 以七位有效数字导出再组合，会产生 18 % 的误差。

两个注入比单独都不是回归比。在 1 kHz 处两者都约为 $\mathscr{R}$ 的两倍，因为断点两侧的电阻相等（都是 100 kΩ）。在高频处，$C_{\text{in}}$ 使被驱动侧成为低阻抗。此时 $\mathscr{R}'_i$ 的幅值跟随 $\mathscr{R}$，而 $\mathscr{R}'_v$ 随 $R_F/Z_d$ 增大，与环路毫无关系。

### 第 5 步 — (b) 幅值、相位与裕度

![回归比幅值（dB）随对数频率的变化：低频 54 dB，在 7.95 kHz 处穿过 0 dB，在 −180° 频率处为 −41.6 dB，之后以 −60 dB/十倍频下降](/q/grsim-09-44/solution-magnitude.zh.svg)

![回归比相位随对数频率的变化：7.95 kHz 单位增益频率处为 −93.3°，356 kHz 处为 −180°，趋于 −270°](/q/grsim-09-44/solution-phase.zh.svg)

由第 1 步的表达式，$|\mathscr{R}|$ 在 100 rad/s 以下为 500（54 dB），到 $10^6$ rad/s 以 −20 dB/十倍频下降，到 $5\times10^6$ rad/s 以 −40 dB/十倍频下降，之后以 −60 dB/十倍频下降。

- **单位增益频率。** 由于 $\omega\gg100$，$|\mathscr{R}|\approx5\times10^4/\omega$，所以 $\omega_u\approx5\times10^4$ rad/s。精确值为 $4.99\times10^{4}$ rad/s（$f_u=7.95$ kHz），此处
$$
\angle\mathscr{R}=-\arctan\frac{\omega_u}{100}-\arctan\frac{\omega_u}{10^6}-\arctan\frac{\omega_u}{5\times10^6}=-89.9^\circ-2.9^\circ-0.6^\circ=-93.3^\circ,
$$
所以相位裕度为 $86.7^\circ$。
- **增益裕度。** 当两个较高的极点合计贡献 90° 时相位达到 −180°，这发生在 $\omega=\sqrt{10^6\cdot5\times10^6}=2.24\times10^6$ rad/s（356 kHz）。此处 $|\mathscr{R}|=0.0083$，所以增益裕度为 $-20\log_{10}0.0083=41.6$ dB。

| 量 | 直接计算 | ngspice（组合注入） |
|---|---|---|
| 单位增益频率 | $4.99\times10^{4}$ rad/s（7.95 kHz） | 7.947 kHz |
| $f_u$ 处相位 / 相位裕度 | −93.3° / 86.7° | −93.3° / 86.7° |
| −180° 频率 | $2.24\times10^{6}$ rad/s（356 kHz） | 355.9 kHz |
| 增益裕度 | 41.6 dB | 41.6 dB |

仿真得到的回归比与在受控源处断开环路得到的结果完全相同。这证实两种注入经复数组合后，能在不扰动直流工作点的情况下测得真实的回归比。
