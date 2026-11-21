# 详细步骤 - G204

把达林顿对看作一个复合晶体管：先求从 $Q_1$ 基极看进去的输入电阻，再求它从信号源吸取的基极电流，乘以复合电流增益即得流过 $R_L$ 的输出电流。两个集电极都接到输出端，因此两个集电极电流都要计入。

### 第 1 步 — 小信号参数

$$
g_{m1}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.385\ \mathrm{mA/V},\quad r_{\pi1}=\frac{\beta}{g_{m1}}=260\ \mathrm{k\Omega};\qquad
g_{m2}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻与基极电流

$Q_1$ 的发射极电流 $(\beta+1)i_{b1}$ 就是 $Q_2$ 的基极电流并流过 $r_{\pi2}$，所以 $r_{\pi2}$ 乘以 $\beta+1$ 后反映到输入端：

$$
R_i=r_{\pi1}+(\beta+1)r_{\pi2}=260\ \mathrm{k\Omega}+101(2.6\ \mathrm{k\Omega})=522.6\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{622.6\ \mathrm{k\Omega}}.
$$

### 第 3 步 — 输出电流与增益

由 $i_{b2}=(\beta+1)i_{b1}$，流入输出节点的集电极电流总和为

$$
i_{c1}+i_{c2}=\beta i_{b1}+\beta(\beta+1)i_{b1}=\beta(\beta+2)\,i_{b1}=10\,200\,i_{b1}.
$$

该电流流过 $R_L$，故 $v_o=-\beta(\beta+2)R_Li_{b1}$，且

$$
\frac{v_o}{v_i}=-\frac{\beta(\beta+2)R_L}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}
=-\frac{(10\,200)(3\ \mathrm{k\Omega})}{622.6\ \mathrm{k\Omega}}=-49.1 .
$$

由于 $R_S=100$ kΩ 相对于 $R_i$ 不可忽略，只有约 84 % 的 $v_i$ 加到复合管的基极-发射极通路上；若 $R_S=0$，增益将为 $-58.6$。
