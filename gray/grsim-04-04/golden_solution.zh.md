表达式：令 $f = R_1/(R_1 + r_d)$ 为 $Q_2$ 基极电流变化中向下流过二极管串 $Q_4$–$Q_3$（小信号电阻 $r_d \approx 1/g_{m4} + 1/g_{m3} \approx 2/g_m$）而不是流入 $R_1$ 的部分。该电流经 $Q_3$–$Q_1$ 镜像到 $Q_2$ 的发射极，因此 $i_{e2} = f\,i_t/(1+f)$，$i_{b2} \approx -i_t/(1+f)$，得到
$R_o \approx r_{o2}\left[1 + \dfrac{\beta_0}{1 + f}\right] \approx \dfrac{\beta_0r_{o2}}{1 + f}$。
当 $R_1 \to \infty$ 时，$f \to 1$，$R_o \to \beta_0r_o/2$；当 $R_1 \to 0$ 时，$R_o \to \beta_0r_o$。

数值：$I_{IN} = (5 - 2V_{BE})/10\ \mathrm{k\Omega} = 0.370$ mA（$V_{BE} \approx 0.651$ V）；考虑有限 $\beta_F$，$I_{OUT} = I_{IN}\left[1 - \dfrac{4\beta_F + 2}{\beta_F^2 + 4\beta_F + 2}\right] = 0.363$ mA；$r_{o2} = V_A/I_{OUT} = 358$ kΩ；$r_d \approx 2(26\ \mathrm{mV}/0.37\ \mathrm{mA}) = 140$ Ω，$f = 0.986$；$R_o \approx 200\times358\ \mathrm{k}/1.986 \approx 36$ MΩ（≈ $\beta_0r_o/2$）。
最小输出电压：$V_{OUT(\min)} = V_{CE1} + V_{CE2(\text{sat})} \approx V_{BE(\text{on})} + V_{CE(\text{sat})} \approx 0.65 + 0.2 \approx 0.85$–0.9 V；低于此值时 $Q_2$ 饱和，$R_o$ 急剧下降。
$\beta_F$ 灵敏度：$\beta_F$ 由 200 → 100 使增益误差由 −1.97 % 变为 −3.87 %，因此 $I_{OUT}$ 由 0.363 mA 降至 0.356 mA（≈ −1.9 %）。
$I_{OUT}$–$V_{OUT}$：$V_{OUT} = 0$ 时 $I_{OUT} \approx -0.44$ mA（$V_{OUT}$ 较低时 $Q_2$ 的基极–集电极结正偏，$R_1$ 中约 (5 − 0.6) V/10 kΩ 的电流经它流出到输出端），在约 0.6–0.65 V 处过零，当 $Q_2$（在接近零时还有 $Q_1$）饱和时电流急剧上升，在 0.85–0.9 V 附近出现拐点，之后几乎平坦，约为 0.36 mA，斜率约为 1/36 MΩ（≈ 0.03 µA/V）。
