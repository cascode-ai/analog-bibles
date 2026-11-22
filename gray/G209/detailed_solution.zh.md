# 详细步骤 - G209

输入侧与带泄放电阻的达林顿级相同：$R_B$ 提高了 $I_{C1}$，并在小信号电路中与 $r_{\pi2}$ 并联。由于 $Q_1$ 的集电极接交流地，只有 $Q_2$ 的集电极电流流入 $R_L$。

### 第 1 步 — 小信号参数

$$
r_{\pi1}=\frac{100(26\ \mathrm{mV})}{50\ \mu\mathrm A}=52\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega},\qquad
r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻与基极电流

$$
R_i=r_{\pi1}+(\beta+1)(r_{\pi2}\parallel R_B)=52\ \mathrm{k\Omega}+223.8\ \mathrm{k\Omega}=275.8\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{375.8\ \mathrm{k\Omega}}.
$$

### 第 3 步 — 输出电流与增益

$Q_1$ 的发射极电流在 $R_B$ 与 $r_{\pi2}$ 之间分流：

$$
i_{b2}=(\beta+1)i_{b1}\,\frac{R_B}{R_B+r_{\pi2}}=86.1\,i_{b1},\qquad
i_{c2}=\beta i_{b2}=8608\,i_{b1}.
$$

只有 $i_{c2}$ 流过 $R_L$，故

$$
\frac{v_o}{v_i}=-\frac{(8608)(3\ \mathrm{k\Omega})}{375.8\ \mathrm{k\Omega}}=-68.7 .
$$

这比带相同泄放电阻的达林顿级（−69.5）约低 1 %，差别在于 $Q_1$ 的集电极电流 $\beta i_{b1}$ 在这里流回交流地。
