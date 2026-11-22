# 详细步骤 - G080

五个晶体管共用一个基极节点和一个发射极节点（地），因此 $V_{BE}$ 全部相同。相同的器件在 $V_{BE}$ 相同且 $V_{CE}$ 相等时，集电极电流也相同。先由电阻求出输入电流，再在基极节点列 KCL（两路集电极电流加五路基极电流）把它分配开，然后按三个输出器件放大，并计入 $V_{CE}=V_{OUT}$ 时的厄利效应。输出电阻就是三个输出晶体管并联的电阻。

### 第 1 步 — 由 [图 1] 读出镜像比

$Q_1$ 和 $Q_2$ 的集电极与基极相连，二者以二极管连接方式并联，经 $R$ 吸收输入电流，工作在 $V_{CE1}=V_{CE2}=V_{BE}$。$Q_3$、$Q_4$ 和 $Q_5$ 的集电极在输出端相连，工作在 $V_{CE}=V_{OUT}$。在正向放大区，

$$
I_C=I_Se^{V_{BE}/V_T}\left(1+\frac{V_{CE}}{V_A}\right),\qquad I_B=\frac{I_C}{\beta_F}.
$$

在 $V_{BE}$ 相同、并暂取 $V_{CE}$ 相等时，每个器件的 $I_C$ 都相同。两个器件设定电流、三个器件复制电流，因此理想镜像比（mirror ratio）为 $I_{OUT}/I_{IN}=3/2$。

### 第 2 步 — 输入电流与 $V_{BE}$

电阻上的压降为 $V_{CC}-V_{BE}$：

$$
I_{IN}=\frac{V_{CC}-V_{BE}}R,\qquad V_{BE}=V_T\ln\frac{I_C}{I_S}.
$$

$V_{BE}$ 只随电流对数变化，迭代几次即可收敛。从 0.7 V 出发得 $I_C\approx0.706$ mA。于是 $V_{BE}=(26\ \mathrm{mV})\ln(0.708\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.6676$ V，并且

$$
I_{IN}=\frac{15\ \mathrm V-0.6676\ \mathrm V}{10\ \mathrm{k\Omega}}=1.4332\ \mathrm{mA}.
$$

### 第 3 步 — 基极电流：$V_{CE}=V_{BE}$ 时的输出电流

电阻电流供给 $Q_1$、$Q_2$ 的集电极以及全部五个晶体管的基极。在该节点列 KCL，每路基极电流为 $I_C/\beta_F$，得

$$
I_{IN}=2I_C+\frac{5I_C}{\beta_F}\quad\Rightarrow\quad I_C=\frac{I_{IN}}{2+5/\beta_F}=\frac{1.4332\ \mathrm{mA}}{2.025}=0.7078\ \mathrm{mA}.
$$

$$
I_{OUT}=3I_C=\frac{1.5\,I_{IN}}{1+2.5/\beta_F}=\frac{1.5(1.4332\ \mathrm{mA})}{1.0125}=2.123\ \mathrm{mA}.
$$

不计基极电流时结果为 $1.5I_{IN}=2.150$ mA。五路基极电流都取自输入侧，使输出降低 1.2 %。

### 第 4 步 — 厄利效应：1 V、5 V 和 30 V 时的 $I_{OUT}$

输出器件工作在 $V_{CE}=V_{OUT}$，而参考器件工作在 $V_{CE}=V_{BE}$。取集电极电流表达式在两个 $V_{CE}$ 下之比，

$$
I_{OUT}=3I_C\,\frac{1+V_{OUT}/V_A}{1+V_{BE}/V_A}\approx3I_C\left(1+\frac{V_{OUT}-V_{BE}}{V_A}\right).
$$

以 $V_{OUT}=5$ V 为例：

$$
I_{OUT}=(2.123\ \mathrm{mA})\left(1+\frac{5\ \mathrm V-0.668\ \mathrm V}{130\ \mathrm V}\right)=(2.123\ \mathrm{mA})(1.0333)=2.194\ \mathrm{mA}.
$$

| $V_{OUT}$ (V) | $1+(V_{OUT}-V_{BE})/V_A$ | $I_{OUT}$ (mA) |
|---|---|---|
| 1 | 1.0026 | 2.129 |
| 5 | 1.0333 | 2.194 |
| 30 | 1.2256 | 2.602 |

精确的比值形式给出的数值与此相差不到 0.1 %。用这些参数对电路做 SPICE 仿真，得到 2.129、2.194 和 2.602 mA。

### 第 5 步 — 输出电阻

在输出端，三个集电极并联。它们的基极和发射极电压由输入侧固定，因此从集电极看进去，每个晶体管的电阻为 $r_o=V_A/I_C$：

$$
r_o=\frac{130\ \mathrm V}{0.7078\ \mathrm{mA}}=184\ \mathrm{k\Omega},\qquad
R_o=r_{o3}\|r_{o4}\|r_{o5}=\frac{r_o}3=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{2.123\ \mathrm{mA}}=61\ \mathrm{k\Omega}.
$$

在线性厄利模型下斜率为常数，$\mathrm dI_{OUT}/\mathrm dV_{OUT}=3I_C/(V_A+V_{BE})$，所以对任何 $V_{OUT}$ 都有 $R_o=(V_A+V_{BE})/(3I_C)=61.5\ \mathrm{k\Omega}$。它与 61 kΩ 的差别只在于 $r_o$ 取哪个电流为参考。第 4 步的表格与此一致：从 5 V 到 30 V，$\Delta V_{OUT}=25$ V 对应 $\Delta I_{OUT}=0.408$ mA，即 61 kΩ。
