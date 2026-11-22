# 详细步骤 - grsim-07-01

在给定偏置下建立混合 π 模型。用密勒近似把 $C_\mu$ 换成输入端电容 $C_\mu(1+g_mR_L)$，求主极点。再由精确的两极点分母求次极点（non-dominant pole）。最后用 ngspice 对同一线性模型做交流分析和极零点分析，核对两项结果。

### 第 1 步 — 小信号参数

$V_A=\infty$ 时，混合 π 元件由偏置电流和 $f_T$ 求得：

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=\frac{200}{19.2\ \mathrm{mA/V}}=10.4\ \mathrm{k\Omega},
$$

$$
C_\pi+C_\mu=\frac{g_m}{2\pi f_T}=\frac{19.2\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}=6.12\ \mathrm{pF}\;\Rightarrow\;C_\pi=6.12-0.3=5.82\ \mathrm{pF}.
$$

低频增益等于输入端分压乘以 $-g_mR_L$：

$$
A_0=-g_mR_L\frac{r_\pi}{R_S+r_b+r_\pi}=-(57.7)\frac{10.4\ \mathrm{k\Omega}}{15.7\ \mathrm{k\Omega}}=-38.2\quad(31.6\ \mathrm{dB}).
$$

### 第 2 步 — (a) −3 dB 频率的密勒估算

内部基极节点看到的电阻为 $R=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.51\ \mathrm{k\Omega}$。$C_\mu$ 跨接在增益为 $-g_mR_L$ 的两端，其在输入端的密勒等效电容为

$$
C_M=C_\mu(1+g_mR_L)=(0.3\ \mathrm{pF})(58.7)=17.6\ \mathrm{pF},\qquad C_t=C_\pi+C_M=23.4\ \mathrm{pF}.
$$

$$
\omega_{-3\text{dB}}\approx\frac1{RC_t}=\frac{1}{(3.51\ \mathrm{k\Omega})(23.4\ \mathrm{pF})}=1.22\times10^7\ \mathrm{rad/s},\qquad f_{-3\text{dB}}\approx1.93\ \mathrm{MHz}.
$$

### 第 3 步 — (b) 次极点

电路有两个电容，因此有两个极点。极点相距很远时，两极点之和等于分母的系数之比，而主极点就是密勒极点，因此

$$
|p_2|\approx\frac1{R_LC_\mu}+\frac1{RC_\pi}+\frac1{R_LC_\pi}+\frac{g_m}{C_\pi}.
$$

逐项计算：

$$
|p_2|=(1.111+0.049+0.057+3.304)\times10^9\ \mathrm{s^{-1}}=4.52\times10^9\ \mathrm{rad/s}\quad(720\ \mathrm{MHz}).
$$

$g_m/C_\pi$ 项占主导：高频时 $C_\mu$ 把集电极与基极短接，晶体管相当于一个电阻为 $1/g_m$ 的二极管，与 $C_\pi$ 并联。此外在 $g_m/C_\mu=6.4\times10^{10}$ rad/s（10.2 GHz）处有一个右半平面零点（right-half-plane zero），此时流过 $C_\mu$ 的电流抵消了 $g_mv_\pi$。

### 第 4 步 — SPICE 核对

用 `.ac` 和 `.pz` 分析线性混合 π 模型（$r_b$、$r_\pi$、$C_\pi$、$C_\mu$ 以及压控电流源 $g_m$）：

```spice
* grsim-07-01 CE stage, linear hybrid-pi
Vs  s  0  ac 1
RS  s  b  5k
Rb  b  bi 300
Rpi bi 0  10.4k
Cpi bi 0  5.821p
Cmu bi c  0.3p
Gm  c  0  bi 0 19.2308m
RL  c  0  3k
.ac dec 200 1k 100G
.pz s 0 c 0 vol pz
.end
```

![共射级的仿真幅频响应，标出 −3 dB 点和次极点](/q/grsim-07-01/solution-bode.zh.svg)

| 量 | 手算 | ngspice |
|---|---|---|
| 低频增益 | −38.2（31.6 dB） | 31.6 dB |
| −3 dB 频率 | 1.93 MHz（密勒） | 1.915 MHz |
| 主极点 | — | $1.206\times10^7$ rad/s（1.92 MHz） |
| 次极点 | $4.52\times10^9$ rad/s（720 MHz） | $4.51\times10^9$ rad/s（718 MHz） |
| 零点 | $6.4\times10^{10}$ rad/s（右半平面） | $6.41\times10^{10}$ rad/s（右半平面） |

密勒估算与仿真的 −3 dB 频率相差在 1 % 以内。它略偏高，因为忽略了 $C_\mu$ 加载输出端的时间常数 $R_LC_\mu=0.9$ ns，该时间常数应加到 $RC_t=82$ ns 上。次极点公式的误差在 0.3 % 以内。相位只有在远高于 1 GHz 时才趋近 −270°，此时右半平面零点开始贡献相位滞后。
