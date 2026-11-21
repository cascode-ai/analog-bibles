# 详细步骤 - G090

在 $I_{OUT}$ 固定时，唯一可自由选择的设计量是输入电流 $I_{IN}$。$I_{IN}$ 越大，$R_1$ 可以越小，但电流比随之增大，需要更大的 $R_2$。把两个电阻都写成 $I_{IN}$ 的函数，相加后令总电阻的导数为零。

### 第 1 步 — 两个电阻与 $I_{IN}$ 的关系

$Q_1$ 为二极管连接，所以 $R_1$ 流过 $I_{IN}$，压降为 $V_{CC}-V_{BE1}$。忽略基极电流时，沿基极–发射极回路列 KVL 得 $V_{BE1}-V_{BE2}=I_{OUT}R_2$。对相同的器件取 $V_{BE}=V_T\ln(I_C/I_S)$，

$$
R_1=\frac{V_{CC}-V_{BE}}{I_{IN}},\qquad R_2=\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}} .
$$

$V_{BE}$ 只随 $I_{IN}$ 对数变化，所以把 $V_{CC}-V_{BE}$ 当作常数。

### 第 2 步 — 使总电阻最小

$$
R_T(I_{IN})=\frac{V_{CC}-V_{BE}}{I_{IN}}+\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}},
$$

$$
\frac{dR_T}{dI_{IN}}=-\frac{V_{CC}-V_{BE}}{I_{IN}^2}+\frac{V_T}{I_{OUT}I_{IN}}=0
\quad\Rightarrow\quad
I_{IN}=\frac{(V_{CC}-V_{BE})\,I_{OUT}}{V_T}.
$$

在该点 $d^2R_T/dI_{IN}^2=2(V_{CC}-V_{BE})/I_{IN}^3-V_T/(I_{OUT}I_{IN}^2)=V_T/(I_{OUT}I_{IN}^2)>0$，所以是最小值。代回得

$$
R_1=\frac{V_T}{I_{OUT}},\qquad R_2=\frac{V_T}{I_{OUT}}\ln\frac{V_{CC}-V_{BE}}{V_T}\approx\frac{V_T}{I_{OUT}}\ln\frac{V_{CC}}{V_T}\quad(V_{BE}\ll V_{CC}).
$$

在最优点，$R_1$ 流过 $I_{IN}$ 时压降为 $V_{CC}-V_{BE}$，这使 $R_1$ 恰好等于 $V_T/I_{OUT}$，即输出晶体管的小信号电阻 $1/g_m$。

### 第 3 步 — $V_{CC}=30$ V、$I_{OUT}=5\ \mu\mathrm A$ 时的数值

$$
R_1=\frac{26\ \mathrm{mV}}{5\ \mu\mathrm A}=5.2\ \mathrm{k\Omega},\qquad
R_2=(5.2\ \mathrm{k\Omega})\ln\frac{30\ \mathrm V}{26\ \mathrm{mV}}=(5.2\ \mathrm{k\Omega})\ln(1154)=(5.2\ \mathrm{k\Omega})(7.05)=36.7\ \mathrm{k\Omega},
$$

$$
I_{IN}=\frac{(30\ \mathrm V)(5\ \mu\mathrm A)}{26\ \mathrm{mV}}=5.8\ \mathrm{mA}.
$$

总电阻为 $R_1+R_2\approx42\ \mathrm{k\Omega}$。若保留 $V_{BE}=0.7$ V，则 $R_2=36.5\ \mathrm{k\Omega}$，$I_{IN}=5.6$ mA，$R_1$ 不变。

### 第 4 步 — 是否实用

这些数值不实用。参考支路约吸收 5.8 mA，是 5 µA 输出的 1000 多倍，功耗为 $(30\ \mathrm V)(5.8\ \mathrm{mA})\approx0.17$ W。Widlar 电流源的意义恰恰在于不用大电阻、不耗大功率就能产生小电流。而且节省的电阻也不多：$R_1$ 取 30 kΩ、$R_2$ 取 27.4 kΩ 的设计（$I_{IN}\approx1$ mA，总计 57 kΩ）只多用约 15 kΩ 电阻，功耗却只有约六分之一。实际设计中，$I_{IN}$ 按功耗或面积预算选取，远低于这一“最优”值。
