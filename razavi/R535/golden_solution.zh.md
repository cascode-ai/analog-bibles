$I_{out} = \dfrac{2}{R_S^2}\left(\dfrac{1}{\sqrt{\beta_1}} - \dfrac{1}{\sqrt{\beta_2}}\right)^2 = \dfrac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \dfrac{1}{\sqrt{K}}\right)^2$，其中 $K = (W/L)_2/(W/L)_1$；非零解要求 $\beta_2 > \beta_1$（$M_2$ 的 $W/L$ 较大；若沟道长度相等，则它更宽）。结果与 $V_{DD}$ 无关，并且由于两个 NMOS 的源极都接地，不存在体效应（body effect）引起的误差。

推导：
- $M_3 = M_4$，因此 $M_4$ 的电流 $I_{REF}$ 等于 $I_{out}$。
- $R_S$ 接在 $M_1$ 的栅极（$M_4$ 的漏极）与 $M_1$ 的漏极之间，该漏极还驱动 $M_2$ 的栅极。栅极不吸取电流，因此 $I_{out}$ 经 $R_S$ 流入 $M_1$：$V_{GS1} = V_{GS2} + I_{out}R_S$。
- 平方律，$V_{TH}$ 相同（两个源极都接地）：$V_{TH} + \sqrt{2I_{out}/\beta_1} = V_{TH} + \sqrt{2I_{out}/\beta_2} + I_{out}R_S$，因此 $\sqrt{2I_{out}}\,(1/\sqrt{\beta_1} - 1/\sqrt{\beta_2}) = I_{out}R_S$，由此得到上述结果。
- 附加条件：$M_1$ 的 $V_{DS1} = V_{GS2}$，若 $I_{out}R_S \le V_{TH}$，则它保持饱和。该环路也允许 $I_{out} = 0$，因此仍需要启动电路（start-up circuit）。
