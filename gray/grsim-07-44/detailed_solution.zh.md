# 详细步骤 - grsim-07-44

用混合 π 模型代替晶体管。由于 $C_{cs}=0$、$V_A=\infty$，电路只有 $C_\pi$ 和 $C_\mu$ 两个电容，因此有两个极点。零值时间常数（两个电容都开路，对 $RC$ 乘积求和）估计主极点；短路时间常数（短路一个电容，对倒数求和）估计次极点。再对同一线性电路做 ngspice 极零点分析加以核对。

### 第 1 步 — 混合 π 参数

双极型晶体管工作在正向放大区时，$g_m=I_C/V_T$，$r_\pi=\beta/g_m$，$f_T=g_m/[2\pi(C_\pi+C_\mu)]$：

$$
\begin{aligned}
g_m&=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.23\ \mathrm{mA/V},\qquad r_\pi=\frac{200}{19.23\ \mathrm{mA/V}}=10.4\ \mathrm{k\Omega},\\
C_\pi&=\frac{g_m}{2\pi f_T}-C_\mu=\frac{19.23\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}-0.3\ \mathrm{pF}=6.121\ \mathrm{pF}-0.3\ \mathrm{pF}=5.821\ \mathrm{pF}.
\end{aligned}
$$

从内部基极看出去的源电阻为 $R_S+r_b=5.3\ \mathrm{k\Omega}$。低频增益为 $-g_mR_L\,r_\pi/(r_\pi+R_S+r_b)=-38.2$。

### 第 2 步 — (a) 零值时间常数：主极点

两个电容都开路、信号源短路时：

- **$C_\pi$** 看到基极–发射极端口：$R_{\pi0}=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.511\ \mathrm{k\Omega}$，所以 $R_{\pi0}C_\pi=20.44$ ns。
- **$C_\mu$** 看到基极到集电极。从集电极向基极加测试电流 $i_x$，得 $v_\pi=i_xR_{\pi0}$，集电极电压为 $-(i_x+g_mv_\pi)R_L$，因此
$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=3.511\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+(19.23\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(3.511\ \mathrm{k\Omega})=209.1\ \mathrm{k\Omega},
$$
$R_{\mu0}C_\mu=62.72$ ns。这是经密勒倍增的项，占主导地位。

$$
T_0=20.44\ \mathrm{ns}+62.72\ \mathrm{ns}=83.16\ \mathrm{ns},\qquad |p_1|\approx\frac{1}{T_0}=1.203\times10^{7}\ \mathrm{rad/s}\ (1.914\ \mathrm{MHz}).
$$

### 第 3 步 — (a) 短路时间常数：次极点

- **$C_\pi$ 短路时的 $C_\mu$。** 基极与发射极相连，$v_\pi=0$，受控源关断。$C_\mu$ 看到连到基极节点（此时为地）的 $R_L$：$R_LC_\mu=(3\ \mathrm{k\Omega})(0.3\ \mathrm{pF})=0.9$ ns。
- **$C_\mu$ 短路时的 $C_\pi$。** 基极与集电极相连，受控源 $g_mv_\pi$ 从基极节点流向地，相当于电阻 $1/g_m$，与该节点上的其他电阻并联：
$$
R_{\pi s}=(R_S+r_b)\parallel r_\pi\parallel R_L\parallel\frac{1}{g_m}=3.511\ \mathrm{k\Omega}\parallel3\ \mathrm{k\Omega}\parallel52\ \Omega=50.38\ \Omega,
$$
所以 $R_{\pi s}C_\pi=0.2933$ ns。

$$
|p_2|\approx\frac{1}{0.9\ \mathrm{ns}}+\frac{1}{0.2933\ \mathrm{ns}}=1.111\times10^{9}+3.410\times10^{9}=4.52\times10^{9}\ \mathrm{rad/s}\ (719.5\ \mathrm{MHz}).
$$

### 第 4 步 — (b) 与 SPICE 比较

网表为采用第 1 步数值的线性混合 π 电路。极零点分析给出精确的根，交流扫描给出 −3 dB 频率。

```spice
* grsim-07-44 CE stage, linear hybrid-pi model
Vs s 0 dc 0 ac 1
RS s b1 5k
rb b1 b 300
rpi b 0 10400
Cpi b 0 5.82134e-12
Cmu b o 0.3p
Gm o 0 b 0 0.0192308
RL o 0 3k
.ac dec 100 10k 100G
.pz s 0 o 0 vol pz
.end
```

| 量 | 估计值 | ngspice | 偏差 |
|---|---|---|---|
| 低频增益 | −38.2（31.6 dB） | 31.64 dB | — |
| 主极点 $p_1$ | 1.914 MHz | $1.2058\times10^{7}$ rad/s = 1.919 MHz | −0.3 % |
| −3 dB 频率 | — | 1.915 MHz | — |
| 次极点 $p_2$ | 719.5 MHz | $4.5087\times10^{9}$ rad/s = 717.6 MHz | +0.3 % |
| 零点 | $g_m/C_\mu$ = 10.2 GHz（右半平面） | $6.41\times10^{10}$ rad/s = 10.2 GHz | — |

两个估计值与精确极点的偏差都在 0.3 % 以内。之所以如此准确，是因为两极点相隔约 370 倍：$T_0$ 恰好等于 $1/|p_1|+1/|p_2|$，短路和恰好等于 $|p_1|+|p_2|$，所以每个估计只差另一个极点的微小贡献。经 $C_\mu$ 前馈的电流所产生的右半平面零点远高于两个极点。
