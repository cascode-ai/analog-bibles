$L_{b,max} = R_S^2C/4 \approx 0.088$ pH。这里用到 $C = WLC_{ox} = 192$ fF，以及由分布式沟道结果得到的 $M_1$ 沟道等效串联电阻（ESR），$R_S \approx R_{tot}/12 \approx 1.35\ \Omega$（$R_{tot} = 16.2\ \Omega$）。较粗略的集总估计 $R_S \approx R_{tot}/4 \approx 4.06\ \Omega$ 给出 ≈ 0.79 pH。无论哪种情况，结果都比实际的键合线（bond wire）或封装电感（~1 nH）小几个数量级，因此单个 100/0.5 的器件无法使电源节点达到临界阻尼。

- 把 $M_1$ 视为电容：栅极接 $X$（直流 3 V），沟道接地，因此 $V_{GS} - V_{TH} = 2.3$ V，$C = (100)(0.5)\ \mu\mathrm{m^2} \times 3.84\ \mathrm{fF/\mu m^2} = 192$ fF。沟道电阻为 $R_{tot} = 1/[\mu_nC_{ox}(W/L)(2.3)] = 16.2\ \Omega$。沟道是一条从两端馈电的分布式 RC 线（distributed RC line），因此 $R_S = R_{tot}/12 = 1.35\ \Omega$（每一半为 $R_{tot}/2$ 与 $C/2$，贡献其电阻的三分之一，两半相互并联）；若把每一半的电阻全部集总计入，则得到 $R_{tot}/4 = 4.06\ \Omega$。
- 节点 $X$ 经 $L_b$ 接到 $V_{DD}$（交流地），经 $R_S$ 与 $C$ 的串联支路接地，并接有电流源 $I_{DD}$：
  $\dfrac{V_X}{I_{DD}}(s) = -\dfrac{sL_b(1 + sR_SC)}{s^2L_bC + sR_SC + 1}$。
- 由特征多项式 $s^2L_bC + sR_SC + 1$ 可得阻尼比（damping factor）$\zeta = \dfrac{R_S}{2}\sqrt{C/L_b}$。临界阻尼即 $\zeta = 1$，由此得 $L_b = R_S^2C/4$。$L_b$ 更大时响应欠阻尼（出现振铃），因此这就是最大值。
- 数值计算：$(1.35\ \Omega)^2(192\ \mathrm{fF})/4 = 8.8\times10^{-14}$ H ≈ 0.088 pH；若用 $R_{tot}/4$，则 $(4.06\ \Omega)^2(192\ \mathrm{fF})/4 = 7.9\times10^{-13}$ H ≈ 0.79 pH。
- 模型适用范围：这里采用的是题目预期的集总模型（恒定的低频 ESR 与 C 串联，忽略交叠电容及其他寄生参数）。在由此得到的 $\omega_0 = 1/\sqrt{L_bC}$ 处，$\omega_0R_{tot}C \approx 24$，因此低频 ESR 在该频率下已不再准确；若采用完整的分布式沟道导纳 $Y = sC\tanh z/z$，$z = \sqrt{sR_{tot}C}/2$，则对任何有限的 $L_b$，特征方程 $1 + s^2L_bC\tanh z/z = 0$ 都没有负实数重根，因此并不存在精确的临界值。集总模型给出的数值是预期答案；无论采用哪种模型，单个这样的器件都无法对实际键合线提供足够阻尼的结论都成立。
