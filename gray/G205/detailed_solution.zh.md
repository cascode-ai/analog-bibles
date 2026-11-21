# 详细步骤 - G205

输入通路与达林顿级相同：$Q_1$ 的发射极电流就是 $Q_2$ 的基极电流。区别在于 $Q_1$ 的集电极接交流地，因此只有 $Q_2$ 的集电极电流流入 $R_L$。先求从信号源吸取的基极电流，再求输出电流。

### 第 1 步 — 小信号参数

$$
r_{\pi1}=\frac{\beta V_T}{I_{C1}}=\frac{100(26\ \mathrm{mV})}{10\ \mu\mathrm A}=260\ \mathrm{k\Omega},\qquad
r_{\pi2}=\frac{\beta V_T}{I_{C2}}=\frac{100(26\ \mathrm{mV})}{1\ \mathrm{mA}}=2.6\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻与基极电流

射极跟随器 $Q_1$ 把 $(\beta+1)i_{b1}$ 送入 $r_{\pi2}$，故

$$
R_i=r_{\pi1}+(\beta+1)r_{\pi2}=260\ \mathrm{k\Omega}+262.6\ \mathrm{k\Omega}=522.6\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{622.6\ \mathrm{k\Omega}}.
$$

### 第 3 步 — 输出电流与增益

$i_{b2}=(\beta+1)i_{b1}$，故 $i_{c2}=\beta(\beta+1)i_{b1}=10\,100\,i_{b1}$，只有该电流流过 $R_L$：

$$
\frac{v_o}{v_i}=-\frac{\beta(\beta+1)R_L}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}
=-\frac{(10\,100)(3\ \mathrm{k\Omega})}{622.6\ \mathrm{k\Omega}}=-48.7 .
$$

结果略低于达林顿级的 −49.1，因为 $Q_1$ 的集电极电流（$\beta i_{b1}$，约占总电流的 1 %）现在流回交流地，而不是加到输出上。
