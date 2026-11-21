# 详细步骤 - G382

采用差模和共模半边电路。在每个半边电路中，栅极电流由 $C_{gs}$ 和 $C_{gd}$ 乘以其两端电压决定，而该电压由低频增益给出（密勒效应）。由此得到每种模式的输入电容；再把 $Z_{id}$ 和 $Z_{ic}$ 的定义换算为电容，并与 T 形和 π 形网络对应，即得各元件值。

### 第 1 步 — 半边电路的低频增益

取 $g_{m1}=1$ mA/V、$r_{o1}=100$ kΩ、$r_{o3}=200$ kΩ，共模尾电阻 $r_{o5h}=2r_{o5}=100$ kΩ：

- 差模半边电路：$M_1$ 的源极为交流地，栅极到漏极的增益为 $a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7$。
- 共模半边电路：栅极接 $v_{ic}$，源极经 $r_{o5h}$ 接地，漏极负载为 $r_{o3}$。漏极电流与源极电流相等，故 $v_s/r_{o5h}=-v_{oc}/r_{o3}$，即 $v_s=-v_{oc}/2$。在源极列 KCL，$v_s/r_{o5h}=g_{m1}(v_{ic}-v_s)+(v_{oc}-v_s)/r_{o1}$，得到

$$
\frac{v_s}{v_{ic}}=\frac{25}{26}=0.962,\qquad \frac{v_{oc}}{v_{ic}}=-\frac{25}{13}=-1.92 .
$$

### 第 2 步 — 每个半边电路的输入电容

栅极电流为 $sC_{gs}(v_g-v_s)+sC_{gd}(v_g-v_d)$。差模时 $v_s=0$，$v_d=a_{dm}v_g$：

$$
C_{idh}=C_{gs}+C_{gd}(1-a_{dm})=180\ \mathrm{fF}+(20\ \mathrm{fF})(67.7)=1.53\ \mathrm{pF}.
$$

共模时源极紧跟栅极，使 $C_{gs}$ 被自举（bootstrapping），而漏极与栅极反向变化：

$$
C_{ich}=C_{gs}\left(1-\frac{25}{26}\right)+C_{gd}\left(1+\frac{25}{13}\right)=6.9\ \mathrm{fF}+58.5\ \mathrm{fF}=65.4\ \mathrm{fF}.
$$

若在共模半边电路中忽略 $r_{o1}$，则 $v_s/v_{ic}\approx0.99$，增益约为 $-1.98$，$C_{ich}\approx61$ fF。

### 第 3 步 — $Z_{id}$ 与 $Z_{ic}$

差模时 $i_{i1}=sC_{idh}v_{id}/2$，$i_{i2}=-i_{i1}$，故 $i_{id}=i_{i1}$，

$$
Z_{id}=\frac{v_{id}}{i_{id}}=\frac{2}{sC_{idh}},
$$

即电容 $C_{idh}/2=0.77$ pF。共模时 $i_{i1}=i_{i2}=sC_{ich}v_{ic}$，故 $i_{ic}=i_{i1}$，$Z_{ic}=1/(sC_{ich})$，即 65.4 fF 的电容。

### 第 4 步 — T 形网络元件

每个串联元件为 $Z_{id}/2=1/(sC_{idh})$，即 1.53 pF 的电容。并联支路元件为

$$
\frac{Z_{ic}}{2}-\frac{Z_{id}}{4}=\frac{1}{s}\left(\frac{1}{2C_{ich}}-\frac{1}{2C_{idh}}\right),\qquad
C=\left(\frac{1}{130.8\ \mathrm{fF}}-\frac{1}{3067\ \mathrm{fF}}\right)^{-1}=137\ \mathrm{fF}.
$$

### 第 5 步 — π 形网络元件

每个并联元件为 $Z_{ic}$，即 65.4 fF 的电容。桥接元件 $Z_{id}\parallel(-2Z_{ic})$ 的导纳为 $sC_{idh}/2-sC_{ich}/2$，即电容

$$
C=\frac{C_{idh}}{2}-\frac{C_{ich}}{2}=767\ \mathrm{fF}-33\ \mathrm{fF}=734\ \mathrm{fF}.
$$

| 元件 | 数值 | 取 $C_{ich}\approx61$ fF 时 |
|---|---|---|
| T 形串联，$Z_{id}/2$ | 各 1.53 pF | 1.53 pF |
| T 形并联，$Z_{ic}/2-Z_{id}/4$ | 137 fF | 128 fF |
| π 形并联，$Z_{ic}$ | 各 65.4 fF | 61 fF |
| π 形桥接，$Z_{id}\parallel(-2Z_{ic})$ | 734 fF | 736 fF |

差模输入电容很大，是因为密勒效应把 $C_{gd}$ 放大了 $1+66.7$ 倍；而共模时尾电流的负反馈使增益很小，并几乎抵消了 $C_{gs}$。
