# 详细步骤 - G221

偏置和器件参数与未加电容的级相同；20 pF 电容在直流和低频时开路，因此不改变跨阻。对带宽而言，它与 $C_{\mu1}$ 并联，从 $Q_1$ 的基极接到输出，因而被该级的高增益密勒倍增。其余零值时间常数都不变。

### 第 1 步 — 偏置与小信号参数

$Q_3$ 使三只晶体管的电流都为 $I_C=(10\ \mathrm V-0.7\ \mathrm V)/30\ \mathrm{k\Omega}=0.31$ mA，故 $g_m=11.9$ mA/V，

$$
r_{\pi1}=\frac{50}{g_m}=4.19\ \mathrm{k\Omega},\qquad
R_{\text{out}}=r_{o1}\parallel r_{o2}=\frac{50\ \mathrm V}{0.31\ \mathrm{mA}}\parallel\frac{120\ \mathrm V}{0.31\ \mathrm{mA}}=161\ \mathrm{k\Omega}\parallel387\ \mathrm{k\Omega}=113.9\ \mathrm{k\Omega}.
$$

由 $f_T$ 和结电容公式（反偏电压由 $V_{b1}=9.3$ V、$V_O=0$、$V_{bm}=-9.3$ V 及位于 $-10$ V 的衬底求得）：$C_{\pi1}=475$ pF（横向 pnp 管 $\tau_F=39.6$ ns），$C_{\mu1}=0.236$ pF，$C_{bs1}=0.333$ pF，$C_{\pi2}=C_{\pi3}=5.65$ pF，$C_{\mu2}=0.165$ pF，$C_{cs2}=0.457$ pF，$C_{cs3}=1.33$ pF。

### 第 2 步 — 低频跨阻

$i_i$ 全部经 $r_{\pi1}$ 抽出，使 $Q_1$ 的发射极-基极电压升高，其集电极向输出送入 $\beta_1i_i$：

$$
\frac{v_o}{i_i}=+\beta_1R_{\text{out}}=50\,(113.9\ \mathrm{k\Omega})=5.69\ \mathrm{M\Omega}.
$$

### 第 3 步 — 密勒电容

外加的 20 pF 与 $C_{\mu1}$ 合计 $C_F=20.24$ pF，连接 $b_1$ 与输出。输入电流源开路时，$b_1$ 看到 $r_{\pi1}$，故

$$
R_{\mu1}=r_{\pi1}+R_{\text{out}}+g_mR_{\text{out}}r_{\pi1}=4.19\ \mathrm{k\Omega}+113.9\ \mathrm{k\Omega}+5.69\ \mathrm{M\Omega}=5.81\ \mathrm{M\Omega},
$$
$$
C_FR_{\mu1}=(20.24\ \mathrm{pF})(5.81\ \mathrm{M\Omega})=117.6\ \mu\mathrm s .
$$

### 第 4 步 — 时间常数之和

| 电容 | 电阻 | 时间常数 |
|---|---|---|
| $C_{\pi1}=475$ pF | 4.19 kΩ | 1.99 µs |
| $C_{\mu1}+20\ \mathrm{pF}=20.24$ pF | 5.81 MΩ | 117.6 µs |
| $C_{cs2}=0.457$ pF | 113.9 kΩ | 0.052 µs |
| $C_{\mu2}=0.165$ pF | 225 kΩ | 0.037 µs |
| $C_{bs1}$, $C_{\pi2}$, $C_{\pi3}$, $C_{cs3}$ | 4.19 kΩ / 82 Ω | 0.002 µs |

$$
T_0=119.7\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=1.33\ \mathrm{kHz}.
$$

由于密勒电容形成了明显的主极点，精确节点分析同样给出 1.33 kHz。其等效输入电容约为 $C_F(1+g_mR_{\text{out}})\approx1.4$ nF，因此与未加电容时（46 kHz）相比带宽降低约 35 倍，而低频跨阻仍为 5.7 MΩ。
