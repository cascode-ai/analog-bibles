# 详细步骤 - grsim-04-19

输出短路时，共模输入只有通过不平衡才会产生输出电流：差分对的两个漏极电流相差误差 $\epsilon_d$，电流镜复制其输入时有误差 $\epsilon_m$。先求总的比例因子 $i_2/v_{ic}$；再分别计算 $\epsilon_d$ 的各个来源（电流镜的有限电阻、$g_m$ 失配、$r_o$ 失配）并相加，求出 $\epsilon_m$，最后合并。结果用精确的线性小信号仿真验证。

### 第 1 步 — (a) 比例因子 $i_2/v_{ic}$

尾节点 $v_t$ 经 $r_{tail}$ 承载两个漏极电流，且 $i_1=i_2(1-\epsilon_d)$：

$$
v_t=(i_1+i_2)\,r_{tail}=i_2(2-\epsilon_d)\,r_{tail}.
$$

$T_2$ 的漏极为小信号地，故

$$
i_2=g_{m2}(v_{ic}-v_t)-\frac{v_t}{r_{o2}}=g_{m2}v_{ic}-i_2(2-\epsilon_d)r_{tail}\left(g_{m2}+\frac1{r_{o2}}\right),
$$

$$
\frac{i_2}{v_{ic}}=\frac{g_{m2}}{1+(2-\epsilon_d)\,r_{tail}\left(g_{m2}+1/r_{o2}\right)}.
$$

当 $\epsilon_d\ll2$、$g_{m2}r_{o2}\gg1$ 且 $2g_{m2}r_{tail}\gg1$ 时，分母 $\approx2g_{m2}r_{tail}$：

$$
\frac{i_2}{v_{ic}}\approx\frac1{2r_{tail}},\qquad G_m[cm]\approx-\frac{\epsilon_d+\epsilon_m}{2r_{tail}} .
$$

共模输入只是迫使尾电流变化 $v_{ic}/r_{tail}$，并由两侧分担。

### 第 2 步 — (b) 电流镜有限电阻引起的 $\epsilon_d$（完全匹配）

器件匹配时，二极管连接的 $T_3$ 在 $T_1$ 的漏极呈现 $\approx1/g_{m(mir)}$，而 $T_2$ 的漏极接地。由 $v_3=-i_1/g_{m(mir)}$，

$$
i_1=g_m(v_{ic}-v_t)+\frac{v_3-v_t}{r_o},\qquad i_2=g_m(v_{ic}-v_t)-\frac{v_t}{r_o}
\;\Rightarrow\;
i_1\left(1+\frac1{g_{m(mir)}r_o}\right)=i_2 ,
$$

$$
\epsilon_d=1-\frac{i_1}{i_2}=\frac{1}{1+g_{m(mir)}r_{o(dp)}} .
$$

取 $g_{m3}=1.1$ mA/V、$r_{o(dp)}=1$ MΩ，$\epsilon_d=1/1101=9.1\times10^{-4}$（用平均值 1 mA/V 时约为 $10^{-3}$）。

### 第 3 步 — (c) 只有 $g_{m1}\ne g_{m2}$ 时的 $\epsilon_d$

$1/g_{m3}=0$ 时两个漏极都接地，唯一的差别在跨导：

$$
i_1-i_2=\Delta g_{m1-2}(v_{ic}-v_t).
$$

平均电流满足 $i_2\approx g_{m1-2}(v_{ic}-v_t)-v_t/r_o$，且 $v_t\approx2i_2r_{tail}$，故 $g_{m1-2}(v_{ic}-v_t)\approx i_2(1+2r_{tail}/r_{o(dp)})$。因此

$$
\epsilon_d=-\frac{i_1-i_2}{i_2}=-\frac{\Delta g_{m1-2}}{g_{m1-2}}\left(1+\frac{2r_{tail}}{r_{o(dp)}}\right)=-(0.1)(1+1)=-0.20 .
$$

### 第 4 步 — (d) 只有 $r_{o1}\ne r_{o2}$ 时的 $\epsilon_d$

两个漏极仍都接地，跨导项相等，只有流过 $r_o$ 的电流不同：

$$
i_1-i_2=-v_t\left(\frac1{r_{o1}}-\frac1{r_{o2}}\right)=v_t\frac{r_{o1}-r_{o2}}{r_{o1}r_{o2}}\approx v_t\frac{\Delta r_{o(dp)}}{r_{o(dp)}^2},
$$

再由 $v_t\approx2i_2r_{tail}$，

$$
\epsilon_d=-\frac{i_1-i_2}{i_2}=-\frac{2r_{tail}}{r_{o(dp)}}\cdot\frac{\Delta r_{o(dp)}}{r_{o(dp)}}=-(1.0)\frac{(0.95-1.05)\ \mathrm{M\Omega}}{1\ \mathrm{M\Omega}}=+0.10 .
$$

### 第 5 步 — (e) 总的 $\epsilon_d$

由于每种失配都只是其平均值的一小部分，相互作用是二阶的，三项贡献可以相加：

$$
\epsilon_d\approx\frac1{1+g_{m3}r_{o(dp)}}-\frac{\Delta g_{m1-2}}{g_{m1-2}}\left(1+\frac{2r_{tail}}{r_{o(dp)}}\right)-\frac{2r_{tail}}{r_{o(dp)}}\frac{\Delta r_{o(dp)}}{r_{o(dp)}},
$$

当 $g_{m3}r_{o(dp)}\gg1$ 时（第一项 $\approx1/(g_{m3}r_{o(dp)})$）即化为题给表达式。数值为

$$
\epsilon_d\approx0.0009-0.20+0.10=-0.099 .
$$

精确的小信号解给出 $-0.104$。

### 第 6 步 — (f) 电流镜误差 $\epsilon_m$

二极管节点上 $1/g_{m3}$ 与 $r_{o3}$ 并联，因此电流 $i_3$ 产生

$$
v_3=i_3\left(\frac1{g_{m3}}\Big\|\,r_{o3}\right)=\frac{i_3r_{o3}}{1+g_{m3}r_{o3}},\qquad
g_{m4}v_3=i_3\,\frac{g_{m4}r_{o3}}{1+g_{m3}r_{o3}}=i_3(1-\epsilon_m).
$$

故

$$
\epsilon_m=1-\frac{g_{m4}r_{o3}}{1+g_{m3}r_{o3}}=\frac{1}{1+g_{m3}r_{o3}}+\frac{(g_{m3}-g_{m4})r_{o3}}{1+g_{m3}r_{o3}}\simeq\frac1{g_{m3}r_{o3}}+\frac{\Delta g_{m3-4}}{g_{m3-4}} .
$$

数值上，近似式给出 $0.0009+0.2=0.201$，精确式给出 $201/1101=0.183$。

### 第 7 步 — (g) $G_m[cm]$ 与 CMRR

$2r_{tail}=1$ MΩ，采用近似误差：

$$
G_m[cm]\simeq-\frac{\epsilon_d+\epsilon_m}{2r_{tail}}=-\frac{-0.099+0.201}{1\ \mathrm{M\Omega}}=-0.10\ \mu\mathrm{A/V},
\qquad
\mathrm{CMRR}=\left|\frac{G_m[dm]}{G_m[cm]}\right|=\frac{0.907\ \mathrm{mA/V}}{0.10\ \mu\mathrm{A/V}}=8.9\times10^{3}\ (79\ \mathrm{dB}).
$$

若用精确的 $\epsilon_m=0.183$：$G_m[cm]=-0.083\ \mu$A/V，CMRR $=1.1\times10^{4}$。

没有失配时 $\epsilon_d\approx\epsilon_m\approx1/1001$，故

$$
G_m[cm]\approx-\frac{2/1001}{1\ \mathrm{M\Omega}}=-2.0\ \mathrm{nA/V},\qquad
\mathrm{CMRR}=\frac{1.0\ \mathrm{mA/V}}{2.0\ \mathrm{nA/V}}=5.0\times10^{5}\ (114\ \mathrm{dB}),
$$

它等于 $2g_{m(dp)}r_{tail}\cdot g_{m(mir)}(r_{o(dp)}\parallel r_{o(mir)})$。10%–20% 的失配使 $|G_m[cm]|$ 增大约 50 倍，使 CMRR 损失约 35 dB。

### 第 8 步 — SPICE 验证（线性小信号模型）

用与差模跨导相同的小信号网表，以 $v_{i1}=v_{i2}=1$ V 驱动；短路输出的 0 V 电压源中的电流即为 $G_m[cm]$：

```spice
* grsim-04-19 small-signal model of the mirror-loaded pair (CM input)
V1  g1 0 1
V2  g2 0 1
G1  d1 t g1 t 1.05m
RO1 d1 t 0.95meg
G2  out t g2 t 0.95m
RO2 out t 1.05meg
G3  d1 0 d1 0 1.1m
RO3 d1 0 1meg
G4  out 0 d1 0 0.9m
RO4 out 0 1meg
RO5 t 0 0.5meg
VSH out 0 0
.control
op
print i(VSH) v(t) v(d1)
.endc
.end
```

| 量 | 手算（近似 $\epsilon$） | ngspice |
|---|---|---|
| $i_2/v_{ic}$ | $\approx1/(2r_{tail})=1.0\ \mu$A/V | 0.949 μA/V |
| $\epsilon_d$ | −0.099 | −0.104 |
| $\epsilon_m$ | 0.201（精确式 0.183） | 0.183 |
| 有失配时的 $G_m[cm]$ | −0.10 μA/V（用精确 $\epsilon_m$ 为 −0.083） | −0.092 μA/V |
| 有失配时的 CMRR | $8.9\times10^{3}$ 至 $1.1\times10^{4}$（79–81 dB） | $9.8\times10^{3}$（79.8 dB） |
| 无失配时的 $G_m[cm]$ | −2.0 nA/V | −1.99 nA/V |
| 无失配时的 CMRR | $5.0\times10^{5}$（114 dB） | $5.0\times10^{5}$（114 dB） |

仿真证实了手算估计。剩余的差别来自略去的乘积项：精确地，$i_{out}=(1-\epsilon_m)i_1-i_2=-i_2(\epsilon_d+\epsilon_m-\epsilon_d\epsilon_m)$。$\epsilon_d=-0.104$、$\epsilon_m=0.183$ 时，$\epsilon_d\epsilon_m=-0.019$ 不可忽略；计入该项并取 $i_2/v_{ic}=0.949\ \mu$A/V，可精确重现 $-0.0924\ \mu$A/V。
