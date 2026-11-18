$\mathrm{CMRR}_{min} \approx 10^4$（80 dB）。

- 有限的 CMRR 相当于一个随共模输入变化的输入失调：$\Delta V_{OS} = \Delta V_{IC}/\mathrm{CMRR}$（CMRR $= |A_{dm}/A_{cm}| \approx (\partial V_{OS}/\partial V_{IC})^{-1}$）。
- 在 $V_{IC} = 0$ 时失调为零，最大共模偏移为 10 V（在 ±10 V 范围的任一端）。要求 $10\ \mathrm{V}/\mathrm{CMRR} < 1\ \mathrm{mV}$，得 $\mathrm{CMRR} > 10^4$。
- 更精细的修正只使结果改变约 0.1 %：运放自身的共模输入为 $V_{IC}R_2/(R_1+R_2) = 0.999V_{IC}$，而运放失调折算到电路输入端时要乘以因子 $(1+R_2/R_1)/(R_2/R_1) = 1.001$。因此无论哪种算法，都有 $\mathrm{CMRR} \ge 10^4$（80 dB）。
