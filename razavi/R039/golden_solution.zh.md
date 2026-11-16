证明。设器件工作在饱和区（saturation region），采用包含 $C_{GS}$、$C_{GD}$ 和结电容的小信号模型（small-signal model），并忽略饱和区中的 $C_{GB}$：
- 用小信号电流 $I_{in}$ 驱动栅极，并把源极、漏极以及衬底（bulk）短接到交流地。此时 $C_{SB}$ 和 $C_{DB}$ 两端都接交流地，不流过信号电流，这就是结电容不出现在 $f_T$ 中的原因。
- $I_{in}$ 全部流入并联的 $C_{GS}$ 和 $C_{GD}$：$V_{gs} = I_{in}/[j\omega(C_{GS} + C_{GD})]$。
- 输出（漏极）电流为 $I_{out} = g_mV_{gs}$。这里忽略了经 $C_{GD}$ 流过的前馈（feedforward）电流 $j\omega C_{GD}V_{gs}$；当 $C_{GD} \ll C_{GS}$ 时，它与 $g_mV_{gs}$ 相比很小。
- 电流增益 $|I_{out}/I_{in}| = g_m/[\omega(C_{GS} + C_{GD})]$，在 $\omega_T = g_m/(C_{GS} + C_{GD})$ 处等于 1，因此 $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$。
