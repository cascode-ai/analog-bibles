局部 CMFB 放大器：$a_{dm} \approx -15.4$，$a_{cm} \approx -0.0098$（≈ −0.01）。[图 2] 中的放大器：$a_{dm} = -66.7$，$a_{cm} \approx -1.92$（若取 $G_{mc} \approx 1/r_{o5h}$，则 ≈ −1.96 至 −2）。

参数值：$g_{m1} = g_{m3} = 1$ mA/V，$r_{o1} = 100$ kΩ，$r_{o3} = 200$ kΩ，$r_{o5h} = 2r_{o5} = 100$ kΩ。
- 差模半边电路（half circuit）：电阻中点和 PMOS 栅极均为交流地，因此 $M_3$ 只相当于 $r_{o3}$，每个输出端还接有 20 kΩ 负载。$a_{dm} = -g_{m1}(r_{o1}\|r_{o3}\|20\ \text{k}) = -1\ \text{mA/V} \times 15.4\ \text{k}\Omega = -15.4$。
- 共模半边电路：电阻中没有电流；$M_3$ 的栅极跟随 $v_{oc}$，因此 $M_3$ 为二极管连接（负载为 $1/g_{m3} = 1$ kΩ）。$M_1$ 带有 $r_{o5h}$ 的源极负反馈（source degeneration）：$G_m \approx 1/r_{o5h} = 10\ \mu$A/V。$a_{cm} \approx -(1/r_{o5h})(1/g_{m3}\|r_{o3}) \approx -1\ \text{k}/100\ \text{k} \approx -0.0099$（精确值为 −0.0098）。
- [图 2]：$a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -66.7$；$a_{cm} = -g_{m1}r_{o1}r_{o3}/[r_{o3} + r_{o1} + (1 + g_{m1}r_{o1})r_{o5h}] = -25/13 \approx -1.92$（若取 $G_{mc} \approx 1/r_{o5h}$，则 ≈ $-(R_{o(\text{down})}\|r_{o3})/r_{o5h} \approx -196\ \text{k}/100\ \text{k} = -1.96$）。
- 比较：局部 CMFB 使 $|a_{cm}|$ 降低约 200 倍（大致相当于单位检测增益的独立 CMFB 环路所能达到的效果），但电阻加重了差模半边电路的负载，使 $|a_{dm}|$ 减小约 4.3 倍。
