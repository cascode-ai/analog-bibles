# 详细步骤 - grsim-03-15

在 $v_i=0$ 时于 $M_2$ 漏极加测试电压 $v_x$，跟踪测试电流 $i_x$ 经 $M_2$ 流入 $r_{o1}$ 的过程。反馈放大器 $M_3$ 检测 $M_2$ 的源极并反向驱动其栅极，使通常的共源共栅提升再乘以 $(1+g_{m3}r_{o3})$。由工艺数据计算 $g_m$ 和 $r_o$，求出 $R_o$，并用 ngspice 的 `.tf` 分析验证。

### 第 1 步 — 小信号参数

有效沟道长度与沟道长度调制参数为

$$
L_{\mathrm{eff}}=0.4-2(0.09)-0.1=0.12\ \mu\mathrm m,\qquad
\lambda=\frac{dX_d/dV_{DS}}{L_{\mathrm{eff}}}=\frac{0.02\ \mu\mathrm m/\mathrm V}{0.12\ \mu\mathrm m}=0.167\ \mathrm{V^{-1}}.
$$

三个晶体管都流过 100 μA，$W/L_{\mathrm{eff}}=83.3$：

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.167\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=60\ \mathrm{k\Omega},\qquad
g_m=\sqrt{2k'_n\frac WLI_D}=\sqrt{2(194\ \mu\mathrm{A/V^2})(83.3)(100\ \mu\mathrm A)}=1.80\ \mathrm{mA/V},
$$

故 $g_mr_o=108$。

### 第 2 步 — 有源反馈下的输出电阻

$v_i=0$ 时 $M_1$ 只相当于 $r_{o1}$，因此 $M_2$ 的源极变化 $v_{s2}=i_xr_{o1}$。$M_3$ 是以 $v_{s2}$ 为输入、以理想电流源 $I$ 为负载的共源放大器，因此 $M_2$ 的栅极变化 $v_{g2}=-g_{m3}r_{o3}v_{s2}$：

$$
v_{gs2}=v_{g2}-v_{s2}=-(1+g_{m3}r_{o3})\,i_xr_{o1}.
$$

流过 $M_2$ 的电流为

$$
i_x=g_{m2}v_{gs2}+\frac{v_x-v_{s2}}{r_{o2}}
\;\Rightarrow\;
v_x=i_x\left[r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}(1+g_{m3}r_{o3})\right],
$$

$$
R_o=r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}(1+g_{m3}r_{o3})
=0.12\ \mathrm{M\Omega}+(1.80\ \mathrm{mA/V})(60\ \mathrm{k\Omega})^2(109)=7.1\times10^{8}\ \Omega .
$$

普通共源共栅（$M_2$ 栅极接固定偏置）给出 $r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}=6.6$ MΩ。有源反馈使其约乘以 $1+g_{m3}r_{o3}\approx108$，达到约 0.7 GΩ。

### 第 3 步 — SPICE 设置

用输出端的理想直流源 $V_{OUT}=2$ V 代替电阻 $R$，这样 `.tf` 报告的该源所见电阻就是 $R_o$。输入 $V_I$ 由精细直流扫描确定，使 $V_{OUT}$ 提供 100 μA；$M_3$ 由理想的 100 μA 电流源偏置。

```spice
* grsim-03-15 active cascode output resistance
VDD  vdd 0 3
I1   vdd g2 100u
VOUT out 0 2
VI   vi  0 0.705243
M1 x   vi 0 0 nch W=10u L=0.12u
M2 out g2 x 0 nch W=10u L=0.12u
M3 g2  x  0 0 nch W=10u L=0.12u
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.167
.control
op
print v(x) v(g2) @m1[id] @m2[id] @m3[id]
print @m1[gds] @m2[gds] @m3[gds] @m2[gm] @m3[gm]
tf v(x) VOUT
print all
.endc
.end
```

### 第 4 步 — SPICE 结果及比较

工作点为 $V_X=0.700$ V、$V_{G2}=1.401$ V，三个器件都在有源区流过 100.0 μA。$V_{OUT}$ 看到的输入电阻为

$$
R_{o,\mathrm{SPICE}}=1.43\times10^{9}\ \Omega .
$$

| 量 | 手算 | ngspice |
|---|---|---|
| $r_{o1}$、$r_{o2}$、$r_{o3}$ | 各 60 kΩ | 66.9、72.9、73.9 kΩ |
| $g_{m2}$、$g_{m3}$ | 1.80 mA/V | 1.98、2.00 mA/V |
| $1+g_{m3}r_{o3}$ | 109 | 149 |
| $R_o$ | 0.71 GΩ | 1.43 GΩ |

level-1 模型写作 $I_D=\tfrac12k'(W/L)V_{ov}^2(1+\lambda V_{DS})$，因此在这些 $V_{DS}$ 下其 $r_o=(1+\lambda V_{DS})/(\lambda I_D)$ 比 $1/(\lambda I_D)$ 大 12%–23%，其 $g_m$ 也含同样的 $(1+\lambda V_{DS})$ 因子。由于 $R_o\propto g_m^2r_o^3$，这些不大的差异使结果翻倍。把 SPICE 自身的 $g_m$ 和 $r_o$ 代入第 2 步的公式，得到 $1.44\times10^{9}\ \Omega$，与仿真一致。手算和仿真都表明输出电阻约为 1 GΩ 量级，约为普通共源共栅的 100 倍。
