# 详细步骤 - G208

泄放电阻 $R_B$ 从两方面改变达林顿级：它提高了 $I_{C1}$（从而减小 $r_{\pi1}$）；在小信号电路中它与 $r_{\pi2}$ 并联，把 $Q_1$ 的一部分发射极电流从 $Q_2$ 的基极分流掉。先求输入电阻和基极电流，再把两个集电极电流在输出端相加。

### 第 1 步 — 小信号参数

$$
r_{\pi1}=\frac{\beta V_T}{I_{C1}}=\frac{100(26\ \mathrm{mV})}{50\ \mu\mathrm A}=52\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega},\qquad
r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻与基极电流

$Q_1$ 的发射极电流 $(\beta+1)i_{b1}$ 流入 $r_{\pi2}\parallel R_B$，故

$$
R_i=r_{\pi1}+(\beta+1)(r_{\pi2}\parallel R_B)=52\ \mathrm{k\Omega}+101(2.22\ \mathrm{k\Omega})=275.8\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{375.8\ \mathrm{k\Omega}}.
$$

### 第 3 步 — 输出电流与增益

$R_B$ 与 $r_{\pi2}$ 对发射极电流分流，只有一部分成为 $Q_2$ 的基极电流：

$$
i_{b2}=(\beta+1)i_{b1}\,\frac{R_B}{R_B+r_{\pi2}}=101\cdot\frac{15}{17.6}\,i_{b1}=86.1\,i_{b1}.
$$

两个集电极都接到 $R_L$：

$$
i_{c1}+i_{c2}=\beta i_{b1}+\beta i_{b2}=(100+8608)\,i_{b1}=8708\,i_{b1},
$$
$$
\frac{v_o}{v_i}=-\frac{(8708)(3\ \mathrm{k\Omega})}{375.8\ \mathrm{k\Omega}}=-69.5 .
$$

与无 $R_B$ 时的 −49.1 相比增益提高，因为小得多的 $R_i$ 使 $v_i$ 中有更大比例越过 $R_S$ 到达晶体管；$R_B$ 分流造成的损失小于输入端的这一收益。
