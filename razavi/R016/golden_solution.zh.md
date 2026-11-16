$V_{in} \le 0.7$ V 时 $V_{out} = 0$；$V_{in}$ 更大时，$M_1$ 作为源极跟随器（source follower）工作，以 $V_{out}$ 为源极、1 V 节点为漏极，因此 $V_{out}$ 以小于 1 的斜率上升；大约在 $V_{in} \approx 1.9$ V 以上，$M_1$ 进入线性区（triode region），$V_{out}$ 变得平坦，逐渐接近但永远不会超过 1 V。
- 流过 $R_1$ 的电流必须来自 1 V 电源并经过 $M_1$，因此 $0 \le V_{out} < 1$ V：$V_{out}$ 节点是源极，1 V 节点是漏极；$V_{GS} = V_{in} - V_{out}$，$V_{SB} = V_{out}$。
- 当 $V_{in} > V_{out} + V_{TH}(V_{out})$ 时导通；在 $V_{out} = 0$ 时，该值为 0.7 V。
- 当 $1 - V_{out} > V_{in} - V_{out} - V_{TH}$，即 $V_{in} < 1 + V_{TH}(V_{out})$ 时，器件处于饱和区（saturation region）：$V_{out} = \tfrac12\beta R_1(V_{in} - V_{out} - V_{TH})^2$，即 $V_{out} = V_{in} - V_{TH}(V_{out}) - \sqrt{2V_{out}/(\beta R_1)}$。斜率小于 1，原因是 $\beta R_1$ 有限以及存在体效应（body effect）：当 $V_{out}$ → 1 V 时，$V_{TH}$ 从 0.7 V 上升到接近 0.89 V。
- 当 $V_{in} \gtrsim 1 + V_{TH} \approx 1.8$–1.9 V 时：线性区，随着 $V_{in}$ 增大，$V_{out} \to 1$ V（渐近趋近，接近的程度取决于 $\beta R_1$）。
