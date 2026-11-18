(a) $a'_{cm} \approx -0.0050$。
- $g_{m1} = 1$ mA/V，$r_{o1} = 200$ kΩ，$r_{o3} = 400$ kΩ，$r_{o5h} = 200$ kΩ，$g_{m5h} = 1$ mA/V。
- 开环共模增益（common-mode gain）$a_{cm} \approx -(R_{o(\text{down})}\|r_{o3})/r_{o5h} = -396\ \text{k}/200\ \text{k} = -1.98$，其中 $R_{o(\text{down})} \approx r_{o1}g_{m1}r_{o5h} = 40$ MΩ。
- CMC 增益 $a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3}) \approx -396$。
- $a'_{cm} = a_{cm}/[1 + a_{cms}(-a_{cmc})] = -1.98/397 \approx -0.0050$（−46 dB）。

(b) 预期曲线：$|a'_{cm}|$ 从 100 Hz 到 MHz 范围内保持平坦，约为 0.005（−46 dB）。
- 在更高频率处，它以约 +20 dB/decade 上升。尾节点上的电容旁路了 $r_{o5}$，使开环共模增益在约 $1/(r_{o5}C_{\text{tail}})$ 处的零点以上升高；对于 100 fF 量级的尾节点电容，该零点约在 10 MHz。与此同时，CMFB 环路增益仍然很大，但不再增加。
- 输出极点为 $a_{cm}$ 和 $a_{cmc}$ 所共有。在闭合的 CMFB 环路中，它被推到约 $g_{m5h}/C_{\text{out}}$ 处；对于 100 fF 量级的输出节点电容，这超过 100 MHz，因此在所画范围内不会引起滚降。
- 确切的转折点取决于模型中的结电容和交叠电容。
