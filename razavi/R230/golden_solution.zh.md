当 $V_{DD} < |V_{THP}| = 0.8$ V 时，$I_{out} = 0$；高于 0.8 V 后，电流从零开始上升，此时 $M_2$ 处于线性区（triode region）；一旦 $V_{DD} \ge V_{DD,1} = |V_{THP}| + \sqrt{\dfrac{2I_{D2}}{\mu_pC_{ox}(W/L)_3}} + \sqrt{\dfrac{2I_{REF}}{\mu_nC_{ox}(W/L)_1}}$，电流就趋于平坦，$I_{out} = \dfrac{(W/L)_2}{(W/L)_1}\cdot\dfrac{(W/L)_4}{(W/L)_3}I_{REF}$，并一直保持到 3 V。

- 由于 $I_{REF}$ 是理想的，$M_1$ 总是流过 $I_{REF}$，且 $V_{GS1} = 0.7\ \mathrm{V} + \sqrt{2I_{REF}/[\mu_nC_{ox}(W/L)_1]}$ 与 $V_{DD}$ 无关，因此 $M_2$ 的栅极始终处于偏置状态。
- $M_2$–$M_3$ 支路需要 $V_{DD} = |V_{GS3}| + V_{DS2}$。当 $V_{DD} < 0.8$ V 时，二极管连接（diode-connected）的 $M_3$ 无法导通：$I_{D2} = I_{D3} = I_{out} = 0$。
- 刚超过 0.8 V 时，$V_{DS2}$ 很小，$M_2$ 处于深线性区（deep triode region），相当于电阻 $1/[\mu_nC_{ox}(W/L)_2(V_{GS1}-V_{TH})]$，因此电流主要由 $M_3$ 决定：开始时约为 $\tfrac12\mu_pC_{ox}(W/L)_3(V_{DD}-0.8)^2$，随后逐渐弯曲变平。
- 当 $V_{DS2} = V_{GS1} - V_{TH} = \sqrt{2I_{REF}/[\mu_nC_{ox}(W/L)_1]}$，即在上面给出的 $V_{DD,1}$ 处，$M_2$ 进入饱和，此时 $I_{D2} = [(W/L)_2/(W/L)_1]I_{REF}$。曲线平滑地到达平台（在饱和边缘处斜率为零）。
- $M_4$ 以 $(W/L)_4/(W/L)_3$ 的比例镜像 $M_3$ 的电流；其漏极接地，因此始终处于饱和。$V_{DD,1}$ 以上输出电流恒定（若 $\lambda > 0$，则会略有上升）。
