# 详细步骤 - G198

把带发射极负反馈的晶体管看作输入电阻为 $R_i=r_\pi+(\beta+1)R_E$、等效跨导为 $G_m=\beta/R_i$ 的一级。先在所有电容开路时求中频增益，再应用零值时间常数法：对每个电容，在其余电容开路且 $v_i=0$ 时求其看到的电阻，把时间常数相加得到 $T_0$，并以 $\omega_{-3\text{dB}}\approx1/T_0$ 作为估计。

### 第 1 步 — 小信号参数

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad
C_\pi=\frac{g_m}{\omega_T}-C_\mu=10.2\ \mathrm{pF}-0.2\ \mathrm{pF}=10.0\ \mathrm{pF},
$$

其中由 $f_T$ 求得的 $C_\pi$ 已包含 $C_{je}$。加入负反馈后，

$$
R_i=r_\pi+(\beta+1)R_E=5.2\ \mathrm{k\Omega}+201(300\ \Omega)=65.5\ \mathrm{k\Omega},\qquad
G_m=\frac{\beta}{R_i}=3.05\ \mathrm{mA/V}\approx\frac{g_m}{1+g_mR_E}.
$$

### 第 2 步 — 低频增益

基极电流为 $v_i/(R_S+R_i)$，集电极电流是它的 $\beta$ 倍：

$$
\frac{v_o}{v_i}=-\frac{\beta R_L}{R_S+R_i}=-\frac{200(5\ \mathrm{k\Omega})}{75.5\ \mathrm{k\Omega}}=-13.2 .
$$

### 第 3 步 — 零值时间常数

- $C_\pi$（基极到发射极）：它看到 $r_\pi$ 与经外部通路的基极-发射极间电阻并联。经过 $C_\pi$ 的测试电流在基极一侧看到 $R_S$，在发射极一侧看到 $R_E$，而 $g_m$ 受控源经 $R_E$ 形成反馈，得到
$$
R_{\pi0}=r_\pi\parallel\frac{R_S+R_E}{1+g_mR_E}=5.2\ \mathrm{k\Omega}\parallel821\ \Omega=709\ \Omega .
$$
- $C_\mu$（基极到集电极）：基极看到 $R_1=R_S\parallel R_i=8.68$ kΩ；测试电流使基极升高 $i_xR_1$，集电极升高 $i_xR_L+G_mR_L\cdot i_xR_1$：
$$
R_{\mu0}=R_1+R_L+G_mR_LR_1=8.68+5+132.4\ \mathrm{k\Omega}=146\ \mathrm{k\Omega}.
$$
- $C_{cs}$（集电极到地）：由于 $r_o=\infty$，晶体管集电极是理想电流源，它只看到 $R_L=5$ kΩ。

| 电容 | 电阻 | 时间常数 |
|---|---|---|
| $C_\pi=10.0$ pF | 709 Ω | 7.1 ns |
| $C_\mu=0.2$ pF | 146 kΩ | 29.2 ns |
| $C_{cs}=1$ pF | 5 kΩ | 5.0 ns |

### 第 4 步 — −3-dB 频率

$$
T_0=7.1+29.2+5.0\ \mathrm{ns}=41.3\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=3.85\ \mathrm{MHz}.
$$

精确节点分析给出 3.97 MHz。与无负反馈的级（增益 −65.8，约 0.92 MHz）相比，300 Ω 的发射极电阻使增益降低约 5 倍、带宽提高约 4 倍，因为它同时减小了 $G_m$（从而减小了 $R_{\mu0}$ 中的密勒项）以及 $C_\pi$ 看到的电阻。
